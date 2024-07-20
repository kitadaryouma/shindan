(function ($) {
    'use strict';
   
    //現在の質問数
    let $currentNum = 0;

    //現在の質問Id
    let quizId = "0";
    
    let questionObject = (function () {
      let Obj = function ($target) {
        console.log($target)
   
        //質問の番号
        this.$questionNumber = $target.find('.quiz-question-number');
   
        //質問文
        this.$questionName = $target.find('.quiz-question');
   
        //選択肢ボタン
        this.$buttons = $target.find('.quiz-answer li');

        // 選択肢ボタンに対応する画像
        this.$answerImages = $(".quiz-question-images img");

        //選択肢のテキスト
        this.$answers = $target.find('.quiz-text');
   
        //score
        this.$score = $target.find('.score-wrap .score');
   
        this.init();
      };
      Obj.prototype = {
        //初回設定
        init: function () {
          //イベント登録
          this.event();
        },
        event: function () {
          console.log("event");
          let _this = this;
   
          //ウインドウ読み込み時
          $(window).on('load', function () {
            // 最初の問題の生成
            _this.changeQuestion(quizId);
          });
   
          //button クリック
          $('.quiz-answer li').on("click", function () {
            //現在の数字の更新
            $currentNum++;

            // 次の質問を表示
            const choicesIndex = $('.quiz-answer li').index(this);
            quizId = questions[quizId].choices[choicesIndex].nextId;
            _this.changeQuestion(quizId);

            return false; // これがないとなぜか2回表示される
          });
        },
        
        changeQuestion: function (nextId) {
          let _this = this;
          const nextQuestion = questions[nextId];
   
          if(nextQuestion.type=="question"){
            //質問文の入れ替え
            _this.$questionName.text(nextQuestion.question);

            // 一旦選択肢をすべて非表示
            _this.$buttons.hide();
            _this.$answerImages.hide();
            
            //質問番号を1つ増やす
            let numPlusOne = $currentNum + 1;
            _this.$questionNumber.text('質問' + numPlusOne);
  
            // 選択肢テキストの再設定、表示
            nextQuestion.choices.forEach((choi, i) => {
              $(_this.$answers[i]).text(choi.value);
              $(_this.$buttons[i]).show();

              $(_this.$answerImages[i]).show();
              $(_this.$answerImages[i]).attr('src', `./img/${choi.image}`);
            });
          }else if(nextQuestion.type=="result"){
            // 結果の表示
            $(".finish").show();
            $("#osusume-message").text(nextQuestion.message);
            $("#result-image").attr('src', `./img/${nextQuestion.image}`);
            $("#result-url").attr('href', `${nextQuestion.url}`);
          }
        },
      };
      return Obj;
    })();
   
    // quizクラス内に問題を表示
    let quiz = $('.quiz');
    if (quiz[0]) {
      let queInstance = new questionObject(quiz);
    }
   
  })(jQuery);