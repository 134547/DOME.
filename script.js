// Toggle three-dot menu
document.querySelector('.menu-icon').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const menuContainer = document.querySelector('.menu-container');
    if (!menuContainer.contains(event.target)) {
        document.querySelector('.dropdown-menu').classList.remove('active');
    }
});
