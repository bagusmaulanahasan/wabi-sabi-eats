// // Import the japaneseFoodList from products.js
// import { japaneseFoodList } from "./data/products.js";

// document.addEventListener("DOMContentLoaded", () => {
//     // ? Ambil daftar makanan dan qty dari localStorage
//     const dataKeranjang =
//         JSON.parse(localStorage.getItem("dataKeranjang")) || {};

//     // ? Tampilkan total jumlah item di keranjang
//     updateTotalQty(dataKeranjang);

//     // ? Render isi keranjang
//     renderIsiKeranjang(dataKeranjang);
// });

// // ? Fungsi untuk menampilkan isi keranjang
// function renderIsiKeranjang(dataKeranjang) {
//     const listKeranjang = document.querySelector(".list-keranjang");
//     if (!listKeranjang) {
//         console.error("Elemen dengan class 'list-keranjang' tidak ditemukan.");
//         return;
//     }

//     listKeranjang.innerHTML = "";

//     // Jika keranjang kosong
//     if (Object.keys(dataKeranjang).length === 0) {
//         listKeranjang.innerHTML = "<p>Keranjang kosong</p>";
//         return;
//     }

//     // Render item dari keranjang
//     Object.keys(dataKeranjang).forEach((nama) => {
//         const item = dataKeranjang[nama];
//         const food = japaneseFoodList.find((food) => food.nama === nama);

//         if (food) {
//             const keranjangItem = `
//                 <div class="item-keranjang">
//                     <img src="${food.gambar}" alt="${nama}">
//                     <div class="deskripsi-item">
//                         <h3>${nama}</h3>
//                         <span>Rp${item.harga.toLocaleString("id-ID")}</span>
//                     </div>
//                     <div class="btn-keranjang">
//                         <button class="kurang">-</button>
//                         <span class="qty-item">${item.qty}</span>
//                         <button class="tambah">+</button>
//                     </div>
//                 </div>
//             `;
//             listKeranjang.innerHTML += keranjangItem;
//         }
//     });

//     // Tambahkan event listener untuk tombol + dan -
//     listKeranjang.querySelectorAll(".tambah").forEach((button) =>
//         button.addEventListener("click", (e) => tambahKeKeranjang(e, dataKeranjang))
//     );
//     listKeranjang.querySelectorAll(".kurang").forEach((button) =>
//         button.addEventListener("click", (e) => kurangiDariKeranjang(e, dataKeranjang))
//     );
// }

// // ? Fungsi untuk menambah item ke keranjang
// function tambahKeKeranjang(e, dataKeranjang) {
//     const namaMenu = e.target.closest(".item-keranjang").querySelector("h3").textContent;
//     const food = japaneseFoodList.find((food) => food.nama === namaMenu);

//     if (!food) return;

//     // Update qty di keranjang
//     if (!dataKeranjang[namaMenu]) {
//         dataKeranjang[namaMenu] = { qty: 0, harga: food.harga };
//     }
//     dataKeranjang[namaMenu].qty += 1;

//     // Simpan perubahan dan perbarui UI
//     updateLocalStorage(dataKeranjang);
//     renderIsiKeranjang(dataKeranjang);
// }

// // ? Fungsi untuk mengurangi item dari keranjang
// function kurangiDariKeranjang(e, dataKeranjang) {
//     const namaMenu = e.target.closest(".item-keranjang").querySelector("h3").textContent;

//     if (dataKeranjang[namaMenu]) {
//         dataKeranjang[namaMenu].qty -= 1;

//         if (dataKeranjang[namaMenu].qty === 0) {
//             delete dataKeranjang[namaMenu];
//         }

//         // Simpan perubahan dan perbarui UI
//         updateLocalStorage(dataKeranjang);
//         renderIsiKeranjang(dataKeranjang);
//     }
// }

// // ? Fungsi untuk memperbarui total qty di UI
// function updateTotalQty(dataKeranjang) {
//     const qty = document.querySelector(".qty");
//     if (qty) {
//         const totalQty = Object.values(dataKeranjang).reduce(
//             (total, item) => total + item.qty,
//             0
//         );
//         qty.innerHTML = totalQty;
//     }
// }

// // ? Fungsi untuk memperbarui localStorage dan total qty
// function updateLocalStorage(dataKeranjang) {
//     localStorage.setItem("dataKeranjang", JSON.stringify(dataKeranjang));
//     updateTotalQty(dataKeranjang);
// }


// // ? Fungsi untuk mengatur height isi keranjang ketika keranjang di klik
// document.addEventListener("DOMContentLoaded", () => {
//     const keranjangBtn = document.querySelector(".keranjang");
//     const isiKeranjangSection = document.querySelector("#isi-keranjang");

//     if (keranjangBtn && isiKeranjangSection) {
//         keranjangBtn.addEventListener("click", () => {
//             const currentHeight = window.getComputedStyle(isiKeranjangSection).height;

