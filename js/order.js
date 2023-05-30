const form = document.getElementById('form-order');
const table = document.getElementById('table-order');
let order = [];

// getitem mengambil data dari local storage
if (localStorage.getItem('order')) {
    order = JSON.parse(localStorage.getItem('order'));
    renderTable();
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const alamatJemput = document.getElementById('alamat-jemput').value;
    const alamatAntar = document.getElementById('alamat-antar').value;
    const layanan = document.getElementById('layanan').value;
    const noHp = document.getElementById('noHp').value;
    const Save = document.getElementById('save').value;

    if (Save) {
        // Update order
        const index = order.findIndex(item => item.id === Save);
        if (index !== -1) {
            order[index].nama = nama;
            order[index].alamatJemput = alamatJemput;
            order[index].alamatAntar = alamatAntar;
            order[index].layanan = layanan;
            order[index].noHp = noHp;
        }
    } else {
        // Buat order baru
        const id = new Date().getTime().toString();
        const newOrder = { id, nama, alamatJemput, alamatAntar, layanan, noHp };
        order.push(newOrder);
    }

    // Reset form
    form.reset();
    document.getElementById('save').value = '';

    // Simpan data order ke localStorage
    localStorage.setItem('order', JSON.stringify(order));

    // Render tabel ulang
    renderTable();
});

function renderTable() {
    table.innerHTML = `
    <tr>
      <th>Nama</th>
      <th>Alamat Jemput</th>
      <th>Alamat Antar</th>
      <th>Layanan</th>
      <th>No HP</th>
      <th>Aksi</th>
    </tr>
  `;

    order.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${item.nama}</td>
      <td>${item.alamatJemput}</td>
      <td>${item.alamatAntar}</td>
      <td>${item.layanan}</td>
      <td>${item.noHp}</td>
      <td>
        <button  class="btn btn-warning" onclick="editOrder('${item.id}')"><img src="gambar/edit.png" alt=""></button>
        <button class="btn btn-danger" onclick="hapusOrder('${item.id}')"><img src="gambar/delete.png" alt=""></button>
      </td>
    `;
        table.appendChild(row);
    });
}

function editOrder(id) {
    const NewOrder = order.find(item => item.id === id);
    if (NewOrder) {
        document.getElementById('nama').value = NewOrder.nama;
        document.getElementById('alamat-jemput').value = NewOrder.alamatJemput;
        document.getElementById('alamat-antar').value = NewOrder.alamatAntar;
        document.getElementById('layanan').value = NewOrder.layanan;
        document.getElementById('noHp').value = NewOrder.noHp;
        document.getElementById('save').value = NewOrder.id;
    }
}

function hapusOrder(id) {
    const index = order.findIndex(item => item.id === id);
    if (index !== -1) {
        order.splice(index, 1);
        // Simpan perubahan ke localStorage setelah menghapus data order
        localStorage.setItem('order', JSON.stringify(order));
        renderTable();
    }
}