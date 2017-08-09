// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
import { GenKnow } from '../imports/api/genKnowQues.js';

var count = 0;
var save = [];
var correct = 0;
var questions = [];
var correctAnswer;

displayQuestion = function(){
$('#startTest').css('display', 'none');
$('#testQuestions').css('display', 'block');

    const genKnowQuestions = GenKnow.find().fetch();
    var ranQues = getRandom();
    questions.push(ranQues)
    console.log('ranQues', ranQues)
            // set the number of questions
            if(count < 5){

                $('#questions').text(genKnowQuestions[ranQues].q);
                $('#quesNum').text("QUESTION " + (count+1));
                $('#choices').css('display', 'block');
                $('#c0').text(genKnowQuestions[ranQues].c[0]);
                $('#c1').text(genKnowQuestions[ranQues].c[1]);
                $('#c2').text(genKnowQuestions[ranQues].c[2]);
                $('#c3').text(genKnowQuestions[ranQues].c[3]);

                $('#a').text(genKnowQuestions[ranQues].a);

                console.log('displayAnswer', genKnowQuestions[ranQues].a)
                correctAnswer = genKnowQuestions[ranQues].a
            $("#progress")
                .text((count+1) + " of " + 5);

        }else{
            testComplete();
        }
};

getRandom = function() {
    const ranNum = (Math.floor(Math.random() * GenKnow.find().count()));
    return ranNum;

};

back = function(){
    if(count !== 0){
        count = count - 1;
        displayQuestion();
    }

};

next = function(){
    count = count + 1;
    displayQuestion();

};

skip = function(){
    saveQuestion();
    count = count + 1;
    displayQuestion();
};

returnHome = function(){
    count = 0;
    save = [];
};

testComplete = function(){
    $('#finishTest').css('display', 'block');
    $('.testComplete')
        .css('display', 'block')
        .append('<p>YOU HAVE ' + correct + ' CORRECT</p>');
    $('#testQuestions').css('display', 'none');
    console.log('quesNumbers', questions)
};

finishTest = function(){
    count = 0;
    save = [];
    correct = 0;
    Router.go('/');
};

checkAnswers = function(){
    if(count < GenKnow.find().fetch().length){
        var selectedAnswer = event.target.textContent.slice(0,1);

        if(correctAnswer === selectedAnswer){
            correct = correct + 1;
            console.log('correct')
        }
        next();
    }else{
        testComplete();
    }
};

saveQuestion = function(){

    save.push(count);
    $("#saveAlert")
        .text("Question Saved")
        .fadeIn(400)
        .css("display", "block")
        .fadeOut(1500);
    next();
};

selectSaveQuestion = function(){
    var selSavQues = parseInt(event.target.id);
    var savedQuesNum = selSavQues + 1;
    count = savedQuesNum;
        document.getElementById("questions").innerHTML = testQues[count].q;
        document.getElementById("quesNum").innerHTML = "Saved QUESTION " + savedQuesNum ;

        // shuffleChoices(testQues[count].c);
        document.getElementById("c0").innerHTML = (testQues[count].c[0]);
        document.getElementById("c1").innerHTML = (testQues[count].c[1]);
        document.getElementById("c2").innerHTML = (testQues[count].c[2]);
        document.getElementById("c3").innerHTML = (testQues[count].c[3]);

};

hideSavedQuestion = function(){
    $("#viewSaved").css("display", "block");
    $("#hideSaved").css("display", "none");
    $("#savedList").css("display", "none").empty();
};