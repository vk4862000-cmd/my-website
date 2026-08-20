/* =====================================================
   MY STORE - COMPLETE SCRIPT
   1000 PRODUCTS + SEARCH + FILTER + CART + CHECKOUT
   + FIREBASE LOGIN / SIGNUP / GOOGLE LOGIN
===================================================== */


/* =====================================================
   PRODUCTS
===================================================== */

const products = [];

const productData = {

    electronics: [
        ["Smartphone", 12999],
        ["Android Phone", 9999],
        ["5G Smartphone", 15999],
        ["Bluetooth Speaker", 1499],
        ["Wireless Earbuds", 899],
        ["Smart Watch", 1999],
        ["Gaming Headphones", 2499],
        ["Power Bank", 799],
        ["USB Cable", 299],
        ["Fast Charger", 699],
        ["Laptop", 45999],
        ["Gaming Laptop", 64999],
        ["Tablet", 12999],
        ["Keyboard", 799],
        ["Gaming Mouse", 599],
        ["Monitor", 8999],
        ["Webcam", 1299],
        ["Printer", 6999],
        ["Router", 1599],
        ["External Hard Drive", 4999],
        ["SSD", 3999],
        ["Pen Drive", 499],
        ["Memory Card", 699],
        ["Smart TV", 24999],
        ["LED TV", 18999],
        ["Projector", 6999],
        ["Home Theatre", 8999],
        ["Mic", 1499],
        ["Tripod", 899],
        ["Ring Light", 699]
    ],

    clothing: [
        ["Men T-Shirt", 499],
        ["Premium T-Shirt", 799],
        ["Polo T-Shirt", 699],
        ["Oversized T-Shirt", 599],
        ["Men Shirt", 999],
        ["Formal Shirt", 1199],
        ["Casual Shirt", 899],
        ["Jeans", 1299],
        ["Slim Fit Jeans", 1399],
        ["Regular Jeans", 1199],
        ["Cargo Pants", 999],
        ["Track Pants", 699],
        ["Hoodie", 1299],
        ["Sweatshirt", 999],
        ["Jacket", 1799],
        ["Winter Jacket", 2499],
        ["Kurta", 899],
        ["Men Shorts", 499],
        ["Women T-Shirt", 599],
        ["Women Top", 699],
        ["Women Jeans", 1299],
        ["Women Dress", 1499],
        ["Women Kurti", 999],
        ["Saree", 1299],
        ["Leggings", 499],
        ["Women Jacket", 1799],
        ["Women Hoodie", 1199],
        ["Sports T-Shirt", 699],
        ["Sports Shorts", 599],
        ["Kids T-Shirt", 399]
    ],

    accessories: [
        ["Wallet", 399],
        ["Leather Wallet", 699],
        ["Belt", 499],
        ["Sunglasses", 599],
        ["Premium Sunglasses", 999],
        ["Backpack", 999],
        ["School Bag", 799],
        ["Laptop Bag", 1199],
        ["Travel Bag", 1499],
        ["Handbag", 1299],
        ["Watch", 999],
        ["Premium Watch", 1999],
        ["Cap", 299],
        ["Sports Cap", 399],
        ["Scarf", 299],
        ["Gloves", 399],
        ["Keychain", 149],
        ["Phone Cover", 199],
        ["Mobile Stand", 299],
        ["Car Mobile Holder", 399],
        ["Bottle", 499],
        ["Water Bottle", 599],
        ["Travel Bottle", 699],
        ["Gym Bottle", 499],
        ["Lunch Box", 399],
        ["Travel Pillow", 699],
        ["Umbrella", 499],
        ["Travel Organizer", 799],
        ["Makeup Bag", 499],
        ["Cable Organizer", 299]
    ]
};


/* =====================================================
   GENERATE 1000 PRODUCTS
===================================================== */

let productId = 1;

const categoryNames = Object.keys(productData);

