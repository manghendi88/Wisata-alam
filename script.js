function toggleMenu() {
    document.getElementById('offcanvasMenu').classList.toggle('open');
}

function toggleDropdown(event) {
    event.preventDefault();
    event.target.parentElement.classList.toggle('open');
}
