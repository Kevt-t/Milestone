document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('modeToggle');
    const modeIcon = document.getElementById('modeIcon');
    const themeSelect = document.getElementById('themeSelect');
    const logo = document.querySelector('.logo');
    const userForm = document.getElementById('userForm');
    const overlay = document.getElementById('overlay');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const selectedThemeInput = document.getElementById('selectedTheme');

    // Function to save user preferences to local storage
    function savePreferences(name, email, theme) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('selectedTheme', theme);
    }

    // Function to show the form
    function showForm(theme) {
        selectedThemeInput.value = theme; // Populate the selected theme in the form
        overlay.style.display = 'block'; // Show overlay
        userForm.style.display = 'block'; // Show form
    }

    // Function to hide the form
    function hideForm() {
        overlay.style.display = 'none'; // Hide overlay
        userForm.style.display = 'none'; // Hide form
    }

    // Check if user preferences are saved in local storage
    const savedTheme = localStorage.getItem('selectedTheme');
    const savedName = localStorage.getItem('userName');
    const savedEmail = localStorage.getItem('userEmail');

    if (savedTheme && savedName && savedEmail) {
        // Restore theme and preferences
        themeSelect.value = savedTheme;
        applyTheme(savedTheme); // Apply the theme based on saved preferences
    }

    // Function to apply a theme based on selection
    function applyTheme(theme) {
        if (theme === 'halloween') {
            applyHalloweenTheme();
        } else if (theme === 'builder') {
            applyBuilderTheme();
        } else if (theme === 'orange') {
            applyOrangeTheme();
        } else if (theme === 'purple') {
            applyPurpleTheme();
        } else {
            resetToDefaultTheme();
        }
    }

    // Event listener for theme selection change
    themeSelect.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;
        showForm(selectedTheme); // Show the form when a theme is selected
    });

    // Handle form submission
    userForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const name = nameInput.value;
        const email = emailInput.value;
        const theme = selectedThemeInput.value;

        savePreferences(name, email, theme); // Save user preferences in local storage
        applyTheme(theme); // Apply the selected theme
        hideForm(); // Hide the form
    });

    // Dark Mode Toggle Logic (unchanged)
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        modeIcon.src = 'Designing/Light Mode Icon.png'; // Change to light mode icon
    }

    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.src = 'Designing/Light Mode Icon.png'; // Change to light mode icon
            localStorage.setItem('darkMode', 'enabled');
        } else {
            modeIcon.src = 'Designing/Dark Mode Icon.png'; // Change to dark mode icon
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Other functions (unchanged)
    function applyHalloweenTheme() {
        document.body.style.backgroundColor = '#450406';
        document.body.style.color = '#6464d5';
        document.querySelector('footer').style.backgroundColor = '#333';
        document.querySelector('header').style.backgroundColor = '#333';
        document.querySelector('.header').style.borderBottom = '3px solid #6464d5';
        document.querySelector('footer').style.borderTop = '3px solid #6464d5';
        logo.src = 'Designing/HHC Logo (Halloween).png';
        resetCursor();
    }

    function applyBuilderTheme() {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        logo.src = 'Designing/HHC Logo.png';
        document.body.style.cursor = 'url("Designing/hammer-cursor.png"), auto';
    }

    function applyOrangeTheme() {
        document.body.style.backgroundColor = '#FFA500';
        document.body.style.color = '#FFFFFF';
        document.querySelector('footer').style.backgroundColor = '#FF8C00';
        document.querySelector('header').style.backgroundColor = '#FF8C00';
        logo.src = 'Designing/HHC Logo.png';
        resetCursor();
    }

    function applyPurpleTheme() {
        document.body.style.backgroundColor = '#800080';
        document.body.style.color = '#FFFFFF';
        document.querySelector('footer').style.backgroundColor = '#4B0082';
        document.querySelector('header').style.backgroundColor = '#4B0082';
        logo.src = 'Designing/HHC Logo.png';
        resetCursor();
    }

    function resetCursor() {
        document.body.style.cursor = '';
    }

    function resetToDefaultTheme() {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        document.querySelector('footer').style.backgroundColor = '';
        document.querySelector('header').style.backgroundColor = '';
        logo.src = 'Designing/HHC Logo.png';
        resetCursor();
    }
});
