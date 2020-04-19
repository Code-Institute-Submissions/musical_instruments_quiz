var questions = [
    {
        question: 'The theremin belongs to this class of musical instruments:',
        answers: ['Keyboard', 'Percussion', 'Electronic', 'Wind'],
        correct: 'Electronic'
    },
    {
        question: 'How many pedals does a grand piano have?',
        answers: ['2', '3', '4', '1'],
        correct: '3'
    },
     {
        question: 'What is the oldest preserved musical instrument?',
        answers: ['Flute', 'Drum', 'Lyre', 'Saxophone'],
        correct: 'Flute'
    },
     {
        question: "When did violin develop into today's shape?",
        answers: ["10th century", "14th century", "16th century", "19th century"],
        correct: "16th century"
    },
     {
        question: 'What kind of bodies did first versions of electric guitar have?',
        answers: ['Solid', 'Transparent', 'Plastic', 'Hollow'],
        correct: 'Hollow'
    },
     {
        question: 'How do string instruments produce sound?',
        answers: ['By pressing the keys', 'By string vibrations', 'By digital signal', 'By air flow'],
        correct: 'By string vibrations'
    },
     {
        question: 'What kind of instrument is violin?',
        answers: ['String', 'Wind', 'Percussion', 'Brass'],
        correct: 'String'
    },
     {
        question: 'How many strings does a traditional guitar have?',
        answers: ['4', '5', '6', '7'],
        correct: '6'
    },
     {
        question: 'The piano was invented by:',
        answers: ['Leonardo da Vinci', 'Wolfgang Amadeus Mozart', 'Bartolomeo Cristofori', 'John Lennon'],
        correct: 'Bartolomeo Cristofori'
     },

     {
        question: 'French Horn is what group of instruments?',
        answers: ['Electronic', 'Percussion', 'Brass', 'Keys'],
        correct: 'Brass'
    }
];
var startbtn = document.querySelector('.start');
var sub = document.querySelector('.submit');
var next = document.querySelector('.next');
var reset = document.querySelector('.reset');
var userCorrectAnswers = 0;
var currentQuestion = 1;

function start(){

        if (questions.length >= currentQuestion) {
            var container = document.querySelector('.query');
            var current = questions[currentQuestion - 1];


            //questions
            var questonElement = document.createElement('p');
            questonElement.innerHTML = current.question;
            container.append(questonElement);

            //answers
            for (var i = 0; i < current.answers.length; i++) {
                var formInput = document.createElement('div');
                formInput.classList.add('input')
            
            // radio btn
            var odgovor = document.createElement('input');
            odgovor.setAttribute('type', 'radio')
            odgovor.setAttribute('name', 'test')
            odgovor.setAttribute('id', 'question'+i)
            odgovor.setAttribute('value', current.answers[i])
            odgovor.classList.add('inline');
            odgovor.classList.add('query');
            formInput.append(odgovor);

            //label
            var labela = document.createElement('label')
            labela.innerHTML = current.answers[i];
            labela.setAttribute('for', 'question'+i)
            formInput.append(labela);

            //append to body
            container.append(formInput)

        }
    }
    else{
        var percentage = (userCorrectAnswers/questions.length).toFixed(2);
        var container = document.querySelector('.query');
        var endingMsg = document.createElement('p');
        endingMsg.innerHTML = 'You have ' + userCorrectAnswers + ' correct answers out of ' + questions.length;
        container.append(endingMsg);

        //extra message
        var variableMsg = document.createElement('p');
        if(percentage > 0.67){
            variableMsg.innerHTML = 'Excellent score! Your knowledge about musical instruments is astounding!';
        }
        else if(percentage > 0.34){
            variableMsg.innerHTML = "Not bad! Just a little bit more focus and you'll get there!";
        }
        else{
            variableMsg.innerHTML = 'Not your finest result. Maybe browse through the site again?';
        }
        container.append(variableMsg);

        sub.classList.add('hidden');
        reset.classList.remove('hidden');
    }
}

sub.addEventListener('click', function(){
    var posibleAnswers = document.querySelectorAll('.query');
    var answerIsSelected = false;

    for(var i = 0; i < posibleAnswers.length; i++){
        if(posibleAnswers[i].checked === true){
            var selectedAnswer = posibleAnswers[i].value
            answerIsSelected = true;
        }
    }

    var oldMessage = document.querySelector("#msg");
        if(oldMessage){
            oldMessage.remove();
        }

    if(answerIsSelected) {
        var corect = questions[currentQuestion-1].correct;

        var container = document.querySelector('.query');

        //create notification
        var message = document.createElement('p');
        message.setAttribute('id', 'msg')
        selectedAnswer === corect ? message.innerHTML = 'Correct!' : message.innerHTML = 'Wrong!';
        selectedAnswer === corect ? message.classList.add("greenText") : message.classList.add("redText");
        container.append(message);

        //remove all inputs
        var inputRadio = document.querySelectorAll('.input');
        for(var i = 0; i < inputRadio.length; i++){
            inputRadio[i].remove();
        }

        //hide/show buttons
        sub.classList.add('hidden');
        next.classList.remove('hidden');

        if(selectedAnswer === corect){
            userCorrectAnswers++;
        }

        //prepare for next question
         currentQuestion++;
    }

    else{
        var message = document.createElement('p');
        var container = document.querySelector('.query');
        message.setAttribute('id', 'msg')
        message.innerHTML = 'Please select an Answer!';
        message.classList.add("redText");
        container.append(message);
    }
    if((currentQuestion-1) === questions.length){
        next.textContent = "See Results";
    }
    
});

next.addEventListener('click', function(){
    
    var oldQuestion = document.querySelector('.query');
    if(oldQuestion){
        oldQuestion.remove();
    }

    var quesContainer = document.querySelector('.questions-container');

    var newQuestion = document.createElement('div');
    newQuestion.classList.add('query');
    quesContainer.prepend(newQuestion);

    //hide/show buttons
    sub.classList.remove('hidden');
    next.classList.add('hidden');

    start();
})

reset.addEventListener('click', function(){
    next.textContent = "Next";
    userCorrectAnswers = 0;
    currentQuestion = 1;

    var oldQuestion = document.querySelector('.query');
    if(oldQuestion){
        oldQuestion.remove();
    }

    var quesContainer = document.querySelector('.questions-container');

    var newQuestion = document.createElement('div');
    newQuestion.classList.add('query');
    quesContainer.prepend(newQuestion);

    //hide/show buttons
    sub.classList.remove('hidden');
    next.classList.add('hidden');
    reset.classList.add('hidden');

    start();

})

startbtn.addEventListener('click', function(){
    startbtn.classList.add("hidden");
    sub.classList.remove("hidden");
    start();
});