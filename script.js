const moblieMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobilelMenu = document.querySelector('.mobile-menu');

moblieMenuToggle.addEventListener("click", ()=>{
    mobilelMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});