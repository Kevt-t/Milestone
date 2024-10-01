const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');
const body = document.body;

// Check for previously saved theme preference in local storage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    modeIcon.src = 'Designing/Light Mode Icon.png'; // Light mode icon shown in dark mode
} else {
    modeIcon.src = 'Designing/Dark Mode Icon.png'; // Dark mode icon shown in light mode
}

// Toggle mode on button click
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update the icon and store the theme preference
    if (body.classList.contains('dark-mode')) {
        modeIcon.src = 'Designing/Light Mode Icon.png'; // Light mode icon in dark mode
        localStorage.setItem('theme', 'dark');
    } else {
        modeIcon.src = 'Designing/Dark Mode Icon.png'; // Dark mode icon in light mode
        localStorage.setItem('theme', 'light');
    }
});