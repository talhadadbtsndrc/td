// Mode sombre
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeTooltip = document.getElementById('darkModeTooltip');
const body = document.body;

// Vérifier si le mode sombre était activé avant
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
    darkModeTooltip.textContent = 'Mode clair';
}

// Basculer entre mode clair et sombre
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
        darkModeTooltip.textContent = 'Mode clair';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.textContent = '🌙';
        darkModeTooltip.textContent = 'Mode sombre';
        localStorage.setItem('darkMode', 'disabled');
    }
});