// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
import { AirBrakes } from '../imports/api/airBrakesQues.js';
import { Combination } from '../imports/api/combination.js';
import { DoubTrip } from '../imports/api/doubTrip.js';
import { GenKnow } from '../imports/api/genKnowQues.js';
import { Hazmat } from '../imports/api/hazmat.js';
import { Passenger } from '../imports/api/passenger.js';
import { Tanker } from '../imports/api/tanker.js';


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
// arrayPosition to change user's answer
var arrayPosition;
// store test choice
var test2take;
// store DB to use
var db2use;
// total questions for each test
var totQues;

getTest = function(){
    test2take = event.target.textContent;
    if(test2take === 'AIR BRAKES'){
            db2use = AirBrakes;
            totQues = 33;
        }else if(test2take === 'COMBINATION'){
            db2use = Combination;
            totQues = 35;
        }else if(test2take === 'DOUBLE/TRIPLE'){
            db2use = DoubTrip;
            totQues = 35;
        }else if(test2take === 'GENERAL KNOWLEDGE'){
            db2use = GenKnow;
            totQues = 111;
        }else if(test2take === 'HAZARDOUS MATERIAL'){
            db2use = Hazmat;
            totQues = 49;
        }else if(test2take === 'PASSENGER'){
            db2use = Passenger;
            totQues = 33;
        }else if(test2take === 'TANKER'){
            db2use = Tanker;
            totQues = 26;
        }
};

displayQuestion = function(){
    numOfQues = ($('#numOfQues').val());
    $('.chooseNumOfQues').css('display', 'none');
    $('#testQuestions').css('display', 'block');

    test2take = db2use.find().fetch();
    var ranQues = getRandom();
            // set the number of questions
            if(count < numOfQues){

                $('#quesNum').text("QUESTION " + (count+1));
                $('#questions').text(test2take[ranQues].q);
                $('#choices').css('display', 'block');
                $('#c0').text(test2take[ranQues].c[0]);
                $('#c1').text(test2take[ranQues].c[1]);
                $('#c2').text(test2take[ranQues].c[2]);
                $('#c3').text(test2take[ranQues].c[3]);

                // sets var to test actual asnswer and user answer
                actualAnswer = test2take[ranQues].a;

                // saves question in text form to search db to recall on "reviewTest" function
                var questionsInText = test2take[ranQues].q;
                quesText.push(questionsInText);

            $("#progress")
                .text((count+1) + " of " + numOfQues);

        }else{
            displayReviewQues();
        }
};

getRandom = function() {
    // create a random question from the database
    const ranNum = (Math.floor(Math.random() * db2use.find().count()));
    return ranNum;

};

// button#displayReviewQuestion
displayReviewQues = function(){
    $('.showSavedQues').css('display', 'block');
    $('#testQuestions').css('display', 'none');

    // displays the question number and the user's choice
    $('table').empty();
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
            var result = db2use.findOne({"q": col1});
            arrayPosition = userAnswer;
            displaySpecQues(result, userAnswer);
            break;
        case 1:
            var col2 = event.target.textContent;
            userAnswer = (event.target.previousSibling.textContent) - 1;
            result = db2use.findOne({"q": col2});
            arrayPosition = userAnswer;
            displaySpecQues(result, userAnswer);
            break;
        case 2:
            var col3 = event.target.previousSibling.textContent;
            userAnswer = (event.target.previousSibling.previousSibling.textContent) - 1;
            result = db2use.findOne({"q": col3});
            arrayPosition = userAnswer;
            displaySpecQues(result, userAnswer);
            break;
    }
};

// display specific review question
displaySpecQues = function(result, userAnswer){
    $('.displaySpecQues').css('display', 'block');
    $('.showSavedQues').css('display', 'none')
    $('#specQuestion').text(result.q);
    $('#specChoice0').text(result.c[0]);
    $('#specChoice1').text(result.c[1]);
    $('#specChoice2').text(result.c[2]);
    $('#specChoice3').text(result.c[3]);
    $('#userAnswer').text("Your answer: " + save[userAnswer]);
};
// allows user to review answer, change answer, or input an answer if blank
changeAnswer = function(){
    var removeAnswer = 1;
    var replaceAnswerWith = event.target.textContent.slice(0,1);
    var replaceWith = save.splice(arrayPosition, removeAnswer, replaceAnswerWith);
    $('#userAnswer').text("Your answer: " + save[arrayPosition]);
    displayReviewQues();
    $('.displaySpecQues').css('display', 'none');
    $('.showSavedQues').css('display', 'block');

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
    test2take = "";
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
    $('.displaySpecQues').css('display', 'none');
    $('.showSavedQues').css('display', 'none');
    $('.testComplete').css('display', 'block');
    $('#testResults').append('YOU HAVE ' + correct + ' CORRECT');

};
// skips to next question
skip = function(){
    save.push('BLANK');
    next();
    // count = count + 1;
};

next = function(){
    // skips to next question
    count = count + 1;
    displayQuestion();

};