/* =====================================================
   MY STORE - COMPLETE E-COMMERCE JAVASCRIPT
   1000 PRODUCTS + REAL IMAGES + CART + LOGIN
===================================================== */


/* =====================================================
   PRODUCT DATA
===================================================== */

let products = [];

let cart = [];


/* =====================================================
   PRODUCT IMAGE SOURCES
===================================================== */

const imageSources = [
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/6/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/10/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/13/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/21/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/27/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/29/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/31/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/32/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/33/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/34/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/35/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/36/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/37/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/38/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/40/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/41/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/42/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/43/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/44/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/45/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/46/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/47/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/48/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/49/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/50/thumbnail.jpg"
];


/* =====================================================
   PRODUCT NAMES
===================================================== */

const productNames = [

    /* ELECTRONICS */

    "Apple iPhone",
    "Samsung Galaxy",
    "OnePlus Smartphone",
    "Google Pixel",
    "Redmi Smartphone",
    "Realme Smartphone",
    "Vivo Smartphone",
    "Oppo Smartphone",
    "Motorola Smartphone",
    "Nothing Phone",

    "Bluetooth Speaker",
    "Wireless Earbuds",
    "Gaming Headphones",
    "Smart Watch",
    "Fitness Band",
    "Power Bank",
    "Fast Charger",
    "USB Type C Cable",
    "Lightning Cable",
    "Wireless Charger",

    "Laptop",
    "Gaming Laptop",
    "Business Laptop",
    "Student Laptop",
    "Tablet",
    "Android Tablet",
    "iPad",
    "Keyboard",
    "Gaming Keyboard",
    "Wireless Mouse",
    "Gaming Mouse",
    "Computer Monitor",
    "LED Monitor",
    "Webcam",
    "Printer",
    "WiFi Router",
    "SSD",
    "Pen Drive",
    "Memory Card",
    "Smart TV",
    "LED TV",
    "4K TV",
    "Projector",
    "Microphone",
    "Ring Light",
    "Tripod",
    "Camera",
    "Action Camera",

    /* CLOTHING */

    "Men T-Shirt",
    "Premium T-Shirt",
    "Polo T-Shirt",
    "Oversized T-Shirt",
    "Printed T-Shirt",
    "Cotton T-Shirt",
    "Men Shirt",
    "Formal Shirt",
    "Casual Shirt",
    "Denim Shirt",
    "Jeans",
    "Slim Fit Jeans",
    "Regular Jeans",
    "Cargo Pants",
    "Track Pants",
    "Hoodie",
    "Premium Hoodie",
    "Sweatshirt",
    "Jacket",
    "Winter Jacket",
    "Leather Jacket",
    "Kurta",
    "Men Shorts",

    "Women T-Shirt",
    "Women Top",
    "Women Jeans",
    "Women Dress",
    "Women Kurti",
    "Saree",
    "Leggings",
    "Women Jacket",
    "Women Hoodie",
    "Women Shirt",

    /* ACCESSORIES */

    "Wallet",
    "Leather Wallet",
    "Belt",
    "Leather Belt",
    "Sunglasses",
    "Premium Sunglasses",
    "Backpack",
    "School Bag",
    "Laptop Bag",
    "Travel Bag",
    "Handbag",
    "Watch",
    "Premium Watch",
    "Cap",
    "Sports Cap",
    "Phone Cover",
    "Mobile Stand",
    "Car Mobile Holder",
    "Water Bottle",
    "Lunch Box",
    "Umbrella",
    "Travel Organizer",
    "Keychain",
    "Travel Pouch"

];


/* =====================================================
   CATEGORY FUNCTION
===================================================== */

function getCategory(name) {

    const electronicsWords = [
        "Phone",
        "iPhone",
        "Samsung",
        "OnePlus",
        "Pixel",
        "Redmi",
        "Realme",
        "Vivo",
        "Oppo",
        "Motorola",
        "Earbuds",
        "Speaker",
        "Headphones",
        "Watch",
        "Band",
        "Charger",
        "Cable",
        "Power Bank",
        "Laptop",
        "Tablet",
        "iPad",
        "Keyboard",
        "Mouse",
        "Monitor",
        "Webcam",
        "Printer",
        "Router",
        "SSD",
        "Pen Drive",
        "Memory Card",
        "TV",
        "Projector",
        "Microphone",
        "Ring Light",
        "Tripod",
        "Camera"
    ];

    const clothingWords = [
        "T-Shirt",
        "Shirt",
        "Jeans",
        "Cargo",
        "Track",
        "Hoodie",
        "Sweatshirt",
        "Jacket",
        "Kurta",
        "Shorts",
        "Top",
        "Dress",
        "Kurti",
        "Saree",
        "Leggings"
    ];


    for (const word of electronicsWords) {

        if (name.includes(word)) {
            return "electronics";
        }

    }


    for (const word of clothingWords) {

        if (name.includes(word)) {
            return "clothing";
        }

    }


    return "accessories";
}


