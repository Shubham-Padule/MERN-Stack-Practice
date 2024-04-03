// script.js
    const questions = [
      {
        question: "What is 1+1?",
        answers: [
          { text: "22", correct: false },
          { text: "2", correct: true },
          { text: "4", correct: false },
          { text: "5", correct: false }
        ]
      },
      {
        question: "What is the capital of France?",
        answers: [
          { text: "London", correct: false },
          { text: "Berlin", correct: false },
          { text: "Paris", correct: true },
          { text: "Madrid", correct: false }
        ]
      },
      {
        question: "What is the chemical symbol for water?",
        answers: [
          { text: "O2", correct: false },
          { text: "H2O", correct: true },
          { text: "CO2", correct: false },
          { text: "H2SO4", correct: false }
        ]
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
          { text: "Stephen King", correct: false },
          { text: "Harper Lee", correct: true },
          { text: "J.K. Rowling", correct: false },
          { text: "Mark Twain", correct: false }
        ]
      },
      {
        question: "What is the largest planet in our solar system?",
        answers: [
          { text: "Earth", correct: false },
          { text: "Jupiter", correct: true },
          { text: "Saturn", correct: false },
          { text: "Mars", correct: false }
        ]
      }
    ];

    const questionElement = document.getElementById("questions");
    const answerButtonsElement = document.getElementById("ans-btn");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerText = "Next";
      showQuestion();
    }

    function showQuestion() {
      resetState();
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

      currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
      });
    }

    function resetState() {
      nextButton.style.display = "none";
      while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
      }
    }

    function selectAnswer(e) {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";
      if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
      } else {
        selectedBtn.classList.add("incorrect");
      }
      Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextButton.style.display = "block";
    }

    nextButton.addEventListener("click", () => {
      if (currentQuestionIndex === questions.length - 1) {
        nextButton.innerHTML = "Submit";
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        // Quiz finished
        alert(`Quiz finished! Your score: ${score}`);
        // Here you can add code to handle the end of the quiz, like showing results or resetting the quiz
        // For now, let's restart the quiz
        startQuiz();
      }
    });

    startQuiz(); // Start the quiz when the page loads
  