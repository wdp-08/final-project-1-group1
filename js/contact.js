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
