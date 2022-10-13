let menu_button = document.querySelector('.menu-button');
let slidein = document.querySelector('.slidein');
let slideout = document.querySelector('.slideout');
let modal = document.querySelector('.modal');
let close_button = document.querySelector('.close-button');
let close_button2 = document.querySelector('.close-button2');
let loc_button = document.querySelector('.loc-button');

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

