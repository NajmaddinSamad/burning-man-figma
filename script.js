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
AOS.init();