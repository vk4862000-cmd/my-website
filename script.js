// ======================================================
// MY STORE - COMPLETE E-COMMERCE JAVASCRIPT
// 1000 PRODUCTS
// ======================================================

let products = [];
let cart = [];


// ======================================================
// PRODUCT IMAGE DATABASE
// ======================================================

const productImages = {

    electronics: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600"
    ],

    clothing: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600"
    ],

    accessories: [
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
        "https://images.unsplash.com/photo-1585386959984-a41552231693?w=600",
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=600",
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"
    ],

    beauty: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600",
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600"
    ],

    home: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
        "https://images.unsplash.com/photo-1583845112203-454c8f2b2b04?w=600",
        "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=600"
    ]
};


// ======================================================
// PRODUCT NAMES
// ======================================================

const productNames = {

    electronics: [
        "Apple iPhone",
        "Samsung Galaxy",
        "OnePlus Smartphone",
        "Google Pixel",
        "Redmi Smartphone",
        "Realme Smartphone",
        "Motorola Phone",
        "Vivo Smartphone",
        "Oppo Smartphone",
        "Nothing Phone",
        "Gaming Laptop",
        "Business Laptop",
        "HP Laptop",
        "Dell Laptop",
        "Lenovo Laptop",
        "MacBook",
        "Wireless Headphones",
        "Gaming Headphones",
        "Bluetooth Earbuds",
        "Smart Watch",
        "Fitness Band",
        "Bluetooth Speaker",
        "Mechanical Keyboard",
        "Gaming Mouse",
        "LED Monitor",
        "Smart TV",
        "Tablet",
        "Power Bank",
        "Fast Charger",
        "USB Cable"
    ],

    clothing: [
        "Men's T-Shirt",
        "Women's T-Shirt",
        "Cotton Shirt",
        "Denim Shirt",
        "Casual Shirt",
        "Formal Shirt",
        "Men's Jeans",
        "Women's Jeans",
        "Cargo Pants",
        "Track Pants",
        "Hoodie",
        "Sweatshirt",
        "Jacket",
        "Winter Jacket",
        "Kurta",
        "Saree",
        "Dress",
        "Top",
        "Skirt",
        "Sports Shoes",
        "Running Shoes",
        "Casual Shoes",
        "Sneakers",
        "Sandals",
        "Slippers"
    ],

    accessories: [
        "Leather Wallet",
        "Travel Bag",
        "Backpack",
        "Laptop Bag",
        "Sunglasses",
        "Watch",
        "Belt",
        "Cap",
        "Beanie",
        "Key Chain",
        "Travel Pouch",
        "Hand Bag",
        "Crossbody Bag",
        "School Bag",
        "Sports Bag",
        "Card Holder",
        "Passport Holder",
        "Jewellery Box",
        "Bracelet",
        "Necklace",
        "Ring",
        "Earrings",
        "Hair Band",
        "Hair Clip"
    ],

    beauty: [
        "Face Wash",
        "Moisturizer",
        "Face Cream",
        "Sunscreen",
        "Lip Balm",
        "Lipstick",
        "Foundation",
        "Compact Powder",
        "Mascara",
        "Eyeliner",
        "Perfume",
        "Body Spray",
        "Shampoo",
        "Conditioner",
        "Hair Oil",
        "Face Serum",
        "Body Lotion",
        "Face Mask",
        "Makeup Kit",
        "Beauty Kit"
    ],

    home: [
        "Bed Sheet",
        "Pillow",
        "Curtains",
        "Table Lamp",
        "Floor Lamp",
        "Wall Clock",
        "Storage Box",
        "Kitchen Set",
        "Dinner Set",
        "Coffee Mug",
        "Water Bottle",
        "Non Stick Pan",
        "Pressure Cooker",
        "Mixer Grinder",
        "Electric Kettle",
        "Room Decor",
        "Cushion",
        "Carpet",
        "Chair",
        "Study Table"
    ]
};


// ======================================================
// CATEGORY LIST
// ======================================================

const categories = [
    "electronics",
    "clothing",
    "accessories",
    "beauty",
    "home"
];


// ======================================================
// GENERATE 1000 PRODUCTS
// ======================================================

