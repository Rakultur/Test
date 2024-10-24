// Navbar responsive
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Slider imagenes
let index = 0;

const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    items[index].classList.remove('active');
    index = (index + 1) % totalItems;
    items[index].classList.add('active');
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    items[index].classList.remove('active');
    index = (index - 1 + totalItems) % totalItems;
    items[index].classList.add('active');
    updateCarousel();
});

function updateCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    const offset = -index * 100; // Mueve el contenedor según el índice actual
    carouselContainer.style.transform = `translateX(${offset}%)`;
}
