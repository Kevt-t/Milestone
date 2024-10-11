const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');
const body = document.body;
const themeSelect = document.getElementById('themeSelect');

// Check for previously saved theme or mode in local storage
const savedTheme = localStorage.getItem('theme');
const savedMode = localStorage.getItem('mode');

// Apply the saved mode
if (savedMode === 'dark') {
    body.classList.add('dark-mode');
    modeIcon.src = 'Designing/Light Mode Icon.png'; // Show light mode icon in dark mode
} else {
    modeIcon.src = 'Designing/Dark Mode Icon.png'; // Show dark mode icon in light mode
}

// Apply the saved theme, if any
if (savedTheme) {
    body.classList.add(savedTheme);
    themeSelect.value = savedTheme;
}

// Toggle dark/light mode on button click
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        modeIcon.src = 'Designing/Light Mode Icon.png';
        localStorage.setItem('mode', 'dark');
    } else {
        modeIcon.src = 'Designing/Dark Mode Icon.png';
        localStorage.setItem('mode', 'light');
    }
});

// Handle theme change from the dropdown menu
themeSelect.addEventListener('change', () => {
    const selectedTheme = themeSelect.value;

    // Remove all theme-related classes except dark-mode or light-mode
    body.classList.remove('halloween-theme', 'builder-theme', 'orange-theme', 'purple-theme');

    // Apply the selected theme
    if (selectedTheme !== 'default') {
        body.classList.add(selectedTheme);
    }

    // Save the selected theme in local storage
    localStorage.setItem('theme', selectedTheme);

    // Add click event for Builder Theme (Simplified)
    if (selectedTheme === 'builder') {
        console.log('Builder theme selected, adding click events');
        body.addEventListener('mousedown', () => {
            body.classList.add('clicked');
        });
        body.addEventListener('mouseup', () => {
            body.classList.remove('clicked');
        });
    } else {
        body.removeEventListener('mousedown', handleHammerClick);
        body.removeEventListener('mouseup', handleHammerRelease);
    }
});
