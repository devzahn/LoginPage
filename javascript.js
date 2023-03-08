const weapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener(`click`, ()=>{
    weapper.classList.add(`active`);

})

loginlink.addEventListener(`click`, ()=>{
    weapper.classList.remove(`active`);
    
})

btnPopup.addEventListener(`click`, ()=>{
    weapper.classList.add(`active-popup`);

})

iconClose.addEventListener(`click`, ()=>{
    weapper.classList.remove(`active-popup`);

})