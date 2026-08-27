/* =========================================================
   MY STORE - COMPLETE E-COMMERCE JAVASCRIPT
   1000 PRODUCTS + SEARCH + CATEGORY + CART + AUTH
========================================================= */

console.log("My Store JavaScript started");

/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let allProducts = [];
let displayedProducts = [];
let cart = [];

let currentCategory = "all";
let currentSearch = "";
let productsToShow = 60;


/* =========================================================
   PRODUCT DATA
========================================================= */

const productTemplates = [

    // ELECTRONICS
    {
        category: "electronics",
        names: [
            "Apple iPhone",
            "Samsung Galaxy",
            "OnePlus Nord",
            "Google Pixel",
            "Realme Smartphone",
            "Vivo Smartphone",
            "Oppo Smartphone",
            "Motorola Smartphone",
            "Nothing Phone",
            "Redmi Note"
        ],
        basePrice: 12999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "electronics",
        names: [
            "Gaming Laptop",
            "HP Laptop",
            "Dell Inspiron",
            "Lenovo IdeaPad",
            "ASUS VivoBook",
            "Acer Aspire",
            "MacBook Air",
            "MacBook Pro",
            "MSI Gaming Laptop",
            "Samsung Laptop"
        ],
        basePrice: 39999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "electronics",
        names: [
            "Wireless Headphones",
            "Gaming Headphones",
            "Bluetooth Earbuds",
            "AirPods",
            "Noise Cancelling Headphones",
            "Neckband",
            "Gaming Earphones",
            "Wireless Earphones",
            "Bass Headphones",
            "Premium Earbuds"
        ],
        basePrice: 999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "electronics",
        names: [
            "Smart Watch",
            "Fitness Band",
            "Apple Watch",
            "Samsung Watch",
            "Noise Smart Watch",
            "Boat Smart Watch",
            "Amazfit Watch",
            "Garmin Watch",
            "Kids Smart Watch",
            "Premium Smart Watch"
        ],
        basePrice: 1499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "electronics",
        names: [
            "LED Smart TV",
            "Samsung 4K TV",
            "Sony Bravia TV",
            "LG Smart TV",
            "OnePlus TV",
            "Mi Smart TV",
            "Android TV",
            "QLED TV",
            "OLED TV",
            "Full HD TV"
        ],
        basePrice: 24999,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80"
    },


    // CLOTHING
    {
        category: "clothing",
        names: [
            "Men Cotton T-Shirt",
            "Men Printed T-Shirt",
            "Men Polo T-Shirt",
            "Oversized T-Shirt",
            "Full Sleeve T-Shirt",
            "Sports T-Shirt",
            "Casual T-Shirt",
            "Premium T-Shirt",
            "Graphic T-Shirt",
            "Round Neck T-Shirt"
        ],
        basePrice: 399,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "clothing",
        names: [
            "Men Blue Jeans",
            "Men Black Jeans",
            "Slim Fit Jeans",
            "Regular Fit Jeans",
            "Cargo Jeans",
            "Relaxed Jeans",
            "Denim Jeans",
            "Stretch Jeans",
            "Classic Jeans",
            "Premium Jeans"
        ],
        basePrice: 899,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "clothing",
        names: [
            "Women's Kurti",
            "Printed Kurti",
            "Cotton Kurti",
            "Designer Kurti",
            "Long Kurti",
            "Party Kurti",
            "Casual Kurti",
            "Floral Kurti",
            "Embroidered Kurti",
            "Premium Kurti"
        ],
        basePrice: 599,
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "clothing",
        names: [
            "Women's Dress",
            "Summer Dress",
            "Party Dress",
            "Floral Dress",
            "Casual Dress",
            "Maxi Dress",
            "Midi Dress",
            "Evening Dress",
            "Designer Dress",
            "Cotton Dress"
        ],
        basePrice: 799,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
    },


    // ACCESSORIES
    {
        category: "accessories",
        names: [
            "Leather Wallet",
            "Men Wallet",
            "Card Holder",
            "Premium Wallet",
            "Travel Wallet",
            "Slim Wallet",
            "Classic Wallet",
            "Designer Wallet",
            "RFID Wallet",
            "Cash Wallet"
        ],
        basePrice: 299,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "accessories",
        names: [
            "Leather Belt",
            "Men Belt",
            "Classic Belt",
            "Formal Belt",
            "Casual Belt",
            "Designer Belt",
            "Premium Belt",
            "Black Belt",
            "Brown Belt",
            "Reversible Belt"
        ],
        basePrice: 349,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "accessories",
        names: [
            "Sunglasses",
            "Aviator Sunglasses",
            "Round Sunglasses",
            "Sports Sunglasses",
            "Polarized Sunglasses",
            "Classic Sunglasses",
            "Designer Sunglasses",
            "UV Protection Glasses",
            "Wayfarer Sunglasses",
            "Premium Sunglasses"
        ],
        basePrice: 499,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "accessories",
        names: [
            "Travel Backpack",
            "Laptop Backpack",
            "College Backpack",
            "School Backpack",
            "Office Backpack",
            "Waterproof Backpack",
            "Gaming Backpack",
            "Casual Backpack",
            "Premium Backpack",
            "Travel Bag"
        ],
        basePrice: 799,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    },


    // BEAUTY
    {
        category: "beauty",
        names: [
            "Face Wash",
            "Moisturizer",
            "Face Cream",
            "Sunscreen",
            "Face Serum",
            "Lip Balm",
            "Face Mask",
            "Body Lotion",
            "Beauty Cream",
            "Skin Care Kit"
        ],
        basePrice: 199,
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "beauty",
        names: [
            "Shampoo",
            "Conditioner",
            "Hair Serum",
            "Hair Oil",
            "Hair Mask",
            "Hair Care Kit",
            "Anti Dandruff Shampoo",
            "Hair Conditioner",
            "Hair Gel",
            "Hair Styling Cream"
        ],
        basePrice: 249,
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=600&q=80"
    },


    // HOME
    {
        category: "home",
        names: [
            "Table Lamp",
            "LED Lamp",
            "Study Lamp",
            "Bedside Lamp",
            "Desk Lamp",
            "Smart Lamp",
            "Decorative Lamp",
            "Night Lamp",
            "Reading Lamp",
            "Modern Lamp"
        ],
        basePrice: 499,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "home",
        names: [
            "Coffee Mug",
            "Ceramic Mug",
            "Travel Mug",
            "Tea Cup",
            "Coffee Cup",
            "Steel Mug",
            "Printed Mug",
            "Premium Mug",
            "Magic Mug",
            "Large Coffee Mug"
        ],
        basePrice: 199,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80"
    },

    {
        category: "home",
        names: [
            "Bedsheet",
            "Cotton Bedsheet",
            "Double Bedsheet",
            "King Size Bedsheet",
            "Single Bedsheet",
            "Printed Bedsheet",
            "Floral Bedsheet",
            "Premium Bedsheet",
            "Soft Bedsheet",
            "Home Bedsheet"
        ],
        basePrice: 699,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80"
    }
];


