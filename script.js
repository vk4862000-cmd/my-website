/* =========================================
   MY STORE - COMPLETE JAVASCRIPT
========================================= */


// =========================================
// PRODUCTS
// =========================================

const productContainer =
    document.getElementById("productContainer");


// Product image collection
const productImages = [

    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
    "https://images.unsplash.com/photo-1503602642458-232111445657?w=600",
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600",
    "https://images.unsplash.com/photo-1585386959984-a41552231693?w=600",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600",
    "https://images.unsplash.com/photo-1600086827875-a63b3587f45c?w=600",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600"

];


// Product name database
const productNames = [

    "Apple iPhone",
    "Samsung Galaxy",
    "OnePlus Smartphone",
    "Google Pixel",
    "Redmi Smartphone",
    "Realme Smartphone",
    "Vivo Smartphone",
    "Oppo Smartphone",
    "Motorola Phone",
    "Nothing Phone",

    "HP Laptop",
    "Dell Laptop",
    "Lenovo Laptop",
    "Acer Laptop",
    "ASUS Laptop",
    "MacBook Air",
    "Gaming Laptop",
    "Business Laptop",
    "Student Laptop",
    "Ultrabook",

    "Smart Watch",
    "Fitness Band",
    "Wireless Earbuds",
    "Bluetooth Headphones",
    "Gaming Headphones",
    "Bluetooth Speaker",
    "Power Bank",
    "Wireless Charger",
    "USB Cable",
    "Fast Charger",

    "Men T-Shirt",
    "Women T-Shirt",
    "Men Shirt",
    "Women Shirt",
    "Jeans",
    "Denim Jacket",
    "Hoodie",
    "Sweatshirt",
    "Kurta",
    "Track Pants",

    "Running Shoes",
    "Sports Shoes",
    "Casual Shoes",
    "Sneakers",
    "Sandals",
    "Formal Shoes",
    "Slippers",
    "Boots",

    "Backpack",
    "Travel Bag",
    "Wallet",
    "Handbag",
    "Sunglasses",
    "Belt",
    "Cap",
    "Watch",
    "Jewellery",
    "Travel Accessories",

    "Face Wash",
    "Face Cream",
    "Moisturizer",
    "Shampoo",
    "Conditioner",
    "Perfume",
    "Lip Balm",
    "Sunscreen",
    "Body Lotion",
    "Beauty Kit",

    "Table Lamp",
    "Chair",
    "Study Table",
    "Bedsheet",
    "Pillow",
    "Curtain",
    "Wall Clock",
    "Kitchen Set",
    "Water Bottle",
    "Storage Box"

];


// Categories
const categories = [

    "electronics",
    "clothing",
    "accessories",
    "beauty",
    "home"

];


// Generate 1000 products
const products = [];

for (let i = 1; i <= 1000; i++) {

    const name =
        productNames[(i - 1) % productNames.length];

    const category =
        categories[(i - 1) % categories.length];

    const image =
        productImages[(i - 1) % productImages.length];

    const price =
        299 + ((i * 137) % 70000);

    const discount =
        5 + (i % 25);

    const oldPrice =
        Math.round(price / (1 - discount / 100));

    const rating =
        (3.5 + ((i % 15) / 10)).toFixed(1);

    products.push({

        id: i,

        name:
            `${name} ${i}`,

        category,

        image,

        price,

        oldPrice,

        discount,

        rating

    });

}


// =========================================
// STATE
// =========================================

let currentProducts =
    [...products];

let cart =
    JSON.parse(
        localStorage.getItem("myStoreCart")
    ) || [];


// =========================================
// DISPLAY PRODUCTS
// =========================================

