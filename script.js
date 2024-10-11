const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');
const pumpkinToggle = document.getElementById('pumpkinToggle');
const hhcLogo = document.getElementById('hhcLogo');
const body = document.body;
const themeFormContainer = document.getElementById('themeFormContainer');
const themeForm = document.getElementById('themeForm');
const themeSelect = document.getElementById('themeSelect');

// Check for previously saved theme or mode in local storage
const savedTheme = localStorage.getItem('theme');
const savedName = localStorage.getItem('name');
const savedEmail = localStorage.getItem('email');
const savedLogo = localStorage.getItem('logo');

// Apply saved user preferences (theme and logo)
if (savedTheme) {
    body.classList.add(savedTheme);
    themeSelect.value = savedTheme;
}

if (savedLogo) {
    hhcLogo.src = savedLogo;
}

// Update the icon based on the saved theme/mode
if (savedTheme === 'dark-mode') {
    modeIcon.src = 'Designing/Light Mode Icon.png';
} else {
    modeIcon.src = 'Designing/Dark Mode Icon.png';
}

// Toggle dark mode on button click
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        modeIcon.src = 'Designing/Light Mode Icon.png';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        modeIcon.src = 'Designing/Dark Mode Icon.png';
        localStorage.setItem('theme', 'light');
    }
});

// Pumpkin icon click to change the logo
pumpkinToggle.addEventListener('click', () => {
    hhcLogo.src = 'Designing/HHC Logo (Halloween).png';
    localStorage.setItem('logo', 'Designing/HHC Logo (Halloween).png');

    // Show the theme form when pumpkin is clicked
    themeFormContainer.classList.remove('hidden');
});

// Handle form submission to save user data and theme
themeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const selectedTheme = themeSelect.value;

    // Save user preferences to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('theme', selectedTheme);

    // Apply the selected theme
    body.classList.remove('blue-theme', 'green-theme', 'orange-theme', 'purple-theme', 'default');
    if (selectedTheme !== 'default') {
        body.classList.add(selectedTheme);
    }

    // Hide the form after submission
    themeFormContainer.classList.add('hidden');
});
