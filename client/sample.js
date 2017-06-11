// window.onload = function(){
//     var testQues = [
//         {   "q": "Favorite Color",
//             "a": "Blue",
//             "c": ["Blue", "Green", "Red", "Black"]},

//         {   "q": "Favorite Truck",
//             "a": "Ram",
//             "c": ["Silverado", "Tundra", "Ram", "Titan"]},

//         {   "q": "Favorite Animal",
//             "a": "Dog",
//             "c": ["Cat", "Dog", "Horse", "Fish"]},

//     ];
//     var save = [];
//     var count = 0;
//     var correct = 0;

//     function displayQuestion(){
//         if(count < testQues.length){
//             $("#startTest").css("display", "none");
//             $("#testQuestions").css("display", "block");

//             document.getElementById("questions").innerHTML = testQues[count].q;
//             document.getElementById("quesNum").innerHTML = "QUESTION " + (count+1);

//             shuffleChoices(testQues[count].c);
//             document.getElementById("c0").innerHTML = shuffleChoices(testQues[count].c[0]);
//             document.getElementById("c1").innerHTML = shuffleChoices(testQues[count].c[1]);
//             document.getElementById("c2").innerHTML = shuffleChoices(testQues[count].c[2]);
//             document.getElementById("c3").innerHTML = shuffleChoices(testQues[count].c[3]);

//             $("#progress")
//                 .text((count+1) + " of " + testQues.length);

//         }else{
//             if(save.length > 0){
//                 console.log('you have ' + save.length + ' questions saved');
//                 viewSavedQuestions();
//             }else{

//                 $("#testQuestions").css("display", "none");
//                 $("#pauTest").css("display", "block");
//                 $("#numCorrect").text(correct);
//             }
//         }

//     }

//     function shuffleChoices(array) {
//         for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
//         return array;
//     }


//     function back(){
//         count = count - 1;
//         displayQuestion();

//     }

//     function next(){
//         count = count + 1;
//         displayQuestion();
//     }

//     function skip(){
//         saveQuestion();
//         count = count + 1;
//         displayQuestion();
//     }

//     function checkAnswer(){
//         var selection = event.target.textContent;
//         console.log('checkAnswer count', count)
//         console.log('checkAnswer selection', selection)
//         console.log('checkAnswer array', testQues[count])
//         if(selection === testQues[count].a){
//             correct = correct + 1;
//         }
//         next();
//     }

//     function returnHome(){
//         $("#startTest").css("display", "block");
//         $("#pauTest").css("display", "none");
//         count = 0;
//         save = [];
//     }

//     function saveQuestion(){
//         save.push(count);
//         $("#saveAlert")
//             .text("Question Saved")
//             .fadeIn(400)
//             .css("display", "block")
//             .fadeOut(1500);
//         next();
//     }

//     function viewSavedQuestions(){
//         // $("#savedList").css("display", "none").empty();

//         // for(var i=0; i < save.length; i++){
//         //     $("#savedList").append("<ul id=" + save[i] + ">Question " + (save[i]+1) + "</ul>");
//         // }
//         window.location.href = 'savedQuestions.html';
//     }

//     function selectSaveQuestion(){
//         var selSavQues = parseInt(event.target.id);
//         console.log('click', selSavQues)
//         var savedQuesNum = selSavQues + 1;
//         count = savedQuesNum;
//             document.getElementById("questions").innerHTML = testQues[count].q;
//             document.getElementById("quesNum").innerHTML = "Saved QUESTION " + savedQuesNum ;

//             shuffleChoices(testQues[count].c);
//             document.getElementById("c0").innerHTML = shuffleChoices(testQues[count].c[0]);
//             document.getElementById("c1").innerHTML = shuffleChoices(testQues[count].c[1]);
//             document.getElementById("c2").innerHTML = shuffleChoices(testQues[count].c[2]);
//             document.getElementById("c3").innerHTML = shuffleChoices(testQues[count].c[3]);

//     }

//     function hideSavedQuestion(){
//         $("#viewSaved").css("display", "block");
//         $("#hideSaved").css("display", "none");
//         $("#savedList").css("display", "none").empty();
//     }

//     document.getElementById("startTest").addEventListener("click", displayQuestion);
//     document.getElementById("back").addEventListener("click", back);
//     document.getElementById("skip").addEventListener("click", skip);
//     document.getElementById("choices").addEventListener("click", checkAnswer);
//     document.getElementById("returnHome").addEventListener("click", returnHome);
//     document.getElementById("saveQues").addEventListener("click", saveQuestion);
//     document.getElementById("viewSaved").addEventListener("click", viewSavedQuestions);
//     document.getElementById("savedList").addEventListener("click", selectSaveQuestion);
//     document.getElementById("hideSaved").addEventListener("click", hideSavedQuestion);

// };