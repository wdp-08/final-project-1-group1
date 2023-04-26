var form = document.querySelector('form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var alamatJemputInput = document.getElementById('alamatJemput');
var alamatAntarInput = document.getElementById('alamatAntar');
var noHpInput = document.getElementById('noHp');
var layananInput = document.getElementById('text');
var quantityInput = document.getElementById('quantity')

form.addEventListener('submit', function (event) {
    event.preventDefault(); // mencegah form untuk mengirimkan data dan melakukan refresh halaman
    var name = nameInput.value;
    var email = emailInput.value;
    var alamatJemput = alamatJemputInput.value;
    var alamatAntar = alamatAntarInput.value;
    var noHp = noHpInput.value;
    var layanan = layananInput.value;
    var quantity = quantityInput.value;

    // Simpan data ke localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('alamatJemput', alamatJemput);
    localStorage.setItem('alamatAntar', alamatAntar);
    localStorage.setItem('noHp', noHp);
    localStorage.setItem('text', layanan);
    localStorage.setItem('quantity', quantity);

    // Arahkan alert
    alert('Pesan Telah Terkirim');
});