/* =====================================================
   CREATE 1000 PRODUCTS
===================================================== */

function createProducts() {

    products = [];

    for (let i = 1; i <= 1000; i++) {

        const baseName =
            productNames[(i - 1) % productNames.length];


        const category =
            getCategory(baseName);


        /* Price */

        let price;


        if (category === "electronics") {

            price =
                499 + ((i * 137) % 75000);

        }

        else if (category === "clothing") {

            price =
                299 + ((i * 89) % 5000);

        }

        else {

            price =
                199 + ((i * 71) % 8000);

        }


        /* Discount */

        const discount =
            5 + (i % 40);


        /* Rating */

        const rating =
            (3.5 + ((i % 15) / 10)).toFixed(1);


        /* Image */

        const image =
            imageSources[(i - 1) % imageSources.length];


        products.push({

            id: i,

            name:
                baseName + " " + i,

            category:
                category,

            price:
                Math.round(price),

            discount:
                discount,

            rating:
                rating,

            image:
                image

        });

    }


    console.log(
        "1000 products created:",
        products.length
    );

}


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(list) {

    const container =
        document.getElementById("productContainer");


    if (!container) {

        console.error(
            "productContainer nahi mila!"
        );

        return;

    }


    container.innerHTML = "";


    if (list.length === 0) {

        container.innerHTML = `
            <div class="no-products">
                <h2>😔 No Products Found</h2>
                <p>Try another search.</p>
            </div>
        `;

        return;

    }


    list.forEach(function(product) {


        const card =
            document.createElement("div");


        card.className =
            "product-card";


        /* Old Price */

        const oldPrice =
            Math.round(
                product.price /
                (1 - product.discount / 100)
            );


        card.innerHTML = `

            <div class="product-image">

                <span class="discount">
                    ${product.discount}% OFF
                </span>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://via.placeholder.com/300x300?text=Product'"
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

                    ⭐
                    ${product.rating}

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


    console.log(
        "Products displayed:",
        list.length
    );

}


/* =====================================================
   SEARCH
===================================================== */

window.searchProducts = function () {

    const input =
        document.getElementById("searchInput");


    if (!input) return;


    const value =
        input.value
            .toLowerCase()
            .trim();


    if (value === "") {

        displayProducts(products);

        return;

    }


    const result =
        products.filter(function(product) {

            return (

                product.name
                    .toLowerCase()
                    .includes(value)

                ||

                product.category
                    .toLowerCase()
                    .includes(value)

            );

        });


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
        products.filter(function(product) {

            return (
                product.category === category
            );

        });


    displayProducts(result);

};


/* =====================================================
   ADD TO CART
===================================================== */

window.addToCart = function (id) {


    const product =
        products.find(function(item) {

            return item.id === id;

        });


    if (!product) {

        return;

    }


    const existing =
        cart.find(function(item) {

            return item.id === id;

        });


    if (existing) {

        existing.quantity++;

    }

    else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();


    alert(
        product.name +
        " cart me add ho gaya 🛒"
    );

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


    cartItems.innerHTML = "";


    let total = 0;

    let count = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

    }


    cart.forEach(function(item) {


        total +=
            item.price * item.quantity;


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

                <p>
                    ₹${item.price.toLocaleString("en-IN")}
                </p>

            </div>


            <div class="cart-controls">

                <button
                    onclick="decreaseQuantity(${item.id})"
                >
                    −
                </button>


                <span>
                    ${item.quantity}
                </span>


                <button
                    onclick="increaseQuantity(${item.id})"
                >
                    +
                </button>


                <button
                    onclick="removeFromCart(${item.id})"
                >
                    🗑️
                </button>

            </div>

        `;


        cartItems.appendChild(div);

    });


    if (cartCount) {

        cartCount.textContent =
            count;

    }


    if (cartTotal) {

        cartTotal.textContent =
            total.toLocaleString("en-IN");

    }

}


