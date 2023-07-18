const scrapper = document.querySelector('.scrapper');
const btn1Popup = document.querySelector('.btnAbout-popup');
const icon1Close = document.querySelector('.icon1-close');
const grapper = document.querySelector('.grapper');
const btn3Popup = document.querySelector('.btnServices-popup');
const icon3Close = document.querySelector('.icon3-close');
const trapper = document.querySelector('.trapper');
const btn2Popup = document.querySelector('.btnContact-popup');
const icon2Close = document.querySelector('.icon2-close');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btn1Popup.addEventListener('click', ()=> {
    scrapper.classList.add('active-popup');
});

icon1Close.addEventListener('click', ()=> {
    scrapper.classList.remove('active-popup');
});

btn3Popup.addEventListener('click', ()=> {
    grapper.classList.add('active-popup');
});

icon3Close.addEventListener('click', ()=> {
    grapper.classList.remove('active-popup');
});

btn2Popup.addEventListener('click', ()=> {
    trapper.classList.add('active-popup');
});

icon2Close.addEventListener('click', ()=> {
    trapper.classList.remove('active-popup');
});

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});