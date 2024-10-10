const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');
const body = document.body;
const themeSelect = document.getElementById('themeSelect');

// Check for previously saved theme or mode in local storage
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    // Apply the saved theme or mode
    document.body.classList.add(savedTheme);
    themeSelect.value = savedTheme;

    // Update the icon based on the saved theme/mode
    if (savedTheme === 'dark-mode') {
        modeIcon.src = 'Designing/Light Mode Icon.png'; // Show light mode icon in dark mode
    } else {
        modeIcon.src = 'Designing/Dark Mode Icon.png'; // Show dark mode icon in light mode
    }
} else {
    // If no theme is saved, ensure light mode icon is shown for light mode
    modeIcon.src = 'Designing/Dark Mode Icon.png'; // Show dark mode icon in light mode
}

// Toggle dark mode on button click
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update the icon and store the theme preference
    if (body.classList.contains('dark-mode')) {
        modeIcon.src = 'Designing/Light Mode Icon.png'; // Light mode icon in dark mode
        localStorage.setItem('theme', 'dark-mode');
    } else {
        modeIcon.src = 'Designing/Dark Mode Icon.png'; // Dark mode icon in light mode
        localStorage.setItem('theme', 'light');
    }
});

// Handle theme change from dropdown menu
themeSelect.addEventListener('change', () => {
    const selectedTheme = themeSelect.value;

    // Remove all theme-related classes except dark-mode or light-mode
    document.body.classList.remove('blue-theme', 'green-theme', 'orange-theme', 'purple-theme');

    // Apply the selected theme
    if (selectedTheme !== 'default') {
        document.body.classList.add(selectedTheme);
    }

    // Save the theme preference in local storage
    localStorage.setItem('theme', selectedTheme);
});
