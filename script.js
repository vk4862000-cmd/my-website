// ======================================================
// MY STORE - COMPLETE E-COMMERCE JAVASCRIPT
// ======================================================

let products = [];
let cart = [];


// ======================================================
// PRODUCT DATA
// ======================================================

const electronics = [
    "Smartphone",
    "Android Phone",
    "5G Smartphone",
    "Bluetooth Speaker",
    "Wireless Earbuds",
    "Headphones",
    "Smartwatch",
    "Laptop",
    "Gaming Laptop",
    "Tablet",
    "Power Bank",
    "USB Cable",
    "Fast Charger",
    "Keyboard",
    "Mouse",
    "Gaming Mouse",
    "Gaming Keyboard",
    "Monitor",
    "LED TV",
    "Smart TV",
    "Soundbar",
    "Webcam",
    "Printer",
    "Router",
    "Hard Disk",
    "SSD",
    "Pen Drive",
    "Camera",
    "Tripod",
    "Microphone"
];

const clothing = [
    "Men T-Shirt",
    "Women T-Shirt",
    "Men Shirt",
    "Women Shirt",
    "Men Jeans",
    "Women Jeans",
    "Men Hoodie",
    "Women Hoodie",
    "Men Jacket",
    "Women Jacket",
    "Kurta",
    "Kurti",
    "Saree",
    "Dress",
    "Track Pants",
    "Lower",
    "Shorts",
    "Sweatshirt",
    "Blazer",
    "Formal Shirt",
    "Polo T-Shirt",
    "Cargo Pants",
    "Ethnic Wear",
    "Night Suit",
    "Sports T-Shirt",
    "Sports Shorts"
];

const accessories = [
    "Wrist Watch",
    "Sunglasses",
    "Wallet",
    "Belt",
    "Backpack",
    "Travel Bag",
    "Handbag",
    "Laptop Bag",
    "School Bag",
    "Cap",
    "Hat",
    "Mobile Cover",
    "Phone Stand",
    "Ring",
    "Bracelet",
    "Necklace",
    "Earrings",
    "Keychain",
    "Umbrella",
    "Water Bottle",
    "Lunch Box",
    "Gym Bag",
    "Card Holder",
    "Travel Pouch"
];


// ======================================================
// PRODUCT IMAGE
// ======================================================

const images = {

    electronics: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        "https://images.unsplash.com/photo-1609592424877-1c7c6c1b4c1e?w=500"
    ],

    clothing: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500",
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500"
    ],

    accessories: [
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
        "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=500"
    ]

};


// ======================================================
// GENERATE 1000 PRODUCTS
// ======================================================

function generateProducts() {

    let id = 1;

    // Electronics
    for (let i = 0; i < 400; i++) {

        const name =
            electronics[i % electronics.length];

        const price =
            499 +
            Math.floor(Math.random() * 90000);

        products.push({

            id: id++,

            name: `${name} ${2024 + (i % 3)} Model`,

            category: "electronics",

            price: price,

            oldPrice: Math.floor(price * 1.20),

            rating: (3.5 + Math.random() * 1.5).toFixed(1),

            image:
                images.electronics[
                    i % images.electronics.length
                ]

        });

    }


    // Clothing
    for (let i = 0; i < 350; i++) {

        const name =
            clothing[i % clothing.length];

        const price =
            299 +
            Math.floor(Math.random() * 5000);

        products.push({

            id: id++,

            name: `${name} Premium Edition`,

            category: "clothing",

            price: price,

            oldPrice: Math.floor(price * 1.25),

            rating: (3.5 + Math.random() * 1.5).toFixed(1),

            image:
                images.clothing[
                    i % images.clothing.length
                ]

        });

    }


    // Accessories
    for (let i = 0; i < 250; i++) {

        const name =
            accessories[i % accessories.length];

        const price =
            149 +
            Math.floor(Math.random() * 5000);

        products.push({

            id: id++,

            name: `${name} Premium`,

            category: "accessories",

            price: price,

            oldPrice: Math.floor(price * 1.30),

            rating: (3.5 + Math.random() * 1.5).toFixed(1),

            image:
                images.accessories[
                    i % images.accessories.length
                ]

        });

    }

}


// ======================================================
// DISPLAY PRODUCTS
// ======================================================

