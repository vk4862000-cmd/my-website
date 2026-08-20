// ============================================
// NORTHLINE / MY STORE - E-COMMERCE JS
// 1000 DEMO PRODUCTS
// ============================================

// ---------- PRODUCT DATA ----------

const categories = [
    "Electronics",
    "Mobiles",
    "Laptops",
    "Fashion",
    "Men",
    "Women",
    "Shoes",
    "Beauty",
    "Home",
    "Kitchen",
    "Furniture",
    "Grocery",
    "Sports",
    "Toys",
    "Books",
    "Accessories"
];

const productNames = [
    "Smartphone",
    "Gaming Laptop",
    "Wireless Earbuds",
    "Bluetooth Speaker",
    "Smart Watch",
    "Power Bank",
    "USB Type-C Cable",
    "Wireless Mouse",
    "Mechanical Keyboard",
    "HD Monitor",
    "Tablet",
    "Smart TV",
    "Digital Camera",
    "Headphones",
    "Fitness Band",
    "Backpack",
    "Travel Bag",
    "Running Shoes",
    "Casual Shoes",
    "Sports Shoes",
    "T-Shirt",
    "Jeans",
    "Hoodie",
    "Jacket",
    "Shirt",
    "Dress",
    "Saree",
    "Kurti",
    "Handbag",
    "Wallet",
    "Sunglasses",
    "Perfume",
    "Face Wash",
    "Hair Shampoo",
    "Hair Dryer",
    "Electric Trimmer",
    "Mixer Grinder",
    "Electric Kettle",
    "Air Fryer",
    "Coffee Maker",
    "Cookware Set",
    "Dinner Set",
    "Water Bottle",
    "Bedsheet",
    "Pillow",
    "Curtain",
    "Table Lamp",
    "Study Table",
    "Office Chair",
    "Bookshelf",
    "Football",
    "Cricket Bat",
    "Badminton Racket",
    "Yoga Mat",
    "Dumbbell Set",
    "Remote Car",
    "Building Blocks",
    "Board Game",
    "Educational Toy",
    "Notebook",
    "School Bag",
    "Pen Set",
    "Desk Organizer"
];

const brands = [
    "Nova",
    "TechPro",
    "SmartX",
    "Urban",
    "Prime",
    "Vision",
    "Max",
    "ProLine",
    "Galaxy",
    "StyleHub",
    "HomePro",
    "PowerMax",
    "Elite",
    "NextGen",
    "Classic"
];


// ---------- PRICE GENERATOR ----------

function generatePrice(index) {

    const prices = [
        299,
        399,
        499,
        599,
        699,
        799,
        899,
        999,
        1199,
        1299,
        1499,
        1599,
        1799,
        1999,
        2299,
        2499,
        2999,
        3499,
        3999,
        4499,
        4999,
        5999,
        6999,
        7999,
        8999,
        9999,
        11999,
        14999,
        19999,
        24999,
        29999,
        39999,
        49999,
        59999,
        69999,
        79999
    ];

    return prices[index % prices.length];
}


// ---------- GENERATE 1000 PRODUCTS ----------

const products = [];

for (let i = 1; i <= 1000; i++) {

    const name =
        productNames[(i - 1) % productNames.length];

    const brand =
        brands[(i - 1) % brands.length];

    const category =
        categories[(i - 1) % categories.length];

    const price =
        generatePrice(i);

    const discount =
        [5, 10, 15, 20, 25, 30, 40, 50][i % 8];

    const oldPrice =
        Math.round(price / (1 - discount / 100));

    products.push({

        id: i,

        name: `${brand} ${name} ${i}`,

        brand: brand,

        category: category,

        price: price,

        oldPrice: oldPrice,

        discount: discount,

        rating: (3.5 + (i % 15) / 10).toFixed(1),

        reviews: 50 + (i * 37) % 5000,

        image:
            `https://picsum.photos/seed/product${i}/500/500`

    });
}


// ============================================
// CART
// ============================================

let cart = [];


// ---------- ADD TO CART ----------

function addToCart(productId) {

    const product =
        products.find(p => p.id === productId);

    if (!product) return;

    const existing =
        cart.find(item => item.id === productId);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }

    updateCart();

    alert(`${product.name} cart me add ho gaya!`);
}


// ---------- REMOVE FROM CART ----------

function removeFromCart(productId) {

    cart =
        cart.filter(item => item.id !== productId);

    updateCart();
}


// ---------- CHANGE QUANTITY ----------

function changeQuantity(productId, change) {

    const item =
        cart.find(item => item.id === productId);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;
    }

    updateCart();
}


// ---------- CART UPDATE ----------

function updateCart() {

    const cartCount =
        document.getElementById("cartCount");

    if (cartCount) {

        cartCount.textContent =
            cart.reduce(
                (total, item) =>
                    total + item.quantity,
                0
            );
    }

    renderCart();
}


// ============================================
// PRODUCT DISPLAY
// ============================================

