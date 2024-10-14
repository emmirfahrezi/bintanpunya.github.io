// slider
const slide = document.querySelectorAll('.slide img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', sliderInisial);

function sliderInisial(){
    if (slide.length > 0){
        slide[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(slideNext, 100000);
    }
}

function tampilSlide(index){

    if(index >= slide.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slide.length - 1;
    }


    slide.forEach((slide) => {
        slide.classList.remove('displaySlide');   
    });
    slide[slideIndex].classList.add('displaySlide');
}

function slidePrev(){
    clearInterval(intervalId);
    slideIndex--;
    tampilSlide(slideIndex);
}

function slideNext(){
    slideIndex++;
    tampilSlide(slideIndex);

}


// scroll
let articles = document.querySelectorAll('article');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () =>{
    articles.forEach(art => {
        let top = window.scrollY;
        let offset = art.offsetTop - 100;
        let height = art.offsetHeight;
        let id = art.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('aktif');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('aktif');
            })
        }
    })
}