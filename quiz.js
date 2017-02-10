var curPage = 0,
    correct = 0;
var myAnswers = [];
var myQuiz = [
    ["How extrovert are you?", 1, "Totally extrovert", "highly extrovert", "balanced", "more introvert"],
    ["How often do you go out?", 1, "All the time", "Sometimes", "On Special Occasions", "No, I stay at home"],
    ["Do you smoke?", 4, "Regularly", "Sometimes", "During social occasions", "No"],
    ["How often do you go shopping?", 1, "All the time", "Sometimes", "On Special Occasions", "No, I stay at home"],
    ["Do you drink?", 4, "Regularly", "Sometimes", "During social occasions", "No"]
];
var myHeader = document.getElementById("quizHeader");
var classname = document.getElementsByClassName("answer");
var myQuestion = document.getElementById("questions");
var progressBar = document.getElementById("progressBar");
var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");
var btnFinish = document.getElementById("finishQuiz");
checkPage();
btnNext.addEventListener("click", moveNext);
btnPrevious.addEventListener("click", moveBack);
btnFinish.addEventListener("click", Redirect);
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myAnswer, false);
}

function Redirect() {
 window.location="browse_matches.html";
}
function myAnswer() {
    var idAnswer = this.getAttribute("data-id");
    /// check for correct answer
    myAnswers[curPage] = idAnswer;
    if (myQuiz[curPage][1] == idAnswer) {
        //console.log('Correct Answer');
    } else {
        //console.log('Wrong Answer');
    }
    addBox();
}

function addBox() {
    for (var i = 0; i < myQuestion.children.length; i++) {
        var curNode = myQuestion.children[i];
        if (myAnswers[curPage] == (i + 1)) {
            curNode.classList.add("selAnswer");
        } else {
            curNode.classList.remove("selAnswer");
        }
    }
}

function moveNext() {
    ///check if an answer has been made
    if (myAnswers[curPage]) {
        //console.log('okay to proceed');
        if (curPage < (myQuiz.length - 1)) {
            curPage++;
            checkPage(curPage);
        } else {
            ///check if quiz is completed
            //console.log(curPage + ' ' + myQuiz.length);
            if (myQuiz.length >= curPage) {
                Redirect();
            } else {
                //console.log('end of quiz Page ' + curPage);
            }
        }
    } else {
        //console.log('not answered');
    }
}

// function endQuiz() {
//     if (myAnswers[2]) {
//         var output = "<div class='output'>Quiz Results<BR>";
//         var questionResult = "NA";
//         //console.log('Quiz Over');
//         for (var i = 0; i < myAnswers.length; i++) {
//             if (myQuiz[i][1] == myAnswers[i]) {
//                 questionResult = '<span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>';
//                 correct++;
//             } else {
//                 questionResult = '<span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>';
//             }
//             output = output + '<p>Question ' + (i + 1) + ' ' + questionResult + '</p> ';
//         }
//         output = output + '<p>You scored ' + correct + ' out of ' + myQuiz.length + '</p></div> ';
//         document.getElementById("quizContent").innerHTML = output;
//     } else {
//         //console.log('not answered');
//     }
// }

function checkPage(i) {
    /// add remove disabled buttons if there are no more questions in que
    if (curPage == 0) {
        btnPrevious.classList.add("hide");
    } else {
        btnPrevious.classList.remove("hide");
    }
    if ((curPage + 1) < (myQuiz.length)) {
        btnNext.classList.remove("hide");
    } else {
        btnNext.classList.add("hide");
        btnFinish.classList.remove("hide");
    }
    myHeader.innerHTML = myQuiz[curPage][0];
    for (var i = 0; i < myQuestion.children.length; i++) {
        var curNode = myQuestion.children[i];
        curNode.childNodes[1].innerHTML = capitalise(myQuiz[curPage][(i + 2)]);
        //check if answered already
        if (myAnswers[curPage] == (i + 1)) {
            curNode.classList.add("selAnswer");
        } else {
            curNode.classList.remove("selAnswer");
        }
    }
    ///update progress bar
    var increment = Math.ceil((curPage) / (myQuiz.length) * 100);
    progressBar.style.width = (increment) + '%';
    progressBar.innerHTML = (increment) + '%';
}

function moveBack() {
    if (curPage > 0) {
        curPage--;
        checkPage(curPage);
    } else {
        //console.log('end of quiz Page ' + curPage);
    }
}

function capitalise(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}