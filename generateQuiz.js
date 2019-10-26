var myQuestions = [
    {
        question: "What type of mouse is this? <br><img src='mouse.jpg'></img>",
        answers: {
            a: 'Tactical mouse',
            b: 'Optical mouse',
            c: 'Ball mouse',
            d: 'Magnetic mouse'
        },
        correctAnswer: 'b'
    },
    {
        question: "This logo belongs to which game development company?",
        answers: {
            a: 'Blizzard',
            b: 'Activision',
            c: 'Mojang',
            d: 'Ubisoft'
        },
        correctAnswer: 'd'
    },
    {
        question: "Who coined the term 'Machine Learning'?",
        answers: {
            a: 'Thomas Baye',
            b: 'Arthur Samuel',
            c: 'Alan Turing',
            d: 'Charles Babbage'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the full form of 'HTC'?",
        answers: {
            a: 'HongKong-Taiwan Computers',
            b: 'HyperText Computation',
            c: 'High Tech Computer',
            d: 'HT Cho'
        },
        correctAnswer: 'c'
    },
    {
        question: "Who is this guy?",
        answers: {
            a: 'Satya Nadella',
            b: 'Jeff Bezos',
            c: 'Steve Wozniak',
            d: 'Sundar Pichai'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which file sharing app is this?",
        answers: {
            a: 'Xender',
            b: 'Air Drop',
            c: 'Android Beam',
            d: 'ShareIt'
        },
        correctAnswer: 'd'
    },
    {
        question: "The 'Start Menu' is a charecteristic feature of which OS?",
        answers: {
            a: 'Chrome OS',
            b: 'Mac OS',
            c: 'Linux',
            d: 'Windows'
        },
        correctAnswer: 'd'
    },
    {
        question: "Who is the CEO of Amazon?",
        answers: {
            a: 'Steve Balmer',
            b: 'Jeff Bezos',
            c: 'Werner Vogels',
            d: 'Tim Cook'
        },
        correctAnswer: 'b'
    },
    {
        question: "Identity the language. It's used in making iOS & MacOS apps",
        answers: {
            a: 'Swift',
            b: 'Kotlin',
            c: 'C#',
            d: 'Python'
        },
        correctAnswer: 'a'
    },
    {
        question: "Yellow in the Microsoft logo represents",
        answers: {
            a: 'MSN',
            b: 'Bing',
            c: 'Sticky Notes',
            d: 'Office'
        },
        correctAnswer: 'b'
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'                  
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="box2" id="q'+i+'" style="z-index:'+i+'"><div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div><a id="next'+i+'" href="#q'+(i+1)+'"><button class="next">Next</button></a></div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
               // color the answers green
                //answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            //else{
                // color the answers red
                //answerContainers[i].style.color = 'red';
            //}
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
        
//document.getElementById("next9").setAttribute("href", "/#final");
    }

}
var zri = (document.getElementById("next"+i+1)
function zre(zri) {
	zri.style.z-index = 20+i
}
document.getElementById("next9").setAttribute("href", "#final");
document.getElementByIf("next"+i).onclick = function(){zre(zri);}
