var form = document.querySelector('form');
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var status = document.getElementById('status')


form.addEventListener('submit', function (event) {
    event.preventDefault(); // mencegah form untuk mengirimkan data dan melakukan refresh halaman
    var username = usernameInput.value;
    var password = passwordInput.value;
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'index.html'; // mengarahkan ke halaman home jika login berhasil
    } else {
        alert('Invalid username or password');
    }

});
