// MAHSULOTLAR RO'YXATI - Shu yerdan o'zingiz qo'shasiz
const products = [
    {
        name: "Telegram Premium (1 yillik)",
        desc: "Rasmiy obuna, barcha imkoniyatlar ochiladi.",
        image: "https://picsum.photos/200/200?random=1", // Rasm linki
        oldPrice: "450 000",
        price: "390 000",
        discount: "15%",
    },
    {
        name: "Tayyor Telegram Akkaunt",
        desc: "2020-yil ochilgan, spam yo'q, ishonchli.",
        image: "https://picsum.photos/200/200?random=2",
        oldPrice: "50 000",
        price: "35 000",
        discount: "30%",
    },
    // YANGI MAHSULOTNI SHU YERDAN QO'SHING
];

const container = document.getElementById('market-products');

// Mahsulotlarni ekranga chiqarish
products.forEach(p => {
    container.innerHTML += `
        <div class="card">
            ${p.discount ? `<div class="discount-badge">-${p.discount}</div>` : ''}
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <span class="old-price">${p.oldPrice} so'm</span>
            <span class="current-price">${p.price} so'm</span>
            <button class="buy-btn" onclick="order('${p.name}')">Sotib olish</button>
        </div>
    `;
});

// Telegram lichkaga o'tish funksiyasi
function order(productName) {
    const myTelegram = "@Azizbek_on"; // BU YERGA O'Z USERNAME-INGIZNI YOZING (@ siz)
    const message = encodeURIComponent(`Assalomu alaykum, men marketdan "${productName}" sotib olmoqchiman.`);
    window.location.href = `https://t.me/${myTelegram}?text=${message}`;
}