// Import the japaneseFoodList from products.js
import { japaneseFoodList } from "./data/products.js";

function renderFoodList() {
    const list = document.querySelector(".menu-lengkap");
    // Reset isi elemen
    // list.innerHTML = "";
    japaneseFoodList.forEach((food) => {
        // ? Membuat elemen untuk setiap makanan
        const foodItem = document.createElement("div");
        // foodItem.classname = '.hidangan';

        foodItem.innerHTML = `
            <div class="item-menu">
                <div class="deskripsi">
                    <span class="id-menu">${food.id}</span>
                    <h2 class="nama-menu">${food.nama}</h2>
                    <p class="deskripsi-menu">${food.deskripsiSingkat}</p>
                    <div class="detail-menu">
                        <hr>
                        <a href="">Baca Selengkapnya →</a>
                    </div>
                </div>
                <img src="../../assets/images/${food.gambar}" alt="">
            </div>
        `;
        // ? Menambahkan elemen makanan ke dalam container
        list.appendChild(foodItem);
    });
}

document.addEventListener("DOMContentLoaded", renderFoodList);


// // ? Tambah item ke keranjang
// const keranjang = document.querySelector(".keranjang");
// const qty = document.querySelector(".qty");

// // Ambil jumlah dari localStorage jika ada, jika tidak gunakan 0
// let jumlah = parseInt(localStorage.getItem("qty keranjang")) || 0;

// // Tampilkan jumlah saat halaman pertama kali dimuat
// qty.innerHTML = jumlah;

// // Tambahkan event listener untuk klik pada elemen keranjang
// keranjang.addEventListener("click", () => {
//     jumlah++;
//     localStorage.setItem("qty keranjang", jumlah);
//     qty.innerHTML = jumlah;
// });

// // ? Perhitungan Pesan Makanan
// const btnKurang = document.querySelector(".kurang");
// const btnTambah = document.querySelector(".tambah");
// const qtyItem = document.querySelector(".qty-item");

// btnTambah.addEventListener("click", () => {
//     qtyItem.textContent++;
//     jumlah++;
//     localStorage.setItem("qty keranjang", jumlah);
//     qty.innerHTML = jumlah;
// });

// btnKurang.addEventListener("click", () => {
//     if (qtyItem.textContent > 0) {
//         qtyItem.textContent--;
//         jumlah--;
//         localStorage.setItem("qty keranjang", jumlah);
//         qty.innerHTML = jumlah;
//     }
// });
