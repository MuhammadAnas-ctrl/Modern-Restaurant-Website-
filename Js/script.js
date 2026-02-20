const hamMenu = document.getElementById('ham-menu');
const navContainer = document.getElementById('nav-container');

hamMenu.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    
    // Toggle icon
    const icon = hamMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});
