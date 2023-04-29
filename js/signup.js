var form = document.querySelector('form');
var usernameInput = document.getElementById('username');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var rePasswordInput = document.getElementById('repassword');
var status = document.getElementById('status')

form.addEventListener('submit', function (event) {
    event.preventDefault(); // mencegah form untuk mengirimkan data dan melakukan refresh halaman
    var username = usernameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
    var repassword = rePasswordInput.value;

    // Validasi form
    if (username.trim() === '') {
        status.textContent = 'Please enter a username';
        return;
    }

    if (email.trim() === '') {
        status.textContent = 'Please enter an email';
        return;
    }

    if (password.trim() === '') {
        status.textContent = 'Please enter a password';
        return;
    }

    if (password !== repassword) {
        status.textContent = 'Passwords do not match';
        return;
    }
    // Simpan data ke localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);


    // Arahkan ke halaman login setelah sign up berhasil
    alert('berhasil daftar')
    window.location.href = 'login.html';



});
