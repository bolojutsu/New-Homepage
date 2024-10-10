const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');

    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') == 'true' || false;
    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);

}

mobileMenuToggle.addEventListener('click', toggleMobileMenu);

document.addEventListener('click', (event) =>{
    if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
});

document.addEventListener('keydown', (event) =>{
    if (event.key === 'escape' && mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
});