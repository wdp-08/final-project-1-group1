// var form = document.querySelector("#form");
// var nameInput = document.getElementById("name");
// var emailInput = document.getElementById("email");
// var messageInput = document.getElementById("message");

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // mencegah form untuk mengirimkan data dan melakukan refresh halaman
//   var name = nameInput.value;
//   var email = emailInput.value;
//   var message = messageInput.value;

//   // Simpan data ke localStorage
//   localStorage.setItem("name", name);
//   localStorage.setItem("email", email);
//   localStorage.setItem("message", message);

//   // Arahkan alert
//   alert("Pesan Telah Terkirim");
//   console.log(name);
//   console.log(email);
//   console.log(message);
// });

function simpan() {
  var nama = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pesan = document.getElementById("message").value;
  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }
  if (email === "") {
    alert("Email tidak boleh kosong!");
    return;
  }
  if (pesan === "") {
    alert("Pesan tidak boleh kosong!");
    return;
  } else {
    alert("Pesan sudah terkirim");
  }
  // Simpan data ke localStorage
  localStorage.setItem("name", nama);
  localStorage.setItem("email", email);
  localStorage.setItem("pesan", pesan);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pesan").value = "";
}