function displayProducts(list) {

    const container =
        document.getElementById("productContainer");

    if (!container) return;

    container.innerHTML = "";


    list.forEach(product => {

        const card =
            document.createElement("div");

        card.className =
            "product-card";


        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <div style="
                    color:#f59e0b;
                    margin:6px 0;
                    font-size:14px;
                ">
                    ⭐ ${product.rating}
                </div>

                <div class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </div>

                <div style="
                    color:#777;
                    text-decoration:line-through;
                    font-size:13px;
                    margin-bottom:10px;
                ">
                    ₹${product.oldPrice.toLocaleString("en-IN")}
                </div>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>
        `;


        container.appendChild(card);

    });

}


// ======================================================
// CATEGORY FILTER
// ======================================================

window.filterProducts = function(category) {

    if (category === "all") {

        displayProducts(products);

        return;
    }


    const filtered =
        products.filter(
            product =>
                product.category === category
        );


    displayProducts(filtered);

};


// ======================================================
// SEARCH
// ======================================================

window.searchProducts = function() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;


    const search =
        input.value
            .toLowerCase()
            .trim();


    if (!search) {

        displayProducts(products);

        return;
    }


    const filtered =
        products.filter(product =>

            product.name
                .toLowerCase()
                .includes(search)

        );


    displayProducts(filtered);

};


// ======================================================
// SCROLL TO PRODUCTS
// ======================================================

window.scrollToProducts = function() {

    const section =
        document.querySelector(".products-section");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

};


// ======================================================
// ADD TO CART
// ======================================================

window.addToCart = function(productId) {

    const product =
        products.find(
            p => p.id === productId
        );


    if (!product) return;


    const existing =
        cart.find(
            item => item.id === productId
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


    alert(
        `${product.name} cart mein add ho gaya!`
    );

};


// ======================================================
// UPDATE CART
// ======================================================

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        if (cartCount)
            cartCount.textContent = "0";

        if (cartTotal)
            cartTotal.textContent = "0";

        return;

    }


    let total = 0;

    let count = 0;


    cartItems.innerHTML = "";


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

            <div>

                <strong>
                    ${item.name}
                </strong>

                <br>

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

        `;


        cartItems.appendChild(div);

    });


    if (cartCount)
        cartCount.textContent = count;


    if (cartTotal)
        cartTotal.textContent =
            total.toLocaleString("en-IN");

}


// ======================================================
// CHANGE QUANTITY
// ======================================================

window.changeQuantity =
function(productId, change) {

    const item =
        cart.find(
            p => p.id === productId
        );


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                p => p.id !== productId
            );

    }


    updateCart();

};


// ======================================================
// OPEN CART
// ======================================================

window.openCart = function() {

    const sidebar =
        document.getElementById("cartSidebar");


    if (sidebar)
        sidebar.classList.add("active");

};


// ======================================================
// CLOSE CART
// ======================================================

window.closeCart = function() {

    const sidebar =
        document.getElementById("cartSidebar");


    if (sidebar)
        sidebar.classList.remove("active");

};


// ======================================================
// CHECKOUT
// ======================================================

window.openCheckout = function() {

    if (cart.length === 0) {

        alert(
            "Pehle cart mein product add karo."
        );

        return;
    }


    const modal =
        document.getElementById("checkoutModal");


    if (modal)
        modal.classList.add("active");

};


window.closeCheckout = function() {

    const modal =
        document.getElementById("checkoutModal");


    if (modal)
        modal.classList.remove("active");

};


// ======================================================
// PLACE ORDER
// ======================================================

window.placeOrder = function() {

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const address =
        document.getElementById("customerAddress").value.trim();


    if (!name || !phone || !address) {

        alert(
            "Please Name, Phone aur Address fill karo."
        );

        return;
    }


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price *
                item.quantity,
            0
        );


    alert(
        `Order successfully placed!\n\n` +
        `Name: ${name}\n` +
        `Total: ₹${total.toLocaleString("en-IN")}`
    );


    cart = [];

    updateCart();

    closeCheckout();

    closeCart();

};


// ======================================================
// AUTH MODAL
// ======================================================

window.openAuth = function() {

    const modal =
        document.getElementById("authModal");


    if (modal)
        modal.classList.add("active");

};


window.closeAuth = function() {

    const modal =
        document.getElementById("authModal");


    if (modal)
        modal.classList.remove("active");

};


// ======================================================
// SIGN UP
// ======================================================

window.signup = async function() {

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
            "Account successfully created!"
        );


        closeAuth();


    } catch (error) {

        console.error(error);

        alert(
            error.message
        );

    }

};


// ======================================================
// LOGIN
// ======================================================

window.login = async function() {

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
            "Login successful!"
        );


        closeAuth();


    } catch (error) {

        console.error(error);

        alert(
            error.message
        );

    }

};


// ======================================================
// GOOGLE LOGIN
// ======================================================

window.googleLogin = async function() {

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
            "Google login successful!"
        );


        closeAuth();


    } catch (error) {

        console.error(error);

        alert(
            error.message
        );

    }

};


// ======================================================
// LOGOUT
// ======================================================

window.logout = async function() {

    try {

        const { signOut } =
            await import(
                "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
            );


        await signOut(
            window.firebaseAuth
        );


        alert(
            "Logout successful!"
        );


    } catch (error) {

        console.error(error);

        alert(
            error.message
        );

    }

};


// ======================================================
// INITIALIZE STORE
// ======================================================

generateProducts();

displayProducts(products);

updateCart();

console.log(
    `My Store loaded with ${products.length} products.`
);
