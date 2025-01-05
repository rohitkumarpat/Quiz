document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
  
    const questions = [
      {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "Who wrote 'Hamlet'?",
        choices: [
          "Charles Dickens", "Jane Austen","William Shakespeare","Mark Twain",],
        answer: "William Shakespeare",
      },
    ];
    
    let currentindex=0;
    let score=0;
 

    startBtn.addEventListener("click", showQuestion);

    nextBtn.addEventListener("click",()=>{
        currentindex++;
        if(currentindex<questions.length) {
        showQuestion();
        }
        else {
            showtheresult();
        }
    })

    function showQuestion() {
        startBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        let questionasked=questions[currentindex].question;
        questionText.textContent=questionasked;
        choicesList.innerHTML=""
          showoption();
            

    }

    function showoption () {
        questions[currentindex].choices.forEach(choice => {
            const li=document.createElement("li");
            li.textContent=choice;
            choicesList.appendChild(li);
            li.addEventListener("click", () => shownextbtn(choice));
        });
        
        
    }
  

    function shownextbtn(choice) {

        if(choice==questions[currentindex].answer) {
            score++;
         }
        nextBtn.classList.remove("hidden");
    }

    function showtheresult() {
        resultContainer.classList.remove("hidden");
        questionContainer.classList.add("hidden");
        scoreDisplay.textContent=`${score} out of ${questions.length}`;
          
    }
    

    restartBtn.addEventListener("click",()=>{
        currentindex = 0;
      score = 0;
      resultContainer.classList.add("hidden");
        showQuestion();
    })
  });




  