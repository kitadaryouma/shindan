const questions = {
  // --- --- --- --- --- --- --- --- --- --- ---
  // type:"question",
  // --- --- --- --- --- --- --- --- --- --- ---
  // ■テンプレート記入方法について
  // "0":{                      // questionID 最初の質問は"0"
  //   type:"question",         // "question" 固定
  //   question: "商業or同人",   // 質問文
  //   choices:[{               // 選択肢 画像の都合で最大４つまで。順にA～Dが振られる
  //     value:"商業",          // 選択肢表示
  //     image:"商業.jpg",      // 表示画像
  //     nextId:"00",           // クリックしたときに表示するquestionID
  //   },{                      // ２個目以降の選択肢
  //     value:"同人",          // 選択肢表示
  //     image:"同人.jpg",      // 表示画像 imgフォルダ以下を指定
  //     nextId:"01",           // クリック時に表示する次のquestionID
  //   }]                                     
  // },
  // --- --- --- --- --- --- --- --- --- --- ---
  "0":{
    type:"question",
    question: "商業or同人",
    choices:[{
      value:"商業",
      image:"商業.jpg",
      nextId:"00",
    },{
      value:"同人",
      image:"同人.jpg",
      nextId:"01",
    }]
  },
  "00":{
    type:"question",
    question: "漫画orラノベorフィギュア",
    choices:[{
      value:"漫画",
      image:"商業→漫画.jpg",
      nextId:"000",
    },{
      value:"ラノベ",
      image:"ラノベ.jpg",
      nextId:"001",
    },{
      value:"フィギュア",
      image:"フィギュア.jpg",
      nextId:"結果フィギュア",
    }]
  },
  "01":{
    type:"question",
    question: "画集or漫画",
    choices:[{
      value:"画集",
      image:"画集.jpg",
      nextId:"結果画集",
    },{
      value:"漫画",
      image:"同人→漫画.jpg",
      nextId:"010",
    }]
  },
  "000":{
    type:"question",
    question: "ラブコメorエロコメ",
    choices:[{
      value:"ラブコメ",
      image:"ラブコメ.jpg",
      nextId:"0000",
    },{
      value:"エロコメ",
      image:"エロコメ.jpg",
      nextId:"0001",
    }]
  },
  "001":{
    type:"question",
    question: "気になるタイトル",
    choices:[{
      value:"暗殺拳はチートに含まれますか？",
      image:"暗殺拳はチートに含まれますか？.jpg",
      nextId:"結果暗殺拳",
    },{
      value:"最強カップルのイチャイチャVRMMOライフ",
      image:"最強カップルのイチャイチャVRMMOライフ.jpg",
      nextId:"結果最強",
    },{
      value:"見知らぬ女子高生に監禁された漫画家の話",
      image:"ラノベ→見知らぬ女子高生に監禁された漫画家の話.jpg",
      nextId:"結果ラノベ見知らぬ",
    }]
  },
  "010":{
    type:"question",
    question: "電子連載or紙媒体",
    choices:[{
      value:"電子連載",
      image:"電子連載.jpg",
      nextId:"0100",
    },{
      value:"紙媒体",
      image:"紙媒体.jpg",
      nextId:"結果紙媒体",
    }]
  },
  "0000":{
    type:"question",
    question: "気になるタイトル",
    choices:[{
      value:"ユメオチ〜ユメで僕らは恋にオチる〜", //TODO:あらすじを選択肢にしてもよいのでは
      image:"ユメオチ.jpg",
      nextId:"結果ユメオチ",
    },{
      value:"見知らぬ女子高生に監禁された漫画家の話", //TODO:あらすじを選択肢にしてもよいのでは
      image:"ラブコメ→見知らぬ女子高生に監禁された漫画家の話.jpg",
      nextId:"結果ラブコメ見知らぬ",
    },{
      value:"魁の花巫女", //TODO:あらすじを選択肢にしてもよいのでは
      image:"ラブコメ→C魁の花巫女.jpg",
      nextId:"結果魁の花巫女",
    }]
  },
  "0001":{
    type:"question",
    question: "気になるタイトル",
    choices:[{
      value:"ド級編隊エグゼロス", //TODO:あらすじを選択肢にしてもよいのでは
      image:"ド級編隊エグゼロス.jpg",
      nextId:"結果ド級",
    },{
      value:"μ&i みゅうあんどあい", //TODO:あらすじを選択肢にしてもよいのでは
      image:"μ＆i.jpg",
      nextId:"結果みゅう",
    }]
  },
  "0100":{
    type:"question",
    question: "Fanbox or Fantia",
    choices:[{
      value:"Fanbox",
      image:"fanbox.jpg",
      nextId:"結果Fanbox",
    },{
      value:"Fantia",
      image:"fantia.jpg",
      nextId:"結果Fantia",
    }]
  },
  // --- --- --- --- --- --- --- --- --- --- ---
  // type:"result",
  // --- --- --- --- --- --- --- --- --- --- ---
  // ■テンプレート記入方法について
  // "A":{                                  // resultID
  //   type:"result",                       // "result" 固定
  //   url: "https://r-kitada.booth.pm/",   // 画像クリックで遷移する画面URL
  //   image: "",                           // 表示画像 imgフォルダ以下を指定
  //   message: "",                         // 表示メッセージ
  // },
  // --- --- --- --- --- --- --- --- --- --- ---
  "結果ド級":{
    type:"result",
    url: "https://hxeros.com/books/",
    image: "ド級編隊エグゼロス.jpg",
    message: "ド級編隊エグゼロス",
  },
  "結果みゅう":{
    type:"result",
    url: "https://jumpsq.shueisha.co.jp/rensai/myuandai/",
    image: "μ＆i.jpg",
    message: "μ&i みゅうあんどあい",
  },
  "結果ユメオチ":{
    type:"result",
    url: "https://shonenjumpplus.com/episode/4855956445047391484",
    image: "ユメオチ.jpg",
    message: "ユメオチ〜ユメで僕らは恋にオチる〜",
  },
  "結果ラノベ見知らぬ":{
    type:"result",
    url: "https://store.kadokawa.co.jp/shop/b/bM2251_ssp/",
    image: "ラノベ→見知らぬ女子高生に監禁された漫画家の話.jpg",
    message: "見知らぬ女子高生に監禁された漫画家の話(ラノベ)",
  },
  "結果ラブコメ見知らぬ":{
    type:"result",
    url: "https://store.kadokawa.co.jp/shop/b/bM2251_ssp/",
    image: "ラブコメ→見知らぬ女子高生に監禁された漫画家の話.jpg",
    message: "見知らぬ女子高生に監禁された漫画家の話(ラブコメ)",
  },
  "結果最強":{
    type:"result",
    url: "https://dash.shueisha.co.jp/bookDetail/index/978-4-08-631345-2",
    image: "最強カップルのイチャイチャVRMMOライフ.jpg",
    message: "最強カップルのイチャイチャVRMMOライフ",
  },
  "結果暗殺拳":{
    type:"result",
    url: "https://fantasiabunko.jp/product/201712ansatsuken/321802000909.html",
    image: "暗殺拳はチートに含まれますか？.jpg",
    message: "暗殺拳はチートに含まれますか？",
  },
  "結果画集":{
    type:"result",
    url: "https://rkitada.booth.pm/",
    image: "画集.jpg",
    message: "画集",
  },
  "結果Fanbox":{
    type:"result",
    url: "https://r-kitada.fanbox.cc/",
    image: "fanbox.jpg",
    message: "fanbox",
  },
  "結果Fantia":{
    type:"result",
    url: "https://fantia.jp/fanclubs/7534",
    image: "fantia.jpg",
    message: "Fantia",
  },
  "結果紙媒体":{
    type:"result",
    url: "https://www.melonbooks.co.jp/circle/index.php?circle_id=3533",
    image: "紙媒体.jpg",
    message: "紙媒体",
  },
  "結果フィギュア":{
    type:"result",
    url: "https://slist.amiami.jp/top/search/list?s_keywords=%E3%81%8D%E3%81%9F%E3%81%A0%E3%82%8A%E3%82%87%E3%81%86%E3%81%BE&pagemax=60&s_cate_tag=1",
    image: "フィギュア.jpg",
    message: "フィギュア",
  },
  "結果魁の花巫女":{
    type:"result",
    url: "https://pocket.shonenmagazine.com/episode/2550689798798682152",
    image: "ラブコメ→C魁の花巫女.jpg",
    message: "魁の花巫女",
  },
};