// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
import { GenKnow } from '../imports/api/genKnowQues.js';

var count = 0;
var save = [];
var correct = 0;
var quesText = [];
var correctAnswer;
var numOfQues;

displayQuestion = function(){
$('#startTest').css('display', 'none');
$('#testQuestions').css('display', 'block');
numOfQues = ($('#numOfQues').val());
$('#numOfQues').css('display', 'none');

    const genKnowQuestions = GenKnow.find().fetch();
    var ranQues = getRandom();
            // set the number of questions
            if(count < numOfQues){

                $('#questions').text(genKnowQuestions[ranQues].q);
                $('#quesNum').text("QUESTION " + (count+1));
                $('#choices').css('display', 'block');
                $('#c0').text(genKnowQuestions[ranQues].c[0]);
                $('#c1').text(genKnowQuestions[ranQues].c[1]);
                $('#c2').text(genKnowQuestions[ranQues].c[2]);
                $('#c3').text(genKnowQuestions[ranQues].c[3]);

                // sets var to test actual asnswer and user answer
                correctAnswer = genKnowQuestions[ranQues].a

                // saves question in text form to search db to recall on "reviewTest" function
                var questionsInText = genKnowQuestions[ranQues].q;
                quesText.push(questionsInText);

            $("#progress")
                .text((count+1) + " of " + numOfQues);

        }else{
            testComplete();
        }
};

getRandom = function() {
    // create a random question from the database
    const ranNum = (Math.floor(Math.random() * GenKnow.find().count()));
    return ranNum;

};

next = function(){
    // skips to next question
    count = count + 1;
    displayQuestion();

};

returnHome = function(){
    count = 0;
    save = [];
};

skip = function(){
    saveQuestion();
    count = count + 1;
    displayQuestion();
};


testComplete = function(){
    $('#finishTest').css('display', 'block');
    $('.testComplete')
        .css('display', 'block')
        .append('<p>YOU HAVE ' + correct + ' CORRECT</p>');
    $('#testQuestions').css('display', 'none');
};

// button#displayReviewQuestion
displayReviewQues = function(){
    $('.showSavedQues').css('display', 'block');
    $('.testComplete').css('display', 'none');

    // displays the question number and the user's choice
    for (var i = 0; i < quesText.length; i++) {
        $("table").append('<tr id="' + [i] + '" onclick="revTest()"><td>' + (i+1) + '</td><td>' + quesText[i] + '</td><td>' + save[i] + '</td></tr>');
    }
};

// onclick event on li
revTest = function(){
    var quesNumRev = event.target.id;
    console.log('text', quesText)
    console.log('num', quesText[quesNumRev])

};

checkAnswers = function(){
    if(count < GenKnow.find().fetch().length){
        var selectedAnswer = event.target.textContent.slice(0,1);
        // save the user's answer
        save.push(selectedAnswer);
        if(correctAnswer === selectedAnswer){
            correct = correct + 1;
        }
        next();
    }else{
        testComplete();
    }
};

finishTest = function(){
    count = 0;
    correct = 0;
    save = [];
    quesions = [];
    Router.go('/');
};