//             if (currentHeight === "0px") {
//                 isiKeranjangSection.style.height = "fit-content";
//                 isiKeranjangSection.style.padding = "20px";
//             } else {
//                 isiKeranjangSection.style.height = "0";
//                 isiKeranjangSection.style.padding = "0";
//             }
//         });
//     } else {
//         console.error(
//             "Elemen dengan class 'keranjang' atau id 'isi-keranjang' tidak ditemukan."
//         );
//     }
// });


// Import the japaneseFoodList from products.js
import { japaneseFoodList } from "../data/products.js";

document.addEventListener("DOMContentLoaded", () => {
    // ? Ambil daftar makanan dan qty dari localStorage
    const dataKeranjang =
        JSON.parse(localStorage.getItem("dataKeranjang")) || {};

    // ? Tampilkan total jumlah item di keranjang
    updateTotalQty(dataKeranjang);

    // ? Render isi keranjang
    renderIsiKeranjang(dataKeranjang);

    // ? Render total belanja
    renderTotalBelanja(dataKeranjang);
});

// ? Fungsi untuk menampilkan isi keranjang
function renderIsiKeranjang(dataKeranjang) {
    const listKeranjang = document.querySelector(".list-keranjang");
    if (!listKeranjang) {
        console.error("Elemen dengan class 'list-keranjang' tidak ditemukan.");
        return;
    }

    listKeranjang.innerHTML = "";

    // Jika keranjang kosong
    if (Object.keys(dataKeranjang).length === 0) {
        listKeranjang.innerHTML = "<p>Keranjang kosong</p>";
        return;
    }

    // Render item dari keranjang
    Object.keys(dataKeranjang).forEach((nama) => {
        const item = dataKeranjang[nama];
        const food = japaneseFoodList.find((food) => food.nama === nama);

        if (food) {
            const keranjangItem = `
                <div class="item-keranjang">
                    <img src="${food.gambar}" alt="${nama}">
                    <div class="deskripsi-item">
                        <h3>${nama}</h3>
                        <span>Rp${item.harga.toLocaleString("id-ID")}</span>
                    </div>
                    <div class="btn-keranjang">
                        <button class="kurang">-</button>
                        <span class="qty-item">${item.qty}</span>
                        <button class="tambah">+</button>
                    </div>
                </div>
            `;
            listKeranjang.innerHTML += keranjangItem;
        }
    });

    // Tambahkan event listener untuk tombol + dan -
    listKeranjang.querySelectorAll(".tambah").forEach((button) =>
        button.addEventListener("click", (e) => tambahKeKeranjang(e, dataKeranjang))
    );
    listKeranjang.querySelectorAll(".kurang").forEach((button) =>
        button.addEventListener("click", (e) => kurangiDariKeranjang(e, dataKeranjang))
    );
}

// ? Fungsi untuk menambah item ke keranjang
function tambahKeKeranjang(e, dataKeranjang) {
    const namaMenu = e.target.closest(".item-keranjang").querySelector("h3").textContent;
    const food = japaneseFoodList.find((food) => food.nama === namaMenu);

    if (!food) return;

    // Update qty di keranjang
    if (!dataKeranjang[namaMenu]) {
        dataKeranjang[namaMenu] = { qty: 0, harga: food.harga };
    }
    dataKeranjang[namaMenu].qty += 1;

    // Simpan perubahan dan perbarui UI
    updateLocalStorage(dataKeranjang);
    renderIsiKeranjang(dataKeranjang);
    renderTotalBelanja(dataKeranjang);
}

// ? Fungsi untuk mengurangi item dari keranjang
function kurangiDariKeranjang(e, dataKeranjang) {
    const namaMenu = e.target.closest(".item-keranjang").querySelector("h3").textContent;

    if (dataKeranjang[namaMenu]) {
        dataKeranjang[namaMenu].qty -= 1;

        if (dataKeranjang[namaMenu].qty === 0) {
            delete dataKeranjang[namaMenu];
        }

        // Simpan perubahan dan perbarui UI
        updateLocalStorage(dataKeranjang);
        renderIsiKeranjang(dataKeranjang);
        renderTotalBelanja(dataKeranjang);
    }
}

// ? Fungsi untuk memperbarui total qty di UI
function updateTotalQty(dataKeranjang) {
    const qty = document.querySelector(".qty");
    if (qty) {
        const totalQty = Object.values(dataKeranjang).reduce(
            (total, item) => total + item.qty,
            0
        );
        qty.innerHTML = totalQty;
    }
}

// ? Fungsi untuk memperbarui localStorage dan total qty
function updateLocalStorage(dataKeranjang) {
    localStorage.setItem("dataKeranjang", JSON.stringify(dataKeranjang));
    updateTotalQty(dataKeranjang);
}

