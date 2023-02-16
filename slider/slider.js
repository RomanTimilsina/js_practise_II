const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const image = document.querySelectorAll('.image');
const sliderLength = image.length;
console.log(sliderLength);
let i = 1;

function next(){
  slider.style.transform = `translateX(-${i*400}px)` ;
  i++ ;
}

function initial(){
  slider.style.transform = `translateX(0px)` ;
  i = 1 ;
}

function previous(){
  i = i -2;
  slider.style.transform = `translateX(-${i*400}px)` ;
  i-- ;
}

function last(){
let x = sliderLength -1
  slider.style.transform = `translateX(-${x* 400}px)` ;
  i-- ;
}


right.addEventListener('click', () => {
  i < sliderLength ? next() : initial() ;
  
})

left.addEventListener('click', () => {
  i === 1 ? last() : previous() 
  
})
