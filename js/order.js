// Mendapatkan data dari localStorage
const data = JSON.parse(localStorage.getItem('dataOrders')) || [];

// Membuat fungsi untuk merender elemen
const renderData = () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.innerHTML = ''; // Menghapus isi dari elemen <main> sebelum merender kembali
        data.forEach((item) => {
            const { name, email, alamatJemputInput, alamatAntarInput, noHp, layananInput, quantityInput } = item;
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
        <p>Nama: ${name}</p>
        <p>Email: ${email}</p>
        <p>Alamat Jemput: ${alamatJemputInput}</p>
        <p>Alamat Antar: ${alamatAntarInput}</p>
        <p>No HP: ${noHp}</p>
        <p>Layanan : ${layananInput}</p>
        <p>Quantity: ${quantityInput} kg </p>
      `;
            rootElement.appendChild(itemElement);
        });
    }
};

// Memanggil fungsi untuk pertama kali saat halaman dimuat
renderData();