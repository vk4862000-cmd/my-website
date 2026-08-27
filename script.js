* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: #f5f5f5;
    color: #172033;
}

button,
input,
textarea {
    font-family: inherit;
}

button {
    cursor: pointer;
}


/* =========================
   HEADER
========================= */

.header {
    background: #111827;
    color: white;

    min-height: 165px;

    display: flex;
    align-items: center;

    gap: 15px;

    padding: 20px 4%;

    position: sticky;
    top: 0;

    z-index: 1000;

    flex-wrap: wrap;
}

.logo {
    font-size: 30px;
    font-weight: bold;

    width: 100%;

    text-align: center;
}

.search-box {
    flex: 1;

    order: 3;
}

.search-box input {
    width: 100%;

    padding: 16px 20px;

    border: none;

    border-radius: 9px;

    outline: none;

    font-size: 18px;
}

.cart-button,
.login-button {
    border: none;

    padding: 14px 25px;

    border-radius: 8px;

    color: white;

    font-size: 16px;

    font-weight: bold;
}

.cart-button {
    background: #ff9800;
}

.cart-button:hover {
    background: #f57c00;
}

.login-button {
    background: #2563eb;
}

.login-button:hover {
    background: #1d4ed8;
}

#cartCount {
    background: red;

    padding: 4px 8px;

    border-radius: 50%;

    margin-left: 5px;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    background: white;

    display: flex;

    justify-content: center;

    align-items: center;

    gap: 35px;

    padding: 18px;

    box-shadow: 0 2px 8px #ddd;

    position: sticky;

    top: 165px;

    z-index: 900;

    overflow-x: auto;
}

.navbar button {
    background: transparent;

    border: none;

    font-size: 17px;

    font-weight: bold;

    padding: 5px 10px;

    white-space: nowrap;
}

.navbar button:hover {
    color: #ff6b00;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 400px;

    display: flex;

    justify-content: center;

    align-items: center;

    text-align: center;

    color: white;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #7c3aed
        );

    padding: 50px 20px;
}

.hero-small {
    font-size: 20px;

    margin-bottom: 8px;
}

.hero h1 {
    font-size: 50px;

    line-height: 1.1;

    margin-bottom: 22px;
}

.hero-text {
    font-size: 20px;

    margin-bottom: 35px;
}

.hero button {
    background: white;

    color: #2563eb;

    border: none;

    padding: 17px 45px;

    border-radius: 9px;

    font-size: 20px;

    font-weight: bold;
}

.hero button:hover {
    transform: translateY(-3px);

    box-shadow: 0 8px 20px rgba(0,0,0,.2);
}


/* =========================
   PRODUCTS
========================= */

.products-section {
    padding: 55px 4%;

    min-height: 500px;
}

.section-title {
    text-align: center;

    margin-bottom: 40px;
}

.section-title p {
    font-size: 15px;

    color: #777;

    margin-bottom: 5px;
}

.section-title h2 {
    font-size: 42px;

    color: #111827;
}

.product-container {
    display: grid;

    grid-template-columns:
        repeat(4, minmax(0, 1fr));

    gap: 22px;

    max-width: 1400px;

    margin: auto;
}


/* =========================
   PRODUCT CARD
========================= */

.product-card {
    background: white;

    border-radius: 12px;

    overflow: hidden;

    box-shadow:
        0 3px 12px rgba(0,0,0,.12);

    transition: .25s;

    position: relative;
}

.product-card:hover {
    transform: translateY(-5px);

    box-shadow:
        0 10px 25px rgba(0,0,0,.18);
}

.product-image {
    height: 230px;

    background: #f7f7f7;

    display: flex;

    align-items: center;

    justify-content: center;

    position: relative;

    overflow: hidden;
}

.product-image img {
    width: 100%;

    height: 100%;

    object-fit: contain;

    padding: 15px;

    transition: .3s;
}

.product-card:hover
.product-image img {
    transform: scale(1.05);
}

.discount {
    position: absolute;

    top: 12px;

    left: 12px;

    background: #008c45;

    color: white;

    padding: 6px 10px;

    border-radius: 5px;

    font-size: 12px;

    font-weight: bold;

    z-index: 2;
}

.product-info {
    padding: 18px;
}

.product-category {
    color: #777;

    font-size: 13px;

    font-weight: bold;

    text-transform: uppercase;
}

.product-info h3 {
    font-size: 18px;

    margin: 8px 0;

    min-height: 43px;
}

.rating {
    color: #008c45;

    font-weight: bold;

    margin-bottom: 10px;
}

.price {
    display: flex;

    align-items: center;

    gap: 10px;

    margin-bottom: 15px;
}

.price strong {
    color: #e65100;

    font-size: 22px;
}

.price del {
    color: #777;

    font-size: 14px;
}

.add-cart-btn {
    width: 100%;

    border: none;

    background: #ff9f00;

    color: white;

    padding: 13px;

    border-radius: 6px;

    font-weight: bold;

    font-size: 15px;
}

.add-cart-btn:hover {
    background: #fb8c00;
}


/* =========================
   LOADING
========================= */

.loading {
    grid-column: 1 / -1;

    text-align: center;

    font-size: 20px;

    padding: 50px;
}


/* =========================
   CART
========================= */

.cart-sidebar {
    position: fixed;

    top: 0;

    right: -430px;

    width: 420px;

    max-width: 100%;

    height: 100vh;

    background: white;

    z-index: 5000;

    box-shadow:
        -5px 0 20px rgba(0,0,0,.2);

    transition: .3s;

    padding: 20px;

    overflow-y: auto;
}

.cart-sidebar.active {
    right: 0;
}

.cart-header {
    display: flex;

    justify-content: space-between;

    align-items: center;

    padding-bottom: 15px;

    border-bottom: 1px solid #ddd;
}

.cart-header button {
    border: none;

    background: #eee;

    border-radius: 50%;

    width: 35px;

    height: 35px;

    font-size: 18px;
}

.cart-item {
    display: flex;

    align-items: center;

    gap: 12px;

    padding: 15px 0;

    border-bottom: 1px solid #ddd;
}

.cart-item img {
    width: 65px;

    height: 65px;

    object-fit: contain;

    background: #f5f5f5;

    border-radius: 6px;
}

.cart-item-info {
    flex: 1;
}

.cart-item-info h4 {
    font-size: 14px;

    margin-bottom: 5px;
}

.cart-price {
    color: #e65100;

    font-weight: bold;
}

.quantity {
    display: flex;

    align-items: center;

    gap: 5px;

    margin-top: 5px;
}

.quantity button {
    border: none;

    background: #ddd;

    width: 26px;

    height: 26px;

    border-radius: 4px;

    font-weight: bold;
}

.remove-btn {
    border: none;

    background: #fee2e2;

    color: #dc2626;

    padding: 6px;

    border-radius: 5px;
}

.cart-total {
    position: sticky;

    bottom: 0;

    background: white;

    padding-top: 20px;

    margin-top: 15px;

    border-top: 1px solid #ddd;
}

.checkout-btn {
    width: 100%;

    padding: 14px;

    margin-top: 15px;

    border: none;

    border-radius: 7px;

    background: #16a34a;

    color: white;

    font-size: 16px;

    font-weight: bold;
}

.checkout-btn:hover {
    background: #15803d;
}


/* =========================
   MODALS
========================= */

.modal {
    display: none;

    position: fixed;

    inset: 0;

    background: rgba(0,0,0,.65);

    z-index: 6000;

    align-items: center;

    justify-content: center;

    padding: 20px;
}

.modal.active {
    display: flex;
}

.modal-box {
    width: 450px;

    max-width: 95%;

    max-height: 90vh;

    overflow-y: auto;

    background: white;

    padding: 30px;

    border-radius: 12px;

    position: relative;

    box-shadow:
        0 20px 60px rgba(0,0,0,.3);
}

.modal-box h2 {
    font-size: 28px;

    margin-bottom: 5px;
}

.modal-box h3 {
    margin-top: 18px;

    margin-bottom: 10px;
}

.modal-subtitle {
    color: #777;

    margin-bottom: 20px;
}

.close-modal {
    position: absolute;

    right: 15px;

    top: 12px;

    width: 35px;

    height: 35px;

    border: none;

    border-radius: 50%;

    background: #eee;

    font-size: 18px;
}

.modal-box input,
.modal-box textarea {
    width: 100%;

    padding: 13px;

    margin-bottom: 12px;

    border: 1px solid #ccc;

    border-radius: 6px;

    outline: none;

    font-size: 15px;
}

.modal-box textarea {
    height: 100px;

    resize: none;
}

.modal-box input:focus,
.modal-box textarea:focus {
    border-color: #2563eb;
}

.order-btn,
.auth-btn {
    width: 100%;

    padding: 13px;

    border: none;

    border-radius: 6px;

    background: #2563eb;

    color: white;

    font-weight: bold;

    font-size: 15px;
}

.order-btn {
    background: #16a34a;
}

.order-btn:hover {
    background: #15803d;
}

.divider {
    text-align: center;

    color: #888;

    margin: 20px 0;
}

.google-btn {
    width: 100%;

    padding: 13px;

    margin-top: 15px;

    border: 1px solid #ccc;

    border-radius: 6px;

    background: white;

    font-weight: bold;
}

.google-btn:hover {
    background: #f5f5f5;
}

.logout-btn {
    width: 100%;

    padding: 12px;

    margin-top: 10px;

    border: none;

    border-radius: 6px;

    background: #dc2626;

    color: white;

    font-weight: bold;
}

.user-status {
    text-align: center;

    color: #008c45;

    margin-top: 15px;

    font-size: 14px;
}


/* =========================
   FOOTER
========================= */

footer {
    background: #111827;

    color: white;

    text-align: center;

    padding: 35px;

    margin-top: 30px;
}

.footer-logo {
    font-size: 25px;

    font-weight: bold;

    margin-bottom: 5px;
}

footer p {
    margin-top: 5px;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1100px) {

    .product-container {
        grid-template-columns:
            repeat(3, 1fr);
    }

}


@media (max-width: 750px) {

    .header {
        min-height: auto;

        padding: 15px;
    }

    .logo {
        font-size: 25px;
    }

    .search-box {
        width: 100%;
    }

    .navbar {
        top: 0;

        gap: 15px;

        justify-content: flex-start;
    }

    .hero h1 {
        font-size: 38px;
    }

    .product-container {
        grid-template-columns:
            repeat(2, 1fr);

        gap: 12px;
    }

}


@media (max-width: 480px) {

    .cart-button,
    .login-button {
        padding: 11px 14px;

        font-size: 13px;
    }

    .hero {
        min-height: 330px;
    }

    .hero h1 {
        font-size: 31px;
    }

    .hero-text {
        font-size: 16px;
    }

    .section-title h2 {
        font-size: 32px;
    }

    .product-container {
        grid-template-columns: 1fr 1fr;
    }

    .product-image {
        height: 160px;
    }

    .product-info {
        padding: 12px;
    }

    .product-info h3 {
        font-size: 15px;
    }

    .price strong {
        font-size: 17px;
    }

    .price del {
        font-size: 11px;
    }

    .add-cart-btn {
        padding: 10px 5px;

        font-size: 13px;
    }

}
