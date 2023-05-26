let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    nama: "VANILA PARFUME",
    gambar: "produk1.jpeg",
    harga: 16862,
  },
  {
    id: 2,
    nama: "OCEAN PARFUME",
    gambar: "produk1.jpeg",
    harga: 17955,
  },
  {
    id: 3,
    nama: "EXOTIC PARFUME",
    gambar: "produk1.jpeg",
    harga: 16862,
  },
  {
    id: 4,
    nama: "BLUE PARFUME",
    gambar: "produk1.jpeg",
    harga: 17955,
  },
  {
    id: 5,
    nama: "SAKURA PARFUME",
    gambar: "produk1.jpeg",
    harga: 17955,
  },
  {
    id: 6,
    nama: "AKASIA PARFUME",
    gambar: "produk1.jpeg",
    harga: 16862,
  },
  {
    id: 7,
    nama: "PHILUX PARFUME",
    gambar: "produk1.jpeg",
    harga: 17955,
  },
  {
    id: 8,
    nama: "POPPY PARFUME",
    gambar: "produk1.jpeg",
    harga: 17955,
  },
  {
    id: 9,
    nama: "LAVENDER PARFUME",
    gambar: "produk1.jpeg",
    harga: 16862,
  },
  {
    id: 10,
    nama: "LILY PARFUME",
    gambar: "produk1.jpeg",
    harga: 17955,
  },
  {
    id: 11,
    nama: "BACCARAT PARFUME",
    gambar: "produk1.jpeg",
    harga: 17955,
  },
  {
    id: 12,
    nama: "ROSE PARFUME",
    gambar: "produk1.jpeg",
    harga: 16862,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="gambar/${value.gambar}">
            <div class="title">${value.nama}</div>
            <div class="harga">${value.harga.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Tambahkan ke Keranjang</button>`;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  alert("Produk berhasil ditambahkan ke keranjang belanja!");
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalharga = 0;
  listCards.forEach((value, key) => {
    totalharga = totalharga + value.harga;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="gambar/${value.gambar}"/></div>
                <div>${value.nama}</div>
                <div>${value.harga.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalharga.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].harga = quantity * products[key].harga;
  }
  reloadCard();
}

