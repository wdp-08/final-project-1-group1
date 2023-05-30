// let form = document.querySelector("form");
// const dataSubmit = document.getElementById("submit");

// //button event
// dataSubmit.addEventListener("click", function (event) {
//   event.preventDefault(); // mencegah tautan mengarah ke URL baru
//   const nameInput = document.getElementById("name").value;
//   const emailInput = document.getElementById("email").value;
//   const alamatJemputInput = document.getElementById("alamatJemput").value;
//   const alamatAntarInput = document.getElementById("alamatAntar").value;
//   const noHpInput = document.getElementById("noHp").value;
//   const layananInput = document.getElementById("text").value;
//   const quantityInput = document.getElementById("quantity").value;

//   if (nameInput !== "" && emailInput !== "" && alamatJemputInput !== "" && alamatAntarInput !== "" && noHpInput !== "" && layananInput !== "" && quantityInput !== "") {
//     let idData = +new Date().getTime();
//     let dataOrder = {
//       id: idData,
//       name: nameInput,
//       email: emailInput,
//       alamatJemputInput: alamatJemputInput,
//       alamatAntarInput: alamatAntarInput,
//       noHp: noHpInput,
//       layananInput: layananInput,
//       quantityInput: quantityInput,
//     };

//     if (localStorage.getItem("dataOrders")) {
//       let orders = JSON.parse(localStorage.getItem("dataOrders"));
//       orders.push(dataOrder);
//       localStorage.setItem("dataOrders", JSON.stringify(orders));
//       console.log(orders);
//     } else {
//       let orders = [];
//       localStorage.setItem("dataOrders", JSON.stringify(orders));
//       let neworders = JSON.parse(localStorage.getItem("dataOrders"));
//       neworders.push(dataOrder);
//       localStorage.setItem("dataOrders", JSON.stringify(neworders));
//       console.log(neworders);
//     }
//   }
// });
