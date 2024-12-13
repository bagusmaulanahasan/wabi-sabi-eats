// ? Ambil daftar makanan dan qty dari localStorage
const dataKeranjang = JSON.parse(localStorage.getItem("dataKeranjang")) || {};
// ? Tampilkan jumlah total dari localStorage
const qty = document.querySelector(".qty");
if (qty) {
    const totalQty = Object.values(dataKeranjang).reduce(
        (total, item) => total + item.qty,
        0
    );
    qty.innerHTML = totalQty;
}


// ? Menampilkan isi keranjang
const keranjang = document.querySelector(".keranjang");
const isiKeranjang = document.querySelector("#isi-keranjang");

if (keranjang) {
    keranjang.addEventListener("click", () => {
        console.log("Keranjang diklik");

    });
}