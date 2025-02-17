function toggleTheme() {
    const body = document.body, icon = document.querySelector('.theme-toggle i');
    body.classList.toggle('light-theme'); body.classList.toggle('dark-theme');
    icon.classList.toggle('fa-moon'); icon.classList.toggle('fa-sun');
}