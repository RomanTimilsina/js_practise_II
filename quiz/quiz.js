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
const content = document.querySelector('.content');
const result = document.querySelector('.result');
const play = document.querySelector('.play');
let i = 0 ;
let correctAns = 0, wrongAns = 0;
let selectAnswer = null

const playAgain = () => {
i = 0;
setQandA(0);
content.classList.remove('hide')
result.classList.add('hide')
}

const selectedAnswer = () => {
  document.querySelectorAll('input').forEach(el => {
    
    el.addEventListener('click', (e) => {
      selectAnswer = e.target.value;
      e.target.value === 'true' ? correctAns++ : wrongAns++;
      console.log(e.target.value)
      console.log("c:"+correctAns)
      console.log("w:"+wrongAns)
    })
  })
}

const setQandA = (i) => {
  question.innerHTML = data[i].question;
  

  answers.innerHTML = data[i].answers.map((element,index) => 
    
  `<div class="answer">
    <input type="radio" id=${index} name="answer" class="radio" value=${element.isCorrect} />
    <label for="${index}">${element.answer}</label>
  </div>
  `
  ).join('')
  selectedAnswer()
}

const finalResult = () => {
  document.querySelector('.correct_ans').innerHTML = correctAns;
  document.querySelector('.wrong_ans').innerHTML = wrongAns;
  document.querySelector('.score').innerHTML = correctAns * 5 - wrongAns * 2.5;
}

setQandA(0);

const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {

  if(i >= data.length - 1){
    finalResult()
    content.classList.add('hide')
    result.classList.remove('hide')
    selectAnswer = null
  }

  if(selectAnswer ){
  i++;
  setQandA(i);
  selectAnswer = null;
}
})

play.addEventListener('click', () => {
  playAgain()
})