categoryNames.forEach(category => {

    const items = productData[category];

    for (let i = 0; i < 334; i++) {

        const item = items[i % items.length];

        const product = {

            id: productId,

            name: item[0] + " " + (Math.floor(i / items.length) + 1),

            price: item[1] + ((i % 5) * 50),

            category: category,

            rating: (3.5 + ((i % 15) / 10)).toFixed(1),

            discount: 5 + (i % 60),

            image:
                getProductImage(category, i)

        };

        products.push(product);

        productId++;

        if (products.length >= 1000) {
            break;
        }
    }

});


/* =====================================================
   PRODUCT IMAGE
===================================================== */

function getProductImage(category, index) {

    const images = {

        electronics: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500"
        ],

        clothing: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500",
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500",
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500"
        ],

        accessories: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500"
        ]

    };

    return images[category][index % images[category].length];
}


/* =====================================================
   CART
===================================================== */

let cart = [];


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(list = products) {

    const container =
        document.getElementById("productContainer");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <div style="
                width:100%;
                text-align:center;
                padding:50px;
            ">
                <h2>Product nahi mila 😔</h2>
                <p>Dusra product search karo.</p>
            </div>
        `;

        return;
    }


    list.forEach(product => {

        const oldPrice =
            Math.round(
                product.price /
                (1 - product.discount / 100)
            );


        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image-box">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="discount">
                    ${product.discount}% OFF
                </span>

            </div>


            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

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
                        ₹${oldPrice.toLocaleString("en-IN")}
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


        container.appendChild(card);

    });

}


/* =====================================================
   SEARCH
===================================================== */

window.searchProducts = function () {

    const input =
        document.getElementById("searchInput");

    const search =
        input.value.toLowerCase().trim();


    if (!search) {

        displayProducts(products);

        return;
    }


    const result = products.filter(product =>

        product.name
            .toLowerCase()
            .includes(search)

        ||

        product.category
            .toLowerCase()
            .includes(search)

    );


    displayProducts(result);

};


/* =====================================================
   CATEGORY FILTER
===================================================== */

window.filterProducts = function (category) {

    if (category === "all") {

        displayProducts(products);

        return;
    }


    const result =
        products.filter(
            product =>
                product.category === category
        );


    displayProducts(result);

};


/* =====================================================
   ADD TO CART
===================================================== */

window.addToCart = function (id) {

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

            ...product,

            quantity: 1

        });

    }


    updateCart();

    alert(`${product.name} cart me add ho gaya 🛒`);

};


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    if (!cartItems) return;


    let total = 0;

    let count = 0;


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

    }


    cart.forEach(item => {

        total +=
            item.price * item.quantity;

        count +=
            item.quantity;


        const div =
            document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `

            <img
                src="${item.image}"
                width="60"
                height="60"
                style="
                    object-fit:cover;
                    border-radius:8px;
                "
            >

            <div style="flex:1">

                <strong>
                    ${item.name}
                </strong>

                <p>
                    ₹${item.price.toLocaleString("en-IN")}
                </p>

                <div>

                    <button
                        onclick="decreaseQuantity(${item.id})"
                    >
                        −
                    </button>

                    <span style="margin:0 10px">
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity(${item.id})"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                onclick="removeFromCart(${item.id})"
            >
                🗑️
            </button>

        `;


        cartItems.appendChild(div);

    });


    if (cartCount)
        cartCount.textContent = count;


    if (cartTotal)
        cartTotal.textContent =
            total.toLocaleString("en-IN");

}


/* =====================================================
   INCREASE QUANTITY
===================================================== */

window.increaseQuantity = function (id) {

    const item =
        cart.find(
            product => product.id === id
        );


    if (item) {

        item.quantity++;

        updateCart();

    }

};


/* =====================================================
   DECREASE QUANTITY
===================================================== */

window.decreaseQuantity = function (id) {

    const item =
        cart.find(
            product => product.id === id
        );


    if (!item) return;


    item.quantity--;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.id !== id
            );

    }


    updateCart();

};


/* =====================================================
   REMOVE FROM CART
===================================================== */

window.removeFromCart = function (id) {

    cart =
        cart.filter(
            product => product.id !== id
        );


    updateCart();

};


/* =====================================================
   OPEN CART
===================================================== */

window.openCart = function () {

    const sidebar =
        document.getElementById("cartSidebar");


    if (sidebar) {

        sidebar.classList.add("active");

    }

};


/* =====================================================
   CLOSE CART
===================================================== */

window.closeCart = function () {

    const sidebar =
        document.getElementById("cartSidebar");


    if (sidebar) {

        sidebar.classList.remove("active");

    }

};


/* =====================================================
   SCROLL TO PRODUCTS
===================================================== */

window.scrollToProducts = function () {

    const section =
        document.querySelector(".products-section");


    if (section) {

        section.scrollIntoView({

            behavior: "smooth"

        });

    }

};


/* =====================================================
   CHECKOUT
===================================================== */

window.openCheckout = function () {

    if (cart.length === 0) {

        alert("Pehle cart me product add karo.");

        return;
    }


    const modal =
        document.getElementById("checkoutModal");


    if (modal) {

        modal.classList.add("active");

    }

};


window.closeCheckout = function () {

    const modal =
        document.getElementById("checkoutModal");


    if (modal) {

        modal.classList.remove("active");

    }

};


/* =====================================================
   PLACE ORDER
===================================================== */

window.placeOrder = function () {

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const address =
        document.getElementById("customerAddress").value.trim();


    if (!name || !phone || !address) {

        alert(
            "Name, phone aur address complete karo."
        );

        return;

    }


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    alert(
        `Order successfully placed! 🎉\n\n` +
        `Customer: ${name}\n` +
        `Total: ₹${total.toLocaleString("en-IN")}`
    );


    cart = [];

    updateCart();

    closeCheckout();

    closeCart();

};


/* =====================================================
   AUTH MODAL
===================================================== */

window.openAuth = function () {

    const modal =
        document.getElementById("authModal");


    if (modal) {

        modal.classList.add("active");

    }

};


window.closeAuth = function () {

    const modal =
        document.getElementById("authModal");


    if (modal) {

        modal.classList.remove("active");

    }

};


/* =====================================================
   SIGN UP
===================================================== */

window.signup = async function () {

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;


    if (!email || !password) {

        alert(
            "Email aur password enter karo."
        );

        return;

    }


    try {

        const {
            createUserWithEmailAndPassword
        } = await import(
            "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
        );


        await createUserWithEmailAndPassword(

            window.firebaseAuth,

            email,

            password

        );


        alert(
            "Account successfully created! 🎉"
        );


        closeAuth();


    } catch (error) {

        alert(
            "Signup Error: " +
            error.message
        );

    }

};


/* =====================================================
   LOGIN
===================================================== */

window.login = async function () {

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    if (!email || !password) {

        alert(
            "Email aur password enter karo."
        );

        return;

    }


    try {

        const {
            signInWithEmailAndPassword
        } = await import(
            "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
        );


        await signInWithEmailAndPassword(

            window.firebaseAuth,

            email,

            password

        );


        alert(
            "Login successful! ✅"
        );


        closeAuth();


    } catch (error) {

        alert(
            "Login Error: " +
            error.message
        );

    }

};


/* =====================================================
   GOOGLE LOGIN
===================================================== */

window.googleLogin = async function () {

    try {

        const {

            GoogleAuthProvider,

            signInWithPopup

        } = await import(
            "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
        );


        const provider =
            new GoogleAuthProvider();


        await signInWithPopup(

            window.firebaseAuth,

            provider

        );


        alert(
            "Google login successful! ✅"
        );


        closeAuth();


    } catch (error) {

        alert(
            "Google Login Error: " +
            error.message
        );

    }

};


/* =====================================================
   LOGOUT
===================================================== */

window.logout = async function () {

    try {

        const { signOut } =
            await import(
                "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
            );


        await signOut(
            window.firebaseAuth
        );


        alert(
            "Logout successful! 👋"
        );


    } catch (error) {

        alert(
            "Logout Error: " +
            error.message
        );

    }

};


/* =====================================================
   INITIAL LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayProducts(products);

        updateCart();

    }
);


/* =====================================================
   DEBUG
===================================================== */

console.log(
    `My Store loaded successfully. ${products.length} products available.`
);
