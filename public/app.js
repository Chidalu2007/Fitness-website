// const navLinks = document.querySelector('.nav-links');
// const harmburger = document.querySelector('.menu img');
// const menuClose = document.querySelector('.m-close img');

// harmburger.addEventListener('click', ()=>{
//     navLinks.classList.toggle('nav-links')
// })
// console.time('Execution Time');
// let numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// function evenNumber(numbers) {
//   let evenNoCounter = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       ++evenNoCounter;
//     }
//   }
//   return evenNoCounter;
// }
// console.log(evenNumber(numbers));
// console.timeEnd('Execution Time');

const harmburger= document.querySelector('.header .menu');
const mClose= document.querySelector('.close');
const navLinks = document.querySelector('.nav-bar-sm .nav-links');
const nav = document.querySelectorAll('nav');
harmburger.addEventListener('click', ()=>{
    console.log('click');
    navLinks.classList.toggle('nav-links');
    
})

window.addEventListener('scroll', ()=>{
    for (let i = 0; i < nav.length; i++) {
        
        if(window.scrollY > 50){
            nav[i].classList.add('scrolled');
        }else{
            nav[i].classList.remove('scrolled');
        }
    }
})

