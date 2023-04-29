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
            <div class="table">
              <table>
                  <thead>
                      <tr>
                              <td class="head">${name}</td>
                              <td class="head">${email}</td>
                              <td class="head">${alamatJemputInput}</td>
                              <td class="head">${alamatAntarInput}</td>
                              <td class="head">${noHp}</td>
                              <td class="head">${layananInput}</td>
                              <td class="head">${quantityInput}</td>
                      </tr>
                  </thead>
              </table>
              <p id="table">
              </p>
          </div>
      `;

            rootElement.appendChild(itemElement);
        });
    }
};

// Memanggil fungsi untuk pertama kali saat halaman dimuat
renderData();