function renderProducts(list = products) {

    const container =
        document.querySelector(".product-container");

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

                <p style="
                    color:#777;
                    font-size:13px;
                    margin-bottom:5px;
                ">
                    ${product.brand}
                </p>

                <h3>
                    ${product.name}
                </h3>

                <div style="
                    margin:8px 0;
                    color:#f39c12;
                ">
                    ★ ${product.rating}
                    <span style="
                        color:#777;
                        font-size:13px;
                    ">
                        (${product.reviews})
                    </span>
                </div>

                <div class="price">
                    ₹${product.price.toLocaleString("en-IN")}

                    <span style="
                        color:#888;
                        font-size:13px;
                        text-decoration:line-through;
                        margin-left:6px;
                    ">
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </span>

                    <span style="
                        color:#16a34a;
                        font-size:13px;
                        margin-left:5px;
                    ">
                        ${product.discount}% off
                    </span>
                </div>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>
        `;

        container.appendChild(card);

    });
}


// ============================================
// SEARCH
// ============================================

function searchProducts() {

    const input =
        document.querySelector(
            ".search-box input"
        );

    if (!input) return;

    const search =
        input.value.toLowerCase().trim();

    if (!search) {

        renderProducts();

        return;
    }

    const filtered =
        products.filter(product =>

            product.name
                .toLowerCase()
                .includes(search)

            ||

            product.brand
                .toLowerCase()
                .includes(search)

            ||

            product.category
                .toLowerCase()
                .includes(search)

        );

    renderProducts(filtered);
}


// Search while typing

document.addEventListener(
    "input",
    function(event) {

        if (
            event.target.matches(
                ".search-box input"
            )
        ) {

            searchProducts();

        }

    }
);


// ============================================
// CATEGORY FILTER
// ============================================

function filterCategory(category) {

    if (category === "All") {

        renderProducts();

        return;
    }

    const filtered =
        products.filter(
            product =>
                product.category === category
        );

    renderProducts(filtered);
}


// ============================================
// CART SIDEBAR
// ============================================

function renderCart() {

    const cartItems =
        document.getElementById("cartItems");

    if (!cartItems) return;

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p style="
                text-align:center;
                padding:30px 10px;
                color:#777;
            ">
                Your cart is empty.
            </p>

        `;

        updateCartTotal();

        return;
    }

    cartItems.innerHTML = "";

    cart.forEach(item => {

        const div =
            document.createElement("div");

        div.className =
            "cart-item";

        div.innerHTML = `

            <div>

                <strong>
                    ${item.name}
                </strong>

                <p>
                    ₹${item.price.toLocaleString("en-IN")}
                </p>

                <div class="quantity">

                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            -1
                        )"
                    >
                        −
                    </button>

                    <span style="
                        margin:0 10px;
                    ">
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            1
                        )"
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
                    cursor:pointer;
                    font-size:18px;
                "
            >
                ✕
            </button>

        `;

        cartItems.appendChild(div);

    });

    updateCartTotal();
}


// ---------- TOTAL ----------

function updateCartTotal() {

    const totalElement =
        document.getElementById("cartTotal");

    if (!totalElement) return;

    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );

    totalElement.textContent =
        `₹${total.toLocaleString("en-IN")}`;
}


// ============================================
// OPEN / CLOSE CART
// ============================================

function openCart() {

    const sidebar =
        document.querySelector(
            ".cart-sidebar"
        );

    if (sidebar) {

        sidebar.classList.add("active");

    }
}


function closeCart() {

    const sidebar =
        document.querySelector(
            ".cart-sidebar"
        );

    if (sidebar) {

        sidebar.classList.remove("active");

    }
}


// ============================================
// LOGIN MODAL
// ============================================

const authModal =
    document.getElementById("authModal");


// OPEN LOGIN

window.openAuth = function() {

    if (authModal) {

        authModal.classList.add("active");

    }

};


// CLOSE LOGIN

window.closeAuth = function() {

    if (authModal) {

        authModal.classList.remove("active");

    }

};


// ============================================
// FIREBASE SIGN UP
// ============================================

window.signup = async function() {

    const email =
        document.getElementById(
            "signupEmail"
        )?.value.trim();

    const password =
        document.getElementById(
            "signupPassword"
        )?.value;

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

        alert(error.message);

    }

};


// ============================================
// LOGIN
// ============================================

window.login = async function() {

    const email =
        document.getElementById(
            "loginEmail"
        )?.value.trim();

    const password =
        document.getElementById(
            "loginPassword"
        )?.value;

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

        alert(error.message);

    }

};


// ============================================
// GOOGLE LOGIN
// ============================================

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

        alert(error.message);

    }

};


// ============================================
// LOGOUT
// ============================================

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

        alert(error.message);

    }

};


// ============================================
// CATEGORY BUTTONS
// ============================================

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "nav button"
            );

        if (!button) return;

        filterCategory(
            button.textContent.trim()
        );

    }
);


// ============================================
// CART BUTTON
// ============================================

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                ".cart-button"
            );

        if (button) {

            openCart();

        }

    }
);


// ============================================
// CLOSE CART
// ============================================

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                ".cart-close"
            );

        if (button) {

            closeCart();

        }

    }
);


// ============================================
// INITIALIZE
// ============================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderProducts();

        updateCart();

        console.log(
            `✅ ${products.length} products loaded`
        );

    }
);


// ============================================
// MAKE FUNCTIONS GLOBAL
// ============================================

window.products = products;

window.cart = cart;

window.addToCart = addToCart;

window.removeFromCart = removeFromCart;

window.changeQuantity = changeQuantity;

window.openCart = openCart;

window.closeCart = closeCart;

window.filterCategory = filterCategory;

window.searchProducts = searchProducts;