// ? Fungsi untuk menampilkan total belanja
function renderTotalBelanja(dataKeranjang) {
    const totalBelanjaContainer = document.querySelector(".total-belanja");
    if (!totalBelanjaContainer) {
        console.error("Elemen dengan class 'total-belanja' tidak ditemukan.");
        return;
    }

    let totalKeseluruhan = 0;
    let htmlContent = `
        <table border="1"> 
            <thead>
                <tr>
                    <th>Nama Produk</th>
                    <th>Harga Satuan</th>
                    <th>Qty</th>
                    <th>Total per Produk</th>
                </tr>
            </thead>
            <tbody>
    `;

    Object.keys(dataKeranjang).forEach((namaProduk) => {
        const item = dataKeranjang[namaProduk];
        const totalPerProduk = item.harga * item.qty;
        totalKeseluruhan += totalPerProduk;

        htmlContent += `
            <tr>
                <td>${namaProduk}</td>
                <td>Rp${item.harga.toLocaleString("id-ID")}</td>
                <td>${item.qty}</td>
                <td>Rp${totalPerProduk.toLocaleString("id-ID")}</td>
            </tr>
        `;
    });

    htmlContent += `
            </tbody>
        </table>
        <div class="total-keseluruhan">
            <strong>Total Keseluruhan:</strong> Rp${totalKeseluruhan.toLocaleString("id-ID")}
        </div>
    `;

    totalBelanjaContainer.innerHTML = htmlContent;
}


// ? Menampilkan form data penerima dan checkout
const checkout = document.querySelector(".checkout");
checkout.innerHTML = `
        <h2> Data Penerima </h2>
        <form class="form-pembayaran">
            <label for="nama-penerima">Nama Penerima :</label>
            <input type="text" id="nama-penerima" name="nama-penerima" required />
            <label for="nomor-telepon">Nomor Telepon :</label>
            <input type="tel" id="nomor-telepon" name="nomor-telepon" required />
            <label for="alamat-pengiriman">Alamat Pengiriman :</label>
            <textarea id="alamat-pengiriman" name="alamat-pengiriman" required></textarea>
            <label for="metode-pembayaran">Metode Pembayaran :</label>
            <select id="metode-pembayaran">
                <option value="">-- pilih metode pembayaran</option>
                <option value="QRIS">QRIS</option>
                <option value="COD">COD</option>
            </select>
            <button type="submit">Checkout</button>
        </form>
    `;


// ? Menyimpan dan menampilkan data penerima
// Tunggu hingga DOM siap
document.addEventListener("DOMContentLoaded", () => {
    const formPembayaran = document.querySelector(".form-pembayaran");

    // Tambahkan event listener untuk submit form
    formPembayaran.addEventListener("submit", (event) => {
        event.preventDefault(); // Mencegah submit form default

        // Ambil nilai dari input
        const namaPenerima = document.getElementById("nama-penerima").value;
        const nomorTelepon = document.getElementById("nomor-telepon").value;
        const alamatPengiriman = document.getElementById("alamat-pengiriman").value;
        const metodePembayaran = document.getElementById("metode-pembayaran").value;

        // Simpan data dalam variabel
        const dataPenerima = {
            namaPenerima,
            nomorTelepon,
            alamatPengiriman,
            metodePembayaran,
        };

        const listKeranjang = document.querySelector(".list-keranjang");
        listKeranjang.style.display = "none";

        // Tampilkan data menggunakan innerHTML
        const container = document.querySelector(".form-pembayaran").parentElement;
        container.innerHTML = `
            <p>Silahkan scan dan screenshot bukti pembayaran anda</p>
            <img src="../images/qris.jpeg" alt="qris" class="qris">
            <hr>
            <h2>Data Penerima</h2>
            <div class="detail-penerima">
                <p><strong>Nama Penerima:</strong> ${dataPenerima.namaPenerima}</p>
                <p><strong>Nomor Telepon:</strong> ${dataPenerima.nomorTelepon}</p>
                <p><strong>Alamat Pengiriman:</strong> ${dataPenerima.alamatPengiriman}</p>
                <p><strong>Metode Pembayaran:</strong> ${dataPenerima.metodePembayaran || "Belum dipilih"}</p>
            </div>
            <button type="submit" class="konfirmasi-wa"><a href="https://wa.me/082216555303">Konfirmasi via Whatsapp</a></button>
        `;
    });
});


// ? Fungsi untuk mengatur height isi keranjang ketika keranjang di klik
document.addEventListener("DOMContentLoaded", () => {
    const keranjangBtn = document.querySelector(".keranjang");
    const isiKeranjangSection = document.querySelector("#isi-keranjang");

    if (keranjangBtn && isiKeranjangSection) {
        keranjangBtn.addEventListener("click", () => {
            const currentHeight = window.getComputedStyle(isiKeranjangSection).height;

            if (currentHeight === "0px") {
                isiKeranjangSection.style.height = "90vh";
                isiKeranjangSection.style.padding = "20px";
            } else {
                isiKeranjangSection.style.height = "0";
                isiKeranjangSection.style.padding = "0";
            }
        });
    } else {
        console.error(
            "Elemen dengan class 'keranjang' atau id 'isi-keranjang' tidak ditemukan."
        );
    }
});
