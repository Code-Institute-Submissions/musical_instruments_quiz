var quiz = [{
    question: "1.) The theremin belongs to this class of musical instruments:",
    answers: ["Keyboard", "Percussion", "Electronic", "Wind"],
    correctAnswer: 2
  }, {
    question: "2.) This instrument looks and is played like a violin, but it is a bit larger:",
    answers: ["Cello", "Flute", "Bass", "Viola"],
    correctAnswer: 3
  }, {
    question: "3.) Which of these is not a type of African drum?",
    answers: ["Gudugudu", "Timpani", "Djembe", "Talking drum"],
    correctAnswer: 1
  }, {
    question: "4.) How many pedals does a grand piano have?",
    answers: [2, 4, 3, 1],
    correctAnswer: 2
  }, {
    question: "5.) The saxophone is a popular jazz instrument, but what was its first use?",
    answers: ["Wall ornament", "Bluegrass music", "Drowning out flutes", "Military music"],
    correctAnswer: 3
  }, {
    question: "6.) What is the word for a kind of stringed instrument?",
    answers: ["Trombone", "Harp", "Harpy", "Harmonica"],
    correctAnswer: 1
  }, {
    question: "7.) Which instrument generally produces the highest pitch?",
    answers: ["Cello", "Piccolo", "Bassoon", "French Horn"],
    correctAnswer: 1
  }]
  
  var i = 0;
  var score = 0;
  
  $(document).ready(function () {
    $('#start').on('click', function () {
        $('#questions').text(quiz[i].question);
        $('#zero').text(quiz[i].answers[0]);
        $('#one').text(quiz[i].answers[1]);
        $('#two').text(quiz[i].answers[2]);
        $('#three').text(quiz[i].answers[3]);
        $('#start').remove();
        $('.choices').show('slow');
        $('#next').show('slow');
        
    });
  });
  
  $(document).ready(function () {
    $(document).on('click', '#next', function () {
        var answer = $('input[name="answers"]:checked').val();
        var answerString = quiz[i].answers[answer];
        $('p[class="userAnswer"][value=' + i + ']').text(answerString);
        var correctAnswer = quiz[i].correctAnswer;
        $('p[class="correctAnswer"][value=' + i + ']').text(quiz[i].answers[correctAnswer]);
        if (answer == quiz[i].correctAnswer) {
            score++;
        } else {
            $('tr[class="row1"][name=' + i + ']').css('background', '#FE2E64');
        }
        if (!$('input[name="answers"]').is(':checked')) {
            alert("Please select an answer :)");
            return undefined; //stops executing the rest of the code
        }
        i++;
  
        if (i < 7) {
            $('.choices').css('display', 'none');
            $('#questions').text(quiz[i].question);
            $('#zero').text(quiz[i].answers[0]);
            $('#one').text(quiz[i].answers[1]);
            $('#two').text(quiz[i].answers[2]);
            $('#three').text(quiz[i].answers[3]);
            $('.choices').show('slow');
            $('input[name="answers"]').prop('checked', false);
  
        }
        if (i > 6) {
  
            $('#quiz').remove();
            $('#next').remove();
            $('#score').text("You have completed the quiz, your score is " + score + "/7");
            $('#results').show('2000');
            $("#reset").show();
        }
        
  
  
    });
  
  
  });
  