function login() {
    alert('Login successful!');
    window.location.href = '/index.html';
}

function register() {
    alert('Account created successfully!');
    window.location.href = '/index.html';
}

function logout() {
    alert('Logout successful!');
    window.location.href = '/index.html';
}

function toggleFormsAndButtons() {
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
    var logoutBtn = document.getElementById('logoutBtn');

    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
    logoutBtn.style.display = logoutBtn.style.display === 'none' ? 'block' : 'none';
}