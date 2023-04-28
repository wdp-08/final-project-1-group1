var form = document.querySelector("form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // mencegah form untuk mengirimkan data dan melakukan refresh halaman
  var name = nameInput.value;
  var email = emailInput.value;
  var message = messageInput.value;

  // Simpan data ke localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);

  // Arahkan alert
  alert("Pesan Telah Terkirim");
});
