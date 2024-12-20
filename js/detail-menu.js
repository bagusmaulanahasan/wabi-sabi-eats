// Import the japaneseFoodList from products.js
import { japaneseFoodList } from "../data/products.js";

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
                        <a href=./menu/${(food.nama).replace(" ", "-").toLocaleLowerCase()}.html>Baca Selengkapnya →</a>
                    </div>
                </div>
                <img src="../images/${food.gambar}" alt="">
            </div>
        `;
        // ? Menambahkan elemen makanan ke dalam container
        list.appendChild(foodItem);
    });
}

document.addEventListener("DOMContentLoaded", renderFoodList);
