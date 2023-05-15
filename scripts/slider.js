const carSlider = document.querySelector('.car-slider');
const carItems = document.querySelector('.car-items');
const carItem = document.querySelectorAll('.car-item');
const carItemImg = document.querySelectorAll('.car-item-img img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

let slideIndex = 0;
let moveCount;

function moveSlide() {
    if (window.innerWidth <= 710) {
        moveCount = 1;
    }else{
        moveCount = 2;
    }
}

function init() {
    let width;
    width = carItems.offsetWidth;
    
    carItemImg.forEach(item => {
        item.style.width = width / 2.2 + 'px';
        item.style.height = 'auto';
    });

    showSlides()
}

window.addEventListener('resize', init);

function showSlides() {
    moveSlide()
    carItems.style.transform = `translate(-${slideIndex * carItem[0].offsetWidth*moveCount}px)`;
}

function onPrevClick() {
    moveSlide()
    if (slideIndex > 0) {
        slideIndex--;
    }else{
        slideIndex = carItem.length/moveCount- 1;
    }
    console.log(moveCount)
    console.log(window.innerWidth)
    showSlides();
}

function onNextClick() {
    moveSlide()
    if (slideIndex < carItem.length/moveCount- 1) {
        slideIndex++; 
    }else {
        slideIndex = 0;
    }

    showSlides();
}

prevButton.addEventListener('click', onPrevClick);
nextButton.addEventListener('click', onNextClick);

