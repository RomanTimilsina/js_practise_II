const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },
];

const question = document.querySelector('.question');
const answers = document.querySelector('.answers');
let i = 0 ;

const setQandA = (i) => {
  question.innerHTML = data[i].question;
  console.log(data[i].answers)

  answers.innerHTML = data[i].answers.map(element => 
    
  `<div class="answer">
    <input type="radio" name="answer" class="radio" value=${element.isCorrect} />
    <label for="1">${element.answer}</label>
  </div>
  `
  ).join('')
}

setQandA(0)
const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
  
  i++;
  setQandA(i);
})