/* =====================================================
   INCREASE QUANTITY
===================================================== */

window.increaseQuantity = function (id) {


    const item =
        cart.find(function(product) {

            return product.id === id;

        });


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
        cart.find(function(product) {

            return product.id === id;

        });


    if (!item) return;


    item.quantity--;


    if (item.quantity <= 0) {

        cart =
            cart.filter(function(product) {

                return product.id !== id;

            });

    }


    updateCart();

};


/* =====================================================
   REMOVE FROM CART
===================================================== */

window.removeFromCart = function (id) {


    cart =
        cart.filter(function(product) {

            return product.id !== id;

        });


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
   SHOP NOW
===================================================== */

window.scrollToProducts = function () {


    const section =
        document.querySelector(
            ".products-section"
        );


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

        alert(
            "Pehle cart me product add karo."
        );

        return;

    }


    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (modal) {

        modal.classList.add("active");

    }

};


/* =====================================================
   CLOSE CHECKOUT
===================================================== */

window.closeCheckout = function () {


    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (modal) {

        modal.classList.remove("active");

    }

};


/* =====================================================
   PLACE ORDER
===================================================== */

window.placeOrder = function () {


    const name =
        document.getElementById(
            "customerName"
        ).value.trim();


    const phone =
        document.getElementById(
            "customerPhone"
        ).value.trim();


    const address =
        document.getElementById(
            "customerAddress"
        ).value.trim();


    if (!name || !phone || !address) {

        alert(
            "Name, phone aur address enter karo."
        );

        return;

    }


    alert(
        "Order successfully placed! 🎉"
    );


    cart = [];


    updateCart();


    closeCheckout();

    closeCart();

};


/* =====================================================
   LOGIN MODAL
===================================================== */

window.openAuth = function () {


    const modal =
        document.getElementById(
            "authModal"
        );


    if (modal) {

        modal.classList.add("active");

    }

};


/* =====================================================
   CLOSE LOGIN
===================================================== */

window.closeAuth = function () {


    const modal =
        document.getElementById(
            "authModal"
        );


    if (modal) {

        modal.classList.remove("active");

    }

};


/* =====================================================
   FIREBASE SIGN UP
===================================================== */

window.signup = async function () {

    try {


        const email =
            document.getElementById(
                "signupEmail"
            ).value.trim();


        const password =
            document.getElementById(
                "signupPassword"
            ).value;


        if (!email || !password) {

            alert(
                "Email aur password enter karo."
            );

            return;

        }


        if (!window.firebaseAuth) {

            alert(
                "Firebase load nahi hua. Page refresh karo."
            );

            return;

        }


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
            "Account successfully created! ✅"
        );


        closeAuth();


    }

    catch (error) {

        alert(
            error.message
        );

    }

};


/* =====================================================
   FIREBASE LOGIN
===================================================== */

window.login = async function () {

    try {


        const email =
            document.getElementById(
                "loginEmail"
            ).value.trim();


        const password =
            document.getElementById(
                "loginPassword"
            ).value;


        if (!email || !password) {

            alert(
                "Email aur password enter karo."
            );

            return;

        }


        if (!window.firebaseAuth) {

            alert(
                "Firebase load nahi hua. Page refresh karo."
            );

            return;

        }


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


    }

    catch (error) {

        alert(
            error.message
        );

    }

};


/* =====================================================
   GOOGLE LOGIN
===================================================== */

window.googleLogin = async function () {

    try {


        if (!window.firebaseAuth) {

            alert(
                "Firebase load nahi hua."
            );

            return;

        }


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
            "Google Login Successful! ✅"
        );


        closeAuth();


    }

    catch (error) {

        alert(
            error.message
        );

    }

};


/* =====================================================
   LOGOUT
===================================================== */

window.logout = async function () {

    try {


        if (!window.firebaseAuth) {

            alert(
                "Firebase load nahi hua."
            );

            return;

        }


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


    }

    catch (error) {

        alert(
            error.message
        );

    }

};


/* =====================================================
   START WEBSITE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        console.log(
            "My Store started..."
        );


        createProducts();


        console.log(
            "Total products:",
            products.length
        );


        displayProducts(
            products
        );


        updateCart();


    }
);
