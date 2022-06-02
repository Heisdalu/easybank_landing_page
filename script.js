'use strict';


const hamburger = document.querySelector('.hamburger-icon');
const modal = document.querySelector('.modal')
const mobile__links = document.querySelector(".mobile--hamburger");
const close__btn = document.querySelector('.close-icon')
// console.log(modal);

hamburger.addEventListener('click', (e) => {
 modal.style.display = 'block'
 mobile__links.classList.add('block')
 hamburger.style.display = 'none';
 close__btn.style.display = 'block'
})

close__btn.addEventListener('click',() => {
 modal.style.display = "none"
 mobile__links.classList.remove("block")
 hamburger.style.display = "block"
 close__btn.style.display = "none"

})