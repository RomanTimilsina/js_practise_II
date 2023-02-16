const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const image = document.querySelectorAll('.image');
const sliderLength = image.length;

let i = 1;



function next(){
  slider.style.transform = `translateX(-${i*400}px)` ;
  
  i++ ;
  changeColor(i-1)
}

function initial(){
  slider.style.transform = `translateX(0px)` ;
  i = 1 ;
  changeColor(i-1)
}

function previous(){
  
  slider.style.transform = `translateX(-${(i - 2)*400}px)` ;
  i = i - 1;
  changeColor(i-1)
  
}

function last(){
const x = sliderLength -1
  slider.style.transform = `translateX(-${x* 400}px)` ;
  i = sliderLength;
  changeColor(i-1)
}


right.addEventListener('click', () => {
  i < sliderLength ? next() : initial() ;
  
})

left.addEventListener('click', () => {
  i === 1 ? last() : previous() 
  
})

const bottom = document.querySelector('.bottom');

image.forEach((element, index) => {
  const button = document.createElement('div');
  button.classList.add('button');
  
  button.addEventListener('click', () => {
    changeColor(index);
    slider.style.transform = `translateX(-${index*400}px)` ;
    button.style.backgroundColor = 'white';
  })

  bottom.appendChild(button);
  changeColor(0);
  
})

function changeColor(sliderNumber){
  const allbutton = document.querySelectorAll('.button');
  allbutton.forEach(e => {
    e.style.backgroundColor='';
    })
    
    allbutton[sliderNumber].style.backgroundColor = 'white';
}