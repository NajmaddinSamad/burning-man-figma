const overlayMenu = document.querySelector('.overlay');
const burgerBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-xmark');

burgerBtn.addEventListener('click' , openOverlayMenu);
closeBtn.addEventListener('click' , closeOverlayMenu);
function openOverlayMenu(){
     overlayMenu.style.width = "100%"
     burgerBtn.classList.add('custom-btn-close')

}
function closeOverlayMenu(){
 overlayMenu.style.width = null
 burgerBtn.classList.remove('custom-btn-close')
}

// const offCanvasMenu = document.querySelector('.off-canvas');
// const burgerBtn = document.querySelector('.fa-bars');
// const closeBtn = document.querySelector('.fa-xmark');
// burgerBtn.addEventListener('click' , openOffCanvasMenu);
// closeBtn.addEventListener('click' , closeOffCanvasMenu);
// function openOffCanvasMenu(){
//      offCanvasMenu.style.width = "250px"
//      burgerBtn.classList.add('custom-btn-close')

// }
// function closeOffCanvasMenu(){
//  offCanvasMenu.style.width = null
//  burgerBtn.classList.remove('custom-btn-close')}

const paragraph = document.querySelectorAll('p');
const text1 = `Burning Man is a network of people inspired by the values reflected in the Ten Principles
                    and united in the
                    pursuit of a more creative and connected existence in the world. Throughout the year we work to
                    build Black
                    Rock City, home of the largest annual Burning Man gathering, and nurture the distinctive culture
                    emerging from
                    that experience. `
const text2 = `Burning Man Project will bring experiences to people in grand, awe-inspiring and joyful ways
                    that lift the human
                    spirit, address social problems, and inspire a sense of culture, community, and civic engagement.
                    Burning Man
                    provides infrastructural tools and frameworks to support local communities in applying the Ten
                    Principles through
                    six interconnected program areas, including Arts, Civic Involvement, Culture, Education,
                    Philosophical Center, and
                    Social Enterprise.`
let speed = 15;
let i = 0;
let j = 0;
function typingEffect1(){
     if(i < text1.length){
          paragraph[0].innerHTML += text1.charAt(i);
          i++;
     }
 
     if(j < text2.length){
          paragraph[1].innerHTML += text2.charAt(j);
          j++;
     }
     setTimeout(typingEffect1, speed);
}
window.onload = typingEffect1;

AOS.init();