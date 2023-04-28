// Mendapatkan data dari localStorage
const data = JSON.parse(localStorage.getItem('dataOrders')) || [];

// Membuat fungsi untuk merender elemen
const renderData = () => {
    const rootElement = document.getElementById('table');
    if (rootElement) {
        rootElement.innerHTML = ''; // Menghapus isi dari elemen <main> sebelum merender kembali
        data.forEach((item) => {
            const { name, email, alamatJemputInput, alamatAntarInput, noHp, layananInput, quantityInput } = item;
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
            <div class="row" style="padding: 20px">
              <div class="col-sm-2">${name}</div>
              <div class="col-sm-2">${alamatJemputInput}</div>
              <div class="col-sm-2">${alamatAntarInput}</div>
              <div class="col-sm-3">${noHp}</div>
              <div class="col-sm-2">${layananInput}</div>
              <div class="col-sm-1">${quantityInput}</div>
            </div>
            </div>
      `;
            rootElement.appendChild(itemElement);
        });
    }
};

// Memanggil fungsi untuk pertama kali saat halaman dimuat
renderData();