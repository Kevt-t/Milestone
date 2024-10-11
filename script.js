const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');
const body = document.body;
const halloweenThemeToggle = document.getElementById('halloweenThemeToggle');
const pumpkinIcon = document.getElementById('pumpkinIcon');
const logo = document.getElementById('logo');
const formPopup = document.getElementById('userForm');
const openFormButton = document.getElementById('openFormButton');
const closeFormButton = document.getElementById('closeFormButton');
const savePreferencesButton = document.getElementById('savePreferences');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const themeSelect = document.getElementById('theme');

// Check for previously saved theme in local storage
const savedTheme = localStorage.getItem('theme');
const savedName = localStorage.getItem('name');
const savedEmail = localStorage.getItem('email');

// Apply the saved theme
if (savedTheme) {
    document.body.classList.add(savedTheme);

    if (savedTheme === 'dark-mode') {
        modeIcon.src = 'Designing/Light Mode Icon.png';
    } else if (savedTheme === 'halloween-mode') {
        pumpkinIcon.src = 'Designing/Pumpkin.png';
        logo.classList.add('halloween-logo');
    } else {
        modeIcon.src = 'Designing/Dark Mode Icon.png';
    }
}

// Populate form fields with saved data
if (savedName) {
    nameInput.value = savedName;
}

if (savedEmail) {
    emailInput.value = savedEmail;
}

if (savedTheme) {
    themeSelect.value = savedTheme.replace('-mode', '');
}

// Toggle dark mode on button click
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        modeIcon.src = 'Designing/Light Mode Icon.png';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        modeIcon.src = 'Designing/Dark Mode Icon.png';
        localStorage.setItem('theme', 'light-mode');
    }
});

// Toggle Halloween theme on button click
halloweenThemeToggle.addEventListener('click', () => {
    body.classList.toggle('halloween-mode');

    if (body.classList.contains('halloween-mode')) {
        logo.classList.add('halloween-logo');
        localStorage.setItem('theme', 'halloween-mode');
    } else {
        logo.classList.remove('halloween-logo');
        localStorage.setItem('theme', 'light-mode');
    }
});

// Open form popup
openFormButton.addEventListener('click', () => {
    formPopup.style.display = 'block';
});

// Close form popup
closeFormButton.addEventListener('click', () => {
    formPopup.style.display = 'none';
});

// Save user preferences
savePreferencesButton.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const theme = themeSelect.value + '-mode';

    // Save preferences in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('theme', theme);

    // Apply the selected theme
    document.body.className = '';  // Reset all classes
    document.body.classList.add(theme);

    if (theme === 'halloween-mode') {
        logo.classList.add('halloween-logo');
    } else {
        logo.classList.remove('halloween-logo');
    }

    // Close the form popup
    formPopup.style.display = 'none';
});
