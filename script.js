// MAHSULOTLAR RO'YXATI - Shu yerdan o'zingiz qo'shasiz
const products = [
    {
        name: "Telegram Premium (1 oylik)",
        desc: "Rasmiy obuna, barcha imkoniyatlar ochiladi.",
        image: "https://xakimovazizbek.github.io/DEXO-MARKET/telegram_premium.jpeg", // Rasm linki
        oldPrice: "50 000",
        price: "45 000",
        discount: "20%",
    },
    {
        name: "Telegram stars (100 ta)",
        desc: "Telegramning ichki valyutasi.",
        image: "https://xakimovazizbek.github.io/DEXO-MARKET/telegram_stars.webp",
        oldPrice: "30 479",
        price: "29 209",
        discount: "4.17",
    },
    {
        name: "tez kunda",
        desc: "Yangi mahsulot.",
        image: "https://picsum.photos/200/200?random=2",
        oldPrice: "",
        price: "",
        discount: "",
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
    const myTelegram = "Azizbek_on"; // BU YERGA O'Z USERNAME-INGIZNI YOZING (@ siz)
    const message = encodeURIComponent(`Assalomu alaykum, men marketdan "${productName}" sotib olmoqchiman.`);
    window.location.href = `https://t.me/${myTelegram}?text=${message}`;
}