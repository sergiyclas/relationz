const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobile-nav');

function toggleMobileNav() {
    mobileNav.classList.toggle('active');
}
burger.addEventListener('click', toggleMobileNav);

document.addEventListener('click', function(event) {
    // Перевіряємо, чи клік відбувся поза межами мобільного меню або бургер-іконки
    if (!mobileNav.contains(event.target) && !burger.contains(event.target)) {
        mobileNav.classList.remove('active');
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        mobileNav.classList.remove('active');
    }
});
