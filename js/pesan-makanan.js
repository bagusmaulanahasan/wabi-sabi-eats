// Import the japaneseFoodList from products.js
import { japaneseFoodList } from "../data/products.js";

document.addEventListener("DOMContentLoaded", () => {
    // ? Ambil daftar makanan dan qty dari localStorage
    const dataKeranjang =
        JSON.parse(localStorage.getItem("dataKeranjang")) || {};

    // ? Menmpilkan jumlah total dari localStorage
    const qty = document.querySelector(".qty");
    if (qty) {
        const totalQty = Object.values(dataKeranjang).reduce(
            (total, item) => total + item.qty,
            0
        );
        qty.innerHTML = totalQty;
    }

    // ? Render daftar makanan dengan qty yang sesuai dari localStorage
    renderPesanMakanan(dataKeranjang);
});

// ? Menampilkan daftar menu ke Halaman Pesan Makanan
function renderPesanMakanan(dataKeranjang) {
    const listPesanMakanan = document.querySelector(".list-pesan-makanan");
    if (!listPesanMakanan) {
        console.error(
            "Elemen dengan class 'list-pesan-makanan' tidak ditemukan."
        );
        return;
    }

    listPesanMakanan.innerHTML = "";
    japaneseFoodList.forEach((food) => {
        const foodQty = dataKeranjang[food.nama]?.qty || 0;

        const foodItem = document.createElement("div");
        foodItem.innerHTML = `
                <div class="item-makanan">
                    <img src=${food.gambar} alt="">
                    <div class="deskripsi-menu-makanan">
                        <span class="id-menu">${food.id}</span>
                        <h2 class="nama-menu">${food.nama}</h2>
                        <span class="harga-item">Rp${food.harga.toLocaleString('id-ID')}</span>
                        <div class="btn-ke-keranjang">
                            <button class="kurang">-</button>
                            <span class="qty-item">${foodQty}</span>
                            <button class="tambah">+</button>
                        </div>
                    </div>
                </div>
        `;
        listPesanMakanan.appendChild(foodItem);
    });

    // ? event listener untuk tombol tambah dan kurang
    const btnKurang = document.querySelectorAll(".kurang");
    const btnTambah = document.querySelectorAll(".tambah");

    btnTambah.forEach((button) =>
        button.addEventListener("click", (e) =>
            tambahKeKeranjang(e, dataKeranjang)
        )
    );
    btnKurang.forEach((button) =>
        button.addEventListener("click", (e) =>
            kurangiDariKeranjang(e, dataKeranjang)
        )
    );
}

// ? Fungsi Tambah dan Kurang
function tambahKeKeranjang(e, dataKeranjang) {
    const namaMenu = e.target
        .closest(".deskripsi-menu-makanan")
        .querySelector(".nama-menu").textContent;
    const hargaMenu = parseInt(
        e.target
            .closest(".deskripsi-menu-makanan")
            .querySelector(".harga-item")
            .textContent.replace(/\D/g, "")
    );
    const qtyItem = e.target.parentElement.querySelector(".qty-item");

    // ? Update qty untuk item ini
    const currentQty = parseInt(qtyItem.textContent) || 0;
    qtyItem.textContent = currentQty + 1;

    // ? Update dataKeranjang
    if (!dataKeranjang[namaMenu]) {
        dataKeranjang[namaMenu] = { qty: 0, harga: hargaMenu };
    }
    dataKeranjang[namaMenu].qty += 1;

    // ? Update total qty dan simpan ke localStorage
    updateLocalStorage(dataKeranjang);
}

function kurangiDariKeranjang(e, dataKeranjang) {
    const namaMenu = e.target
        .closest(".deskripsi-menu-makanan")
        .querySelector(".nama-menu").textContent;
    const qtyItem = e.target.parentElement.querySelector(".qty-item");

    // ? Update qty untuk item ini
    const currentQty = parseInt(qtyItem.textContent) || 0;
    if (currentQty > 0) {
        qtyItem.textContent = currentQty - 1;

        // ? Update dataKeranjang
        if (dataKeranjang[namaMenu]) {
            dataKeranjang[namaMenu].qty -= 1;

            if (dataKeranjang[namaMenu].qty === 0) {
                delete dataKeranjang[namaMenu];
            }
        }

        // ? Update total qty dan simpan ke localStorage
        updateLocalStorage(dataKeranjang);
    }
}

function updateLocalStorage(dataKeranjang) {
    const qty = document.querySelector(".qty");
    const totalQty = Object.values(dataKeranjang).reduce(
        (total, item) => total + item.qty,
        0
    );
    if (qty) qty.innerHTML = totalQty;

    // ? Simpan data ke localStorage
    localStorage.setItem("dataKeranjang", JSON.stringify(dataKeranjang));
}
