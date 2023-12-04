function login() {
    alert('Login successful!');
    toggleFormsAndButtons();
}

function register() {
    alert('Account created successfully!');
    toggleFormsAndButtons();
}

function logout() {
    alert('Logout successful!');
    toggleFormsAndButtons();
}

function toggleFormsAndButtons() {
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
    var logoutBtn = document.getElementById('logoutBtn');

    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
    logoutBtn.style.display = logoutBtn.style.display === 'none' ? 'block' : 'none';
}