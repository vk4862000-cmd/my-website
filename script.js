/* =========================================
   FIREBASE
========================================= */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";


const firebaseConfig = {

    apiKey:
        "AIzaSyBJLDffmy4rl_Umb7fdlqMVfCzQnbORdVk",

    authDomain:
        "mystore-2f465.firebaseapp.com",

    projectId:
        "mystore-2f465",

    storageBucket:
        "mystore-2f465.firebasestorage.app",

    messagingSenderId:
        "255687755598",

    appId:
        "1:255687755598:web:3ec262c976672082bc801f",

    measurementId:
        "G-4HZN3YFPLY"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


/* =========================================
   VARIABLES
========================================= */

let products = [];

let filteredProducts = [];

let cart = [];

let currentCategory = "all";


const productContainer =
    document.getElementById("productContainer");

const searchInput =
    document.getElementById("searchInput");

const cartCount =
    document.getElementById("cartCount");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const productResult =
    document.getElementById("productResult");


/* =========================================
   LOAD PRODUCTS
========================================= */

async function loadProducts() {

    productResult.textContent =
        "Loading products...";

    try {

        const response =
            await fetch(
                "https://dummyjson.com/products?limit=0"
            );

        const data =
            await response.json();

        const originalProducts =
            data.products || [];


        if (!originalProducts.length) {
            throw new Error("Products not found");
        }


        /*
            DummyJSON gives us real product images.

            We create 1000 products from
            the available catalog.
        */

        products = [];


        for (let i = 0; i < 1000; i++) {

            const original =
                originalProducts[
                    i % originalProducts.length
                ];


            const number =
                i + 1;


            const basePrice =
                Math.round(
                    original.price * 84
                );


            const discount =
                5 + (i % 26);


            const oldPrice =
                Math.round(
                    basePrice /
                    (1 - discount / 100)
                );


            products.push({

                id: number,

                title:
                    `${original.title} ${number}`,

                category:
                    convertCategory(
                        original.category
                    ),

                image:
                    original.thumbnail ||
                    original.images?.[0],

                price:
                    basePrice,

                oldPrice:
                    oldPrice,

                discount:
                    discount,

                rating:
                    (
                        3.5 +
                        (i % 15) / 10
                    ).toFixed(1)

            });

        }


        filteredProducts =
            [...products];


        renderProducts();

    }

    catch (error) {

        console.error(error);

        productResult.textContent =
            "Products load nahi ho paaye.";

        productContainer.innerHTML = `

            <div class="no-products">

                <h3>
                    Products load nahi ho rahe.
                </h3>

                <p>
                    Internet connection check karke
                    page refresh karo.
                </p>

            </div>

        `;

    }

}


/* =========================================
   CATEGORY CONVERTER
========================================= */

function convertCategory(category) {

    category =
        String(category).toLowerCase();


    if (
        category.includes("phone") ||
        category.includes("laptop") ||
        category.includes("computer") ||
        category.includes("tablet") ||
        category.includes("mobile")
    ) {

        return "electronics";

    }


    if (
        category.includes("shirt") ||
        category.includes("dress") ||
        category.includes("shoe") ||
        category.includes("clothing")
    ) {

        return "clothing";

    }


    if (
        category.includes("beauty") ||
        category.includes("skin") ||
        category.includes("fragrance")
    ) {

        return "beauty";

    }


    if (
        category.includes("home") ||
        category.includes("furniture")
    ) {

        return "home";

    }


    return "accessories";
}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts() {

    productContainer.innerHTML = "";


    productResult.textContent =
        `${filteredProducts.length} products found`;


    if (!filteredProducts.length) {

        productContainer.innerHTML = `

            <div class="no-products">

                <h3>
                    No products found
                </h3>

                <p>
                    Try another search.
                </p>

            </div>

        `;

        return;
    }


    /*
        Initially only 100 products are rendered
        for better performance.
    */

    const productsToShow =
        filteredProducts.slice(0, 100);


    productsToShow.forEach(product => {

        const card =
            document.createElement("article");


        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image">

                <span class="discount">
                    ${product.discount}% OFF
                </span>

                <img
                    src="${product.image}"
                    alt="${escapeHTML(product.title)}"
                    loading="lazy"
                    onerror="this.src='https://dummyjson.com/image/500x500?text=Product'"
                >

            </div>


            <div class="product-info">

                <small class="product-category">
                    ${product.category}
                </small>

                <h3>
                    ${escapeHTML(product.title)}
                </h3>

                <div class="rating">

                    <span>★</span>
                    ${product.rating}

                </div>


                <div class="price">

                    <strong>
                        ₹${product.price.toLocaleString("en-IN")}
                    </strong>

                    <del>
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </del>

                </div>


                <button
                    class="add-cart-btn"
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>

        `;


        productContainer.appendChild(card);

    });


    if (filteredProducts.length > 100) {

        const info =
            document.createElement("p");


        info.style.textAlign = "center";

        info.style.gridColumn = "1 / -1";

        info.style.padding = "25px";

        info.style.color = "#777";


        info.textContent =
            `Showing first 100 of ${filteredProducts.length} products`;


        productContainer.appendChild(info);

    }

}


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    searchProducts
);


function searchProducts() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    filteredProducts =
        products.filter(product => {

            const matchesSearch =
                product.title
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =
                currentCategory === "all" ||
                product.category === currentCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    renderProducts();

}


window.searchProducts =
    searchProducts;


/* =========================================
   CATEGORY FILTER
========================================= */

function filterProducts(category) {

    currentCategory =
        category;


    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    filteredProducts =
        products.filter(product => {

            const categoryMatch =
                category === "all" ||
                product.category === category;


            const searchMatch =
                product.title
                    .toLowerCase()
                    .includes(search);


            return (
                categoryMatch &&
                searchMatch
            );

        });


    renderProducts();


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


window.filterProducts =
    filterProducts;


/* =========================================
   SHOP NOW
========================================= */

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


window.scrollToProducts =
    scrollToProducts;


/* =========================================
   CART
========================================= */

function addToCart(id) {

    const product =
        products.find(
            p => p.id === id
        );


    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();

}


window.addToCart =
    addToCart;


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    cartCount.textContent =
        count;


    cartItems.innerHTML = "";


    if (!cart.length) {

        cartItems.innerHTML = `

            <p class="empty-cart">
                Your cart is empty.
            </p>

        `;

        cartTotal.textContent =
            "0";

        return;
    }


    let total = 0;


    cart.forEach(item => {

        total +=
            item.price *
            item.quantity;


        const div =
            document.createElement("div");


        div.className =
            "cart-item";


        div.innerHTML = `

            <img
                src="${item.image}"
                alt=""
            >


            <div>

                <h4>
                    ${escapeHTML(item.title)}
                </h4>

                <div class="cart-price">
                    ₹${item.price.toLocaleString("en-IN")}
                </div>


                <div class="quantity">

                    <button
                        onclick="changeQuantity(${item.id}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${item.id}, 1)"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                onclick="removeFromCart(${item.id})"
                style="
                    border:none;
                    background:none;
                    color:red;
                    font-size:18px;
                "
            >
                🗑️
            </button>

        `;


        cartItems.appendChild(div);

    });


    cartTotal.textContent =
        total.toLocaleString("en-IN");

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(id, amount) {

    const item =
        cart.find(
            product => product.id === id
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.id !== id
            );

    }


    updateCart();

}


window.changeQuantity =
    changeQuantity;


/* =========================================
   REMOVE
========================================= */

function removeFromCart(id) {

    cart =
        cart.filter(
            product => product.id !== id
        );


    updateCart();

}


window.removeFromCart =
    removeFromCart;


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    document
        .getElementById("cartSidebar")
        .classList.add("active");

}


window.openCart =
    openCart;


/* =========================================
   CLOSE CART
========================================= */

function closeCart() {

    document
        .getElementById("cartSidebar")
        .classList.remove("active");

}


window.closeCart =
    closeCart;


/* =========================================
   CHECKOUT
========================================= */

function openCheckout() {

    if (!cart.length) {

        alert(
            "Pehle cart mein product add karo."
        );

        return;

    }


    document
        .getElementById("checkoutModal")
        .classList.add("active");

}


window.openCheckout =
    openCheckout;


function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("active");

}


window.closeCheckout =
    closeCheckout;


/* =========================================
   PLACE ORDER
========================================= */

function placeOrder() {

    const name =
        document
            .getElementById("customerName")
            .value
            .trim();


    const phone =
        document
            .getElementById("customerPhone")
            .value
            .trim();


    const address =
        document
            .getElementById("customerAddress")
            .value
            .trim();


    if (!name || !phone || !address) {

        alert(
            "Please complete all delivery details."
        );

        return;

    }


    alert(
        `Thank you ${name}! Your order has been placed successfully.`
    );


    cart = [];


    updateCart();

    closeCheckout();

    closeCart();


    document
        .getElementById("customerName")
        .value = "";

    document
        .getElementById("customerPhone")
        .value = "";

    document
        .getElementById("customerAddress")
        .value = "";

}


window.placeOrder =
    placeOrder;


/* =========================================
   AUTH MODAL
========================================= */

function openAuth() {

    document
        .getElementById("authModal")
        .classList.add("active");

}


window.openAuth =
    openAuth;


function closeAuth() {

    document
        .getElementById("authModal")
        .classList.remove("active");

}


window.closeAuth =
    closeAuth;


/* =========================================
   SIGN UP
========================================= */

async function signup() {

    const email =
        document
            .getElementById("signupEmail")
            .value
            .trim();


    const password =
        document
            .getElementById("signupPassword")
            .value;


    if (!email || !password) {

        alert(
            "Email aur password enter karo."
        );

        return;

    }


    try {

        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );


        alert(
            "Account successfully created!"
        );


        closeAuth();

    }

    catch (error) {

        alert(
            error.message
        );

    }

}


window.signup =
    signup;


/* =========================================
   LOGIN
========================================= */

async function login() {

    const email =
        document
            .getElementById("loginEmail")
            .value
            .trim();


    const password =
        document
            .getElementById("loginPassword")
            .value;


    if (!email || !password) {

        alert(
            "Email aur password enter karo."
        );

        return;

    }


    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );


        alert(
            "Login successful!"
        );


        closeAuth();

    }

    catch (error) {

        alert(
            error.message
        );

    }

}


window.login =
    login;


/* =========================================
   GOOGLE LOGIN
========================================= */

async function googleLogin() {

    try {

        const provider =
            new GoogleAuthProvider();


        await signInWithPopup(
            auth,
            provider
        );


        alert(
            "Google login successful!"
        );


        closeAuth();

    }

    catch (error) {

        alert(
            error.message
        );

    }

}


window.googleLogin =
    googleLogin;


/* =========================================
   LOGOUT
========================================= */

async function logout() {

    try {

        await signOut(auth);


        alert(
            "Logout successful!"
        );

    }

    catch (error) {

        alert(
            error.message
        );

    }

}


window.logout =
    logout;


/* =========================================
   AUTH STATE
========================================= */

onAuthStateChanged(
    auth,
    user => {

        const loginButton =
            document.querySelector(
                ".login-button"
            );


        if (!loginButton) return;


        if (user) {

            loginButton.textContent =
                "👤 " +
                (
                    user.displayName ||
                    user.email?.split("@")[0] ||
                    "Account"
                );

        } else {

            loginButton.textContent =
                "👤 Sign In";

        }

    }
);


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================
   START
========================================= */

loadProducts();

updateCart();