function displayProducts(list) {

    productContainer.innerHTML = "";

    if (list.length === 0) {

        productContainer.innerHTML = `
            <p class="loading">
                No products found.
            </p>
        `;

        return;
    }


    // Display first 100 at a time
    // This keeps website fast.
    const visibleProducts =
        list.slice(0, 100);


    visibleProducts.forEach(product => {

        const card =
            document.createElement("div");

        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image">

                <span class="discount">
                    ${product.discount}% OFF
                </span>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <div class="rating">
                    ⭐ ${product.rating}
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
                    data-id="${product.id}"
                >
                    🛒 Add to Cart
                </button>

            </div>

        `;


        productContainer.appendChild(card);

    });


    // Add cart events
    document
        .querySelectorAll(".add-cart-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );

                    addToCart(id);

                }
            );

        });

}


// =========================================
// INITIAL PRODUCTS
// =========================================

displayProducts(products);


// =========================================
// SEARCH
// =========================================

const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener(
    "input",
    function () {

        const value =
            this.value
                .toLowerCase()
                .trim();


        if (!value) {

            currentProducts =
                [...products];

        } else {

            currentProducts =
                products.filter(product =>

                    product.name
                        .toLowerCase()
                        .includes(value)

                    ||

                    product.category
                        .toLowerCase()
                        .includes(value)

                );

        }


        displayProducts(currentProducts);

    }
);


// =========================================
// CATEGORY FILTER
// =========================================

document
    .querySelectorAll(".navbar button")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const category =
                    this.dataset.category;


                if (category === "all") {

                    currentProducts =
                        [...products];

                } else {

                    currentProducts =
                        products.filter(
                            product =>
                                product.category === category
                        );

                }


                searchInput.value = "";

                displayProducts(currentProducts);

                document
                    .getElementById("productsSection")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


// =========================================
// SHOP NOW
// =========================================

document
    .getElementById("shopNow")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById("productsSection")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


// =========================================
// CART
// =========================================

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
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

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    alert(
        `${product.name} added to cart!`
    );

}


function saveCart() {

    localStorage.setItem(
        "myStoreCart",
        JSON.stringify(cart)
    );

}


function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p style="padding:20px 0">
                Your cart is empty.
            </p>
        `;

        cartCount.textContent = "0";

        cartTotal.textContent = "0";

        return;
    }


    let total = 0;

    let count = 0;


    cart.forEach(item => {

        total +=
            item.price *
            item.quantity;

        count +=
            item.quantity;


        const div =
            document.createElement("div");

        div.className =
            "cart-item";


        div.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <div class="cart-price">
                    ₹${item.price.toLocaleString("en-IN")}
                </div>

                <div class="quantity">

                    <button
                        data-action="minus"
                        data-id="${item.id}"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        data-action="plus"
                        data-id="${item.id}"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-btn"
                data-action="remove"
                data-id="${item.id}"
            >
                ✕
            </button>

        `;


        cartItems.appendChild(div);

    });


    cartCount.textContent =
        count;

    cartTotal.textContent =
        total.toLocaleString("en-IN");


    // Quantity buttons
    cartItems
        .querySelectorAll("button")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );

                    const action =
                        this.dataset.action;


                    const item =
                        cart.find(
                            x => x.id === id
                        );


                    if (!item) return;


                    if (action === "plus") {

                        item.quantity++;

                    }


                    if (action === "minus") {

                        item.quantity--;

                        if (item.quantity <= 0) {

                            cart =
                                cart.filter(
                                    x => x.id !== id
                                );

                        }

                    }


                    if (action === "remove") {

                        cart =
                            cart.filter(
                                x => x.id !== id
                            );

                    }


                    saveCart();

                    updateCart();

                }
            );

        });

}


updateCart();


// =========================================
// OPEN CART
// =========================================

document
    .getElementById("cartButton")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById("cartSidebar")
                .classList.add("active");

        }
    );


// CLOSE CART

document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById("cartSidebar")
                .classList.remove("active");

        }
    );


// =========================================
// CHECKOUT
// =========================================

const checkoutModal =
    document.getElementById(
        "checkoutModal"
    );


document
    .getElementById("checkoutButton")
    .addEventListener(
        "click",
        function () {

            if (cart.length === 0) {

                alert(
                    "Your cart is empty."
                );

                return;
            }


            checkoutModal
                .classList.add("active");

        }
    );


document
    .getElementById("closeCheckout")
    .addEventListener(
        "click",
        function () {

            checkoutModal
                .classList.remove("active");

        }
    );


// PLACE ORDER

document
    .getElementById("placeOrder")
    .addEventListener(
        "click",
        function () {

            const name =
                document
                    .getElementById(
                        "customerName"
                    )
                    .value
                    .trim();


            const phone =
                document
                    .getElementById(
                        "customerPhone"
                    )
                    .value
                    .trim();


            const address =
                document
                    .getElementById(
                        "customerAddress"
                    )
                    .value
                    .trim();


            if (
                !name ||
                !phone ||
                !address
            ) {

                alert(
                    "Please fill all details."
                );

                return;
            }


            alert(
                "Order placed successfully! 🎉"
            );


            cart = [];

            saveCart();

            updateCart();


            checkoutModal
                .classList.remove("active");


            document
                .getElementById(
                    "cartSidebar"
                )
                .classList.remove("active");


            document
                .getElementById(
                    "customerName"
                )
                .value = "";


            document
                .getElementById(
                    "customerPhone"
                )
                .value = "";


            document
                .getElementById(
                    "customerAddress"
                )
                .value = "";

        }
    );


// =========================================
// AUTH MODAL
// =========================================

const authModal =
    document.getElementById(
        "authModal"
    );


document
    .getElementById("loginButton")
    .addEventListener(
        "click",
        function () {

            authModal
                .classList.add("active");

        }
    );


document
    .getElementById("closeAuth")
    .addEventListener(
        "click",
        function () {

            authModal
                .classList.remove("active");

        }
    );


// Click outside modal

document
    .querySelectorAll(".modal")
    .forEach(modal => {

        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "active"
                    );

                }

            }
        );

    });


// =========================================
// FIREBASE AUTH
// =========================================

import {

    createUserWithEmailAndPassword,

    signInWithEmailAndPassword,

    GoogleAuthProvider,

    signInWithPopup,

    signOut,

    onAuthStateChanged

} from
"https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";


// =========================================
// SIGN UP
// =========================================

document
    .getElementById("signupButton")
    .addEventListener(
        "click",
        async function () {

            const email =
                document
                    .getElementById(
                        "signupEmail"
                    )
                    .value
                    .trim();


            const password =
                document
                    .getElementById(
                        "signupPassword"
                    )
                    .value;


            if (!email || !password) {

                alert(
                    "Email aur password enter karo."
                );

                return;
            }


            try {

                await createUserWithEmailAndPassword(
                    window.firebaseAuth,
                    email,
                    password
                );


                alert(
                    "Account successfully created! 🎉"
                );


            } catch (error) {

                alert(
                    error.message
                );

            }

        }
    );


// =========================================
// LOGIN
// =========================================

document
    .getElementById("loginButtonModal")
    .addEventListener(
        "click",
        async function () {

            const email =
                document
                    .getElementById(
                        "loginEmail"
                    )
                    .value
                    .trim();


            const password =
                document
                    .getElementById(
                        "loginPassword"
                    )
                    .value;


            if (!email || !password) {

                alert(
                    "Email aur password enter karo."
                );

                return;
            }


            try {

                await signInWithEmailAndPassword(
                    window.firebaseAuth,
                    email,
                    password
                );


                alert(
                    "Login successful! 🎉"
                );


            } catch (error) {

                alert(
                    error.message
                );

            }

        }
    );


// =========================================
// GOOGLE LOGIN
// =========================================

document
    .getElementById("googleButton")
    .addEventListener(
        "click",
        async function () {

            try {

                const provider =
                    new GoogleAuthProvider();


                await signInWithPopup(
                    window.firebaseAuth,
                    provider
                );


                alert(
                    "Google login successful! 🎉"
                );


            } catch (error) {

                alert(
                    error.message
                );

            }

        }
    );


// =========================================
// LOGOUT
// =========================================

document
    .getElementById("logoutButton")
    .addEventListener(
        "click",
        async function () {

            try {

                await signOut(
                    window.firebaseAuth
                );


                alert(
                    "Logout successful!"
                );


            } catch (error) {

                alert(
                    error.message
                );

            }

        }
    );


// =========================================
// AUTH STATE
// =========================================

onAuthStateChanged(
    window.firebaseAuth,
    function (user) {

        const status =
            document.getElementById(
                "userStatus"
            );


        if (user) {

            status.textContent =
                `Logged in as ${user.email}`;

        } else {

            status.textContent =
                "You are not logged in.";

        }

    }
);
