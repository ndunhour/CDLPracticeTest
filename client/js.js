// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
import { GenKnow } from '../imports/api/genKnowQues.js';

var count = 0;
var save = [];
var correct = 0;

displayQuestion = function(){
$('#testQuestions').css('display', 'block');
$('#startTest').css('display', 'none');

    const genKnowQuestions = GenKnow.find().fetch();

            if(count < genKnowQuestions.length){
                $('#questions').text(genKnowQuestions[count].q);
                $('#quesNum').text("QUESTION " + (count+1));

                shuffleChoices(genKnowQuestions[count].c);
                $('#c0').text(shuffleChoices(genKnowQuestions[count].c[0]));
                $('#c1').text(shuffleChoices(genKnowQuestions[count].c[1]));
                $('#c2').text(shuffleChoices(genKnowQuestions[count].c[2]));
                $('#c3').text(shuffleChoices(genKnowQuestions[count].c[3]));

            $("#progress")
                .text((count+1) + " of " + genKnowQuestions.length);

        }else{
            testComplete();
        }
};

shuffleChoices= function(array) {
        for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
        return array;
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
    $('.testComplete')
        .css('display', 'block')
        .append('<p>YOU HAVE ' + correct + ' CORRECT</p>');
    $('#testQuestions').css('display', 'none');
};

finishTest = function(){
    count = 0;
    save = [];
    correct = 0;
    Router.go('/');
};

checkAnswers = function(){
    if(count < GenKnow.find().fetch().length){
        var answer = GenKnow.find().fetch()[count].a;
        var selectedAnswer = event.target.textContent;
        if(answer === selectedAnswer){
            correct = correct + 1;
        }
        next();
    }else{
        testComplete();
    }
};

saveQuestion = function(){

    // save.push(count);
    // $("#saveAlert")
    //     .text("Question Saved")
    //     .fadeIn(400)
    //     .css("display", "block")
    //     .fadeOut(1500);
    // next();
};

selectSaveQuestion = function(){
    var selSavQues = parseInt(event.target.id);
    console.log('click', selSavQues)
    var savedQuesNum = selSavQues + 1;
    count = savedQuesNum;
        document.getElementById("questions").innerHTML = testQues[count].q;
        document.getElementById("quesNum").innerHTML = "Saved QUESTION " + savedQuesNum ;

        shuffleChoices(testQues[count].c);
        document.getElementById("c0").innerHTML = shuffleChoices(testQues[count].c[0]);
        document.getElementById("c1").innerHTML = shuffleChoices(testQues[count].c[1]);
        document.getElementById("c2").innerHTML = shuffleChoices(testQues[count].c[2]);
        document.getElementById("c3").innerHTML = shuffleChoices(testQues[count].c[3]);

};

hideSavedQuestion = function(){
    $("#viewSaved").css("display", "block");
    $("#hideSaved").css("display", "none");
    $("#savedList").css("display", "none").empty();
};