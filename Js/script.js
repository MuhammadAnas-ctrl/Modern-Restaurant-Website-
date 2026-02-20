const hamMenu = document.getElementById('ham-menu');
const mobileDropdown = document.getElementById('mobile-dropdown');

hamMenu.addEventListener('click', () => {
    mobileDropdown.classList.toggle('show-menu');
    
    // Toggle icon between bars and X
    const icon = hamMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});
