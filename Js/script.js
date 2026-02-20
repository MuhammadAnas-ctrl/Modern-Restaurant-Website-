const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change icon from Bars to X
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});