function generateProducts() {

    products = [];

    let id = 1;

    while (products.length < 1000) {

        const category =
            categories[(id - 1) % categories.length];

        const names =
            productNames[category];

        const name =
            names[(id - 1) % names.length];

        const images =
            productImages[category];

        const image =
            images[(id - 1) % images.length];

        // Different prices
        const price =
            Math.floor(
                299 +
                ((id * 137) % 50000)
            );

        const discount =
            5 + ((id * 3) % 46);

        const oldPrice =
            Math.round(
                price / (1 - discount / 100)
            );

        const rating =
            (3.5 + ((id * 7) % 15) / 10)
            .toFixed(1);

        products.push({

            id: id,

            name: name + " " + id,

            category: category,

            price: price,

            oldPrice: oldPrice,

            discount: discount,

            rating: rating,

            image: image

        });

        id++;
    }

}


// ======================================================
// RENDER PRODUCTS
// ======================================================

function renderProducts(productList = products) {

    const container =
        document.getElementById("productContainer");

    if (!container) return;


    if (productList.length === 0) {

        container.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:50px;
                font-size:20px;
            ">
                😔 No products found
            </div>
        `;

        return;
    }


    container.innerHTML =
        productList.map(product => `

        <div class="product-card">

            <div class="product-image">

                <span class="discount">
                    ${product.discount}% OFF
                </span>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.style.display='none'; this.parentElement.innerHTML += '<span class=product-icon>🛍️</span>';"
                >

            </div>


            <div class="product-info">

                <small>
                    ${product.category.toUpperCase()}
                </small>

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
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>

        </div>

    `).join("");

}


// ======================================================
// SEARCH
// ======================================================

window.searchProducts = function () {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const search =
        input.value.toLowerCase().trim();


    const filtered =
        products.filter(product =>

            product.name
                .toLowerCase()
                .includes(search)

            ||

            product.category
                .toLowerCase()
                .includes(search)

        );


    renderProducts(filtered);
};


// ======================================================
// FILTER CATEGORY
// ======================================================

window.filterProducts = function (category) {

    if (category === "all") {

        renderProducts(products);

        return;
    }


    const filtered =
        products.filter(
            product =>
                product.category === category
        );


    renderProducts(filtered);
};


// ======================================================
// SHOP NOW
// ======================================================

window.scrollToProducts = function () {

    const section =
        document.querySelector(".products-section");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

};


// ======================================================
// CART
// ======================================================

window.addToCart = function (id) {

    const product =
        products.find(p => p.id === id);

    if (!product) return;


    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();

    alert(product.name + " added to cart 🛒");

};


// ======================================================
// UPDATE CART
// ======================================================

function updateCart() {

    const cartCount =
        document.getElementById("cartCount");

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    const totalPrice =
        cart.reduce(
            (total, item) =>
                total +
                item.price * item.quantity,
            0
        );


    if (cartCount) {

        cartCount.textContent =
            totalQuantity;

    }


    if (cartTotal) {

        cartTotal.textContent =
            totalPrice.toLocaleString("en-IN");

    }


    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        return;
    }


    cartItems.innerHTML =
        cart.map(item => `

        <div class="cart-item">

            <div>

                <h4>
                    ${item.name}
                </h4>

                <p>
                    ₹${item.price.toLocaleString("en-IN")}
                </p>

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
                    background:#dc2626;
                    color:white;
                    padding:7px;
                    border-radius:5px;
                "
            >
                Remove
            </button>

        </div>

    `).join("");

}


// ======================================================
// CHANGE QUANTITY
// ======================================================

window.changeQuantity = function (id, amount) {

    const item =
        cart.find(product => product.id === id);

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.id !== id
            );

    }


    updateCart();

};


// ======================================================
// REMOVE FROM CART
// ======================================================

window.removeFromCart = function (id) {

    cart =
        cart.filter(
            product => product.id !== id
        );

    updateCart();

};


// ======================================================
// OPEN CART
// ======================================================

window.openCart = function () {

    const sidebar =
        document.getElementById("cartSidebar");

    if (sidebar) {

        sidebar.classList.add("active");

    }

};


// ======================================================
// CLOSE CART
// ======================================================

window.closeCart = function () {

    const sidebar =
        document.getElementById("cartSidebar");

    if (sidebar) {

        sidebar.classList.remove("active");

    }

};


// ======================================================
// CHECKOUT
// ======================================================

window.openCheckout = async function () {

    if (cart.length === 0) {

        alert("Pehle cart me product add karo.");

        return;
    }


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    try {

        // Server se Razorpay Order create
        const response =
            await fetch("/create-order", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    amount: total
                })

            });


        const data =
            await response.json();


        if (!data.success) {

            alert(
                data.message ||
                "Payment order create nahi hua."
            );

            return;
        }


        // Razorpay Checkout
        const options = {

            key: "YOUR_RAZORPAY_KEY_ID",

            amount: data.amount,

            currency: "INR",

            name: "My Store",

            description:
                "My Store Shopping Order",

            order_id:
                data.orderId,


            handler: async function (payment) {

                try {

                    const verifyResponse =
                        await fetch(
                            "/verify-payment",
                            {

                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body:
                                    JSON.stringify({
                                        razorpay_order_id:
                                            payment.razorpay_order_id,

                                        razorpay_payment_id:
                                            payment.razorpay_payment_id,

                                        razorpay_signature:
                                            payment.razorpay_signature
                                    })

                            }
                        );


                    const result =
                        await verifyResponse.json();


                    if (result.success) {

                        alert(
                            "🎉 Payment successful!\n\n" +
                            "Payment ID: " +
                            result.paymentId
                        );


                        cart = [];

                        updateCart();

                        closeCheckout();

                        closeCart();

                    } else {

                        alert(
                            "Payment verification failed."
                        );

                    }

                } catch (error) {

                    console.error(error);

                    alert(
                        "Payment verification error."
                    );

                }

            },


            prefill: {

                name:
                    document.getElementById(
                        "customerName"
                    )?.value || "",

                contact:
                    document.getElementById(
                        "customerPhone"
                    )?.value || ""

            },


            theme: {

                color: "#2563eb"

            }

        };


        const razorpay =
            new Razorpay(options);


        razorpay.open();


    } catch (error) {

        console.error(error);

        alert(
            "Payment start nahi ho paaya."
        );

    }

};


// ======================================================
// PLACE ORDER
// ======================================================

window.placeOrder = function () {

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
                sum + item.price * item.quantity,
            0
        );


    alert(
        "🎉 Order placed successfully!\n\n" +
        "Customer: " + name + "\n" +
        "Total: ₹" +
        total.toLocaleString("en-IN")
    );


    cart = [];

    updateCart();

    closeCheckout();

    closeCart();

};


// ======================================================
// AUTH MODAL
// ======================================================

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


// ======================================================
// SIGN UP
// ======================================================

window.signup = async function () {

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;


    if (!email || !password) {

        alert("Email aur password enter karo.");

        return;
    }


    if (password.length < 6) {

        alert(
            "Password kam se kam 6 characters ka hona chahiye."
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


        alert("🎉 Account successfully created!");

        closeAuth();

    } catch (error) {

        alert(error.message);

    }

};


// ======================================================
// LOGIN
// ======================================================

window.login = async function () {

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    if (!email || !password) {

        alert("Email aur password enter karo.");

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


        alert("✅ Login successful!");

        closeAuth();

    } catch (error) {

        alert(error.message);

    }

};


// ======================================================
// GOOGLE LOGIN
// ======================================================

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


        alert("✅ Google login successful!");

        closeAuth();

    } catch (error) {

        alert(error.message);

    }

};


// ======================================================
// LOGOUT
// ======================================================

window.logout = async function () {

    try {

        const {
            signOut
        } = await import(
            "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
        );


        await signOut(
            window.firebaseAuth
        );


        alert("Logout successful!");

    } catch (error) {

        alert(error.message);

    }

};


// ======================================================
// CLOSE MODALS WHEN CLICKING OUTSIDE
// ======================================================

document.addEventListener(
    "click",
    function (event) {

        const authModal =
            document.getElementById("authModal");

        const checkoutModal =
            document.getElementById("checkoutModal");


        if (
            event.target === authModal
        ) {

            closeAuth();

        }


        if (
            event.target === checkoutModal
        ) {

            closeCheckout();

        }

    }
);


// ======================================================
// START STORE
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "My Store starting..."
        );


        // Generate 1000 products
        generateProducts();


        // Show products immediately
        renderProducts();


        // Empty cart
        updateCart();


        console.log(
            "1000 products loaded successfully!"
        );

    }
);
