let menu_button = document.querySelector('.menu-button');
let slidein = document.querySelector('.slidein');
let slideout = document.querySelector('.slideout');
let modal = document.querySelector('.modal');
let close_button = document.querySelector('.close-button');
let close_button2 = document.querySelector('.close-button2');
let loc_button = document.querySelector('.loc-button');
let slider1 = document.querySelector('.slider1');
let imagem1 = document.querySelector('#imagem1');
let imagem2 = document.querySelector('#imagem2');
let imagem3 = document.querySelector('#imagem3');
let right_button = document.querySelector('.right-button');
let center_button = document.querySelector('.center-button');
let left_button = document.querySelector('.left-button');

left_button.addEventListener('click', () => {
    imagem3.style.opacity = '1';
    imagem2.style.opacity = '0';
    imagem1.style.opacity = '0';
});

right_button.addEventListener('click', () => {
    imagem3.style.opacity = '0';
    imagem2.style.opacity = '1';
    imagem1.style.opacity = '0';
});

center_button.addEventListener('click', () => {
    imagem3.style.opacity = '0';
    imagem2.style.opacity = '0';
    imagem1.style.opacity = '1';
});

menu_button.addEventListener('click', () => {
    slidein.style.visibility = 'visible';
    slidein.style.transform = 'translateX(17rem)';
    modal.style.display = 'inline-block';
});

loc_button.addEventListener('click', () => {
    slideout.style.visibility = 'visible';
    slideout.style.transform = 'translateX(-17rem)';
    modal.style.display = 'inline-block';
});

modal.addEventListener('click', () =>{
    if(slidein.style.visibility === 'visible'){
        slidein.style.transform = 'translateX(-17rem)';
        modal.style.display = 'none';
        slidein.style.visibility = "hidden";
    }else{
        slideout.style.transform = 'translateX(17rem)';
        modal.style.display = 'none';
        slideout.style.visibility = "hidden";
    }
});

close_button.addEventListener('click', () =>{
    slidein.style.transform = 'translateX(-17rem)';
    modal.style.display = 'none';
    slidein.style.visibility = "hidden";
});

close_button2.addEventListener('click', () =>{
    slideout.style.transform = 'translateX(17rem)';
    modal.style.display = 'none';
    slideout.style.visibility = "hidden";
});

