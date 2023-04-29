var form = document.querySelector('form');
var usernameInput = document.getElementById('username');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var rePasswordInput = document.getElementById('repassword');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // mencegah form untuk mengirimkan data dan melakukan refresh halaman
    var username = usernameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
    var repassword = rePasswordInput.value;

    // Validasi form
    if (username === "") {
        alert("Username tidak boleh kosong!");
        return;
    }
    if (email === "") {
        alert("Email tidak boleh kosong!");
        return;
    }
    if (password === "") {
        alert("Passoword tidak boleh kosong!");
        return;
    }
    if (password !== repassword) {
        alert("Masukan Password yang sama!");
        return;
    } else {
        alert("Berhasil");
    }


    // Simpan data ke localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);


    // Arahkan ke halaman login setelah sign up berhasil
    window.location.href = 'login.html';

});