/* =========================================================
   GENERATE 1000 PRODUCTS
========================================================= */

function generateProducts() {

    allProducts = [];

    let id = 1;

    while (allProducts.length < 1000) {

        for (const template of productTemplates) {

            for (const name of template.names) {

                if (allProducts.length >= 1000) {
                    break;
                }

                const variation = Math.floor(allProducts.length / 20) + 1;

                const originalPrice =
                    template.basePrice +
                    (variation * 37) +
                    ((id % 7) * 25);

                const discount =
                    5 + (id % 21);

                const price =
                    Math.round(
                        originalPrice * (100 - discount) / 100
                    );

                const rating =
                    (3.5 + ((id * 7) % 15) / 10).toFixed(1);

                allProducts.push({

                    id: id,

                    name: `${name} ${variation}`,

                    category: template.category,

                    price: price,

                    originalPrice: originalPrice,

                    discount: discount,

                    rating: rating,

                    image: template.image

                });

                id++;
            }
        }
    }

    console.log(
        "Products generated:",
        allProducts.length
    );
}


/* =========================================================
   DISPLAY PRODUCTS
========================================================= */

function displayProducts(products) {

    const container =
        document.getElementById("productContainer");

    if (!container) {
        console.error("productContainer not found");
        return;
    }

    if (!products || products.length === 0) {

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

    const productsToDisplay =
        products.slice(0, productsToShow);

    container.innerHTML =
        productsToDisplay.map(product => {

            return `

                <div class="product-card">

                    <div class="product-image">

                        <span class="discount">
                            ${product.discount}% OFF
                        </span>

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                            onerror="this.src='https://picsum.photos/seed/product${product.id}/500/500'"
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
                                ₹${product.originalPrice.toLocaleString("en-IN")}
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

            `;

        }).join("");


    /* LOAD MORE BUTTON */

    if (products.length > productsToShow) {

        container.innerHTML += `

            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:30px;
            ">

                <button
                    onclick="loadMoreProducts()"
                    style="
                        padding:14px 30px;
                        background:#2563eb;
                        color:white;
                        border:none;
                        border-radius:7px;
                        font-size:16px;
                        font-weight:bold;
                        cursor:pointer;
                    "
                >
                    Load More Products
                </button>

            </div>

        `;
    }
}


/* =========================================================
   LOAD MORE
========================================================= */

window.loadMoreProducts = function () {

    productsToShow += 60;

    displayProducts(displayedProducts);

};


/* =========================================================
   SEARCH
========================================================= */

window.searchProducts = function () {

    const input =
        document.getElementById("searchInput");

    currentSearch =
        input
            ? input.value.toLowerCase().trim()
            : "";

    applyFilters();

};


/* =========================================================
   CATEGORY FILTER
========================================================= */

window.filterProducts = function (category) {

    currentCategory = category.toLowerCase();

    productsToShow = 60;

    applyFilters();

};


/* =========================================================
   APPLY SEARCH + CATEGORY
========================================================= */

function applyFilters() {

    displayedProducts =
        allProducts.filter(product => {

            const categoryMatch =
                currentCategory === "all" ||
                product.category === currentCategory;

            const searchMatch =
                currentSearch === "" ||
                product.name
                    .toLowerCase()
                    .includes(currentSearch) ||
                product.category
                    .toLowerCase()
                    .includes(currentSearch);

            return categoryMatch && searchMatch;

        });

    displayProducts(displayedProducts);

}


/* =========================================================
   SHOP NOW
========================================================= */

window.scrollToProducts = function () {

    const section =
        document.querySelector(".products-section");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

};


/* =========================================================
   CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        "myStoreCart",
        JSON.stringify(cart)
    );

}


function loadCart() {

    try {

        const saved =
            localStorage.getItem("myStoreCart");

        cart =
            saved
                ? JSON.parse(saved)
                : [];

    } catch {

        cart = [];

    }

}


/* =========================================================
   ADD TO CART
========================================================= */

window.addToCart = function (productId) {

    const product =
        allProducts.find(
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
        `${product.name} added to cart! 🛒`
    );

};


/* =========================================================
   REMOVE FROM CART
========================================================= */

window.removeFromCart = function (productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveCart();

    updateCart();

};


/* =========================================================
   CHANGE QUANTITY
========================================================= */

window.changeQuantity = function (
    productId,
    change
) {

    const item =
        cart.find(
            product => product.id === productId
        );

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.id !== productId
            );

    }


    saveCart();

    updateCart();

};


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    const totalItems =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    const totalPrice =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    if (cartCount) {

        cartCount.textContent =
            totalItems;

    }


    if (cartTotal) {

        cartTotal.textContent =
            totalPrice.toLocaleString("en-IN");

    }


    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p style="
                text-align:center;
                padding:30px;
            ">
                Your cart is empty 🛒
            </p>
        `;

        return;
    }


    cartItems.innerHTML =
        cart.map(item => {

            return `

                <div class="cart-item">

                    <div style="
                        display:flex;
                        gap:10px;
                        align-items:center;
                    ">

                        <img
                            src="${item.image}"
                            alt="${item.name}"
                            style="
                                width:60px;
                                height:60px;
                                object-fit:cover;
                                border-radius:6px;
                            "
                        >

                        <div>

                            <h4>
                                ${item.name}
                            </h4>

                            <p>
                                ₹${item.price.toLocaleString("en-IN")}
                            </p>

                        </div>

                    </div>


                    <div>

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


                        <button
                            onclick="removeFromCart(${item.id})"
                            style="
                                border:none;
                                background:none;
                                color:red;
                                margin-top:5px;
                                cursor:pointer;
                            "
                        >
                            Remove
                        </button>

                    </div>

                </div>

            `;

        }).join("");

}


/* =========================================================
   OPEN CART
========================================================= */

window.openCart = function () {

    const sidebar =
        document.getElementById("cartSidebar");

    if (sidebar) {

        sidebar.classList.add("active");

    }

};


/* =========================================================
   CLOSE CART
========================================================= */

window.closeCart = function () {

    const sidebar =
        document.getElementById("cartSidebar");

    if (sidebar) {

        sidebar.classList.remove("active");

    }

};


/* =========================================================
   CHECKOUT
========================================================= */

window.openCheckout = function () {

    if (cart.length === 0) {

        alert(
            "Please add a product to cart first."
        );

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


/* =========================================================
   PLACE ORDER
========================================================= */

window.placeOrder = function () {

    const name =
        document.getElementById("customerName")?.value.trim();

    const phone =
        document.getElementById("customerPhone")?.value.trim();

    const address =
        document.getElementById("customerAddress")?.value.trim();


    if (!name || !phone || !address) {

        alert(
            "Please fill all delivery details."
        );

        return;

    }


    if (cart.length === 0) {

        alert(
            "Your cart is empty."
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
        `Order placed successfully! 🎉\n\n` +
        `Customer: ${name}\n` +
        `Total: ₹${total.toLocaleString("en-IN")}\n\n` +
        `Payment system will be connected separately.`
    );


    cart = [];

    saveCart();

    updateCart();

    closeCheckout();

    closeCart();

};


/* =========================================================
   LOGIN / SIGNUP MODAL
========================================================= */

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


/* =========================================================
   EMAIL SIGN UP
========================================================= */

window.signup = async function () {

    const email =
        document.getElementById("signupEmail")?.value.trim();

    const password =
        document.getElementById("signupPassword")?.value;


    if (!email || !password) {

        alert(
            "Email aur password enter karo."
        );

        return;

    }


    if (!window.firebaseAuth) {

        alert(
            "Firebase abhi load nahi hua. Page refresh karke try karo."
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

        console.error(error);

        alert(
            getFirebaseError(error)
        );

    }

};


/* =========================================================
   EMAIL LOGIN
========================================================= */

window.login = async function () {

    const email =
        document.getElementById("loginEmail")?.value.trim();

    const password =
        document.getElementById("loginPassword")?.value;


    if (!email || !password) {

        alert(
            "Email aur password enter karo."
        );

        return;

    }


    if (!window.firebaseAuth) {

        alert(
            "Firebase abhi load nahi hua. Page refresh karke try karo."
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
            "Login successful! 🎉"
        );


        closeAuth();

    } catch (error) {

        console.error(error);

        alert(
            getFirebaseError(error)
        );

    }

};


/* =========================================================
   GOOGLE LOGIN
========================================================= */

window.googleLogin = async function () {

    if (!window.firebaseAuth) {

        alert(
            "Firebase abhi load nahi hua. Page refresh karke try karo."
        );

        return;

    }


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
            "Google login successful! 🎉"
        );


        closeAuth();

    } catch (error) {

        console.error(error);

        alert(
            getFirebaseError(error)
        );

    }

};


/* =========================================================
   LOGOUT
========================================================= */

window.logout = async function () {

    if (!window.firebaseAuth) {

        alert(
            "Firebase abhi load nahi hua."
        );

        return;

    }


    try {

        const {
            signOut
        } = await import(
            "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
        );


        await signOut(
            window.firebaseAuth
        );


        alert(
            "Logout successful! 👋"
        );

    } catch (error) {

        console.error(error);

        alert(
            error.message
        );

    }

};


/* =========================================================
   FIREBASE ERROR MESSAGE
========================================================= */

function getFirebaseError(error) {

    const code =
        error?.code || "";


    if (code.includes("auth/email-already-in-use")) {
        return "Ye email already registered hai.";
    }

    if (code.includes("auth/invalid-email")) {
        return "Email address galat hai.";
    }

    if (code.includes("auth/weak-password")) {
        return "Password kam se kam 6 characters ka hona chahiye.";
    }

    if (code.includes("auth/invalid-credential")) {
        return "Email ya password galat hai.";
    }

    if (code.includes("auth/popup-closed-by-user")) {
        return "Google login popup close kar diya gaya.";
    }

    return error?.message || "Something went wrong.";

}


/* =========================================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const authModal =
            document.getElementById("authModal");

        const checkoutModal =
            document.getElementById("checkoutModal");


        if (
            authModal &&
            event.target === authModal
        ) {

            closeAuth();

        }


        if (
            checkoutModal &&
            event.target === checkoutModal
        ) {

            closeCheckout();

        }

    }
);


/* =========================================================
   INITIALIZE STORE
========================================================= */

function initializeStore() {

    console.log(
        "Initializing My Store..."
    );


    generateProducts();

    loadCart();

    updateCart();

    currentCategory = "all";

    currentSearch = "";

    productsToShow = 60;

    displayedProducts =
        allProducts.slice();

    displayProducts(
        displayedProducts
    );


    console.log(
        "My Store ready!",
        allProducts.length,
        "products available."
    );

}


/* =========================================================
   START
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeStore
    );

} else {

    initializeStore();

}
