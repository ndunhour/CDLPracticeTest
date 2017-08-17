// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
import { GenKnow } from '../imports/api/genKnowQues.js';

// progress of question
var count = 0;
// user's answer
var save = [];
// tallies the number of user's correct answers
var correct = 0;
// stores random questions in text form
var quesText = [];
// answer of the question
var actualAnswer;
// user determines the number of questions
var numOfQues;
// stores skipped Questions
var skipped = [];

displayQuestion = function(){
$('#startTest').css('display', 'none');
$('#testQuestions').css('display', 'block');
numOfQues = ($('#numOfQues').val());
$('#numOfQues').css('display', 'none');

    const genKnowQuestions = GenKnow.find().fetch();
    var ranQues = getRandom();
            // set the number of questions
            if(count < numOfQues){

                $('#quesNum').text("QUESTION " + (count+1));
                $('#questions').text(genKnowQuestions[ranQues].q);
                $('#choices').css('display', 'block');
                $('#c0').text(genKnowQuestions[ranQues].c[0]);
                $('#c1').text(genKnowQuestions[ranQues].c[1]);
                $('#c2').text(genKnowQuestions[ranQues].c[2]);
                $('#c3').text(genKnowQuestions[ranQues].c[3]);

                // sets var to test actual asnswer and user answer
                actualAnswer = genKnowQuestions[ranQues].a;

                // saves question in text form to search db to recall on "reviewTest" function
                var questionsInText = genKnowQuestions[ranQues].q;
                quesText.push(questionsInText);

            $("#progress")
                .text((count+1) + " of " + numOfQues);

        }else{
            displayReviewQues();
        }
};

getRandom = function() {
    // create a random question from the database
    const ranNum = (Math.floor(Math.random() * GenKnow.find().count()));
    return ranNum;

};

// button#displayReviewQuestion
displayReviewQues = function(){
    $('.showSavedQues').css('display', 'block');
    $('#testQuestions').css('display', 'none');

    // displays the question number and the user's choice
    for (var i = 0; i < save.length; i++) {
            if(save[i] != 'BLANK'){
        $("table").append('<tr id="' + [i] + '" onclick="revTest()" style="color:black"><td>' + (i+1) + '</td><td>' + quesText[i] + '</td><td>' + save[i] + '</td></tr>');
            }else{
        $("table").append('<tr id="' + [i] + '" onclick="revTest()" style="color:red"><td>' + (i+1) + '</td><td>' + quesText[i] + '</td><td>' + save[i] + '</td></tr>');
            }

    }
};

// onclick event on li displays full answer and questions
revTest = function(){
    var colIndex = event.target.cellIndex;
    switch(colIndex){
        case 0:
            var col1 = event.target.nextSibling.textContent;
            var userAnswer = (event.target.textContent) - 1;
            var result = GenKnow.findOne({"q": col1});
            displaySpecQues(result, userAnswer);
            break;
        case 1:
            var col2 = event.target.textContent;
            userAnswer = (event.target.previousSibling.textContent) - 1;
            result = GenKnow.findOne({"q": col2});
            displaySpecQues(result, userAnswer);
            break;
        case 2:
            var col3 = event.target.previousSibling.textContent;
            userAnswer = (event.target.previousSibling.previousSibling.textContent) - 1;
            result = GenKnow.findOne({"q": col3});
            displaySpecQues(result, userAnswer);
            break;
    }
};

// display specific review question
displaySpecQues = function(result, userAnswer){
    $('#specQuestion').text(result.q);
    $('#specChoice0').text(result.c[0]);
    $('#specChoice1').text(result.c[1]);
    $('#specChoice2').text(result.c[2]);
    $('#specChoice3').text(result.c[3]);
    $('#userAnswer').text("Your answer: " + save[userAnswer]);
};
// allows user to review answer, change answer, or input an answer if blank
changeAnswer = function(){

};

// resets all var and clears out arrays
exitTest = function(){
    count = 0;
    save = [];
    correct = 0;
    quesText = [];
    actualAnswer = "";
    numOfQues = "";
    Router.go('/');
};

checkAnswers = function(){
    var selectedAnswer = event.target.textContent.slice(0,1);

    // save the user's answer
    save.push(selectedAnswer);
    // compares user's answer and actual answer
    if(actualAnswer === selectedAnswer){
        correct = correct + 1;
    }
    next();

};

submitTest = function(){
    $('.showSavedQues').css('display', 'none');
    $('.testComplete')
        .css('display', 'block')
    $('p').append('YOU HAVE ' + correct + ' CORRECT');

};
// skips to next question
skip = function(){
    save.push('BLANK')
    next();


    // count = count + 1;
};
// ---------------------------- //
next = function(){
    // skips to next question
    count = count + 1;
    displayQuestion();

};

// returnHome = function(){
//     count = 0;
//     save = [];
// };
