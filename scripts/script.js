const mainButton = document.querySelector('.main-button');
mainButton.addEventListener('click', () => {
    document.querySelector('#cars').scrollIntoView({behavior: 'smooth'});
})

const carButton = document.querySelectorAll('.car-button');
for (let i=0; i<carButton.length; i++) {
    carButton[i].onclick = function () {
        document.querySelector('#rent__car').scrollIntoView({behavior: 'smooth'});
    }
}

let formImage = document.querySelector('.form-image');
const main = document.querySelector('.main');

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener('mousemove', (event) => {
        formImage.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });
    
    document.addEventListener('scroll', () => {
        main.style.backgroundPositionX = (0.2 * window.pageYOffset) + 'px';
    })
});

const headerMenuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu-list-section');

const changeMenu = function() {
    headerMenuButton.classList.toggle('change');
}
    
const showMenu = function() {
    headerMenu.classList.toggle('show');
}

headerMenuButton.addEventListener('click', changeMenu);
headerMenuButton.addEventListener('click', showMenu);

let formContainer = document.querySelector('.form__container');

function scaleFormImg() {
    let width;
    width = formContainer.offsetWidth;
    
    formImage.style.width = width + 'px';
    formImage.style.height = 'auto';
}

window.addEventListener('resize', scaleFormImg);

const priceButton = document.querySelector('.price-button');
const modalContainer = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close');

priceButton.addEventListener('click', (event) => {
    event.preventDefault();
    modalContainer.style.display = 'block';
})

modalClose.addEventListener('click', () => {
    modalContainer.style.display = 'none';
})

window.onclick = function(event) {
    if (event.target == modalContainer) {
        modalContainer.style.display = "none";
    }
}