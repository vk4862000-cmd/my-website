/* =========================================
   MY STORE - PRODUCTS
========================================= */

const products = [];

const productNames = [
    "Smartphone",
    "5G Smartphone",
    "Android Phone",
    "Bluetooth Speaker",
    "Wireless Earbuds",
    "Smart Watch",
    "Gaming Headphones",
    "Power Bank",
    "Fast Charger",
    "USB Cable",
    "Laptop",
    "Gaming Laptop",
    "Tablet",
    "Keyboard",
    "Gaming Mouse",
    "Monitor",
    "Webcam",
    "Printer",
    "WiFi Router",
    "SSD",
    "Pen Drive",
    "Memory Card",
    "Smart TV",
    "LED TV",
    "Projector",
    "Microphone",
    "Tripod",
    "Ring Light",

    "Men T-Shirt",
    "Premium T-Shirt",
    "Polo T-Shirt",
    "Oversized T-Shirt",
    "Men Shirt",
    "Formal Shirt",
    "Casual Shirt",
    "Jeans",
    "Slim Fit Jeans",
    "Cargo Pants",
    "Track Pants",
    "Hoodie",
    "Sweatshirt",
    "Jacket",
    "Winter Jacket",
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

    "Wallet",
    "Leather Wallet",
    "Belt",
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
    "Travel Organizer"
];


/* =========================================
   CATEGORY
========================================= */

function getCategory(name) {

    if (
        name.includes("Phone") ||
        name.includes("Laptop") ||
        name.includes("Speaker") ||
        name.includes("Earbuds") ||
        name.includes("Watch") ||
        name.includes("Charger") ||
        name.includes("Cable") ||
        name.includes("Tablet") ||
        name.includes("Keyboard") ||
        name.includes("Mouse") ||
        name.includes("Monitor") ||
        name.includes("Printer") ||
        name.includes("Router") ||
        name.includes("SSD") ||
        name.includes("TV") ||
        name.includes("Projector") ||
        name.includes("Microphone") ||
        name.includes("Tripod") ||
        name.includes("Ring Light") ||
        name.includes("Power Bank") ||
        name.includes("Pen Drive") ||
        name.includes("Memory Card")
    ) {
        return "electronics";
    }

    if (
        name.includes("T-Shirt") ||
        name.includes("Shirt") ||
        name.includes("Jeans") ||
        name.includes("Cargo") ||
        name.includes("Track") ||
        name.includes("Hoodie") ||
        name.includes("Sweatshirt") ||
        name.includes("Jacket") ||
        name.includes("Kurta") ||
        name.includes("Shorts") ||
        name.includes("Top") ||
        name.includes("Dress") ||
        name.includes("Kurti") ||
        name.includes("Saree") ||
        name.includes("Leggings")
    ) {
        return "clothing";
    }

    return "accessories";
}


/* =========================================
   CREATE 1000 PRODUCTS
========================================= */

for (let i = 1; i <= 1000; i++) {

    const baseName =
        productNames[(i - 1) % productNames.length];

    const category =
        getCategory(baseName);

    const price =
        299 + ((i * 137) % 45000);

    const discount =
        5 + (i % 55);

    products.push({

        id: i,

        name:
            baseName + " " + i,

        category:
            category,

        price:
            price,

        discount:
            discount,

        rating:
            (3.5 + ((i % 15) / 10)).toFixed(1)

    });
}


/* =========================================
   PRODUCT CONTAINER
========================================= */

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


    list.forEach(function(product) {

        const card =
            document.createElement("div");

        card.className =
            "product-card";


        const oldPrice =
            Math.round(
                product.price /
                (1 - product.discount / 100)
            );


        card.innerHTML = `

            <div class="product-image">

                <div class="product-icon">
                    🛍️
                </div>

                <span class="discount">
                    ${product.discount}% OFF
                </span>

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


/* =========================================
   SEARCH
========================================= */

window.searchProducts = function() {

    const input =
        document.getElementById("searchInput");

    const value =
        input.value.toLowerCase().trim();


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


/* =========================================
   FILTER
========================================= */

window.filterProducts = function(category) {

    if (category === "all") {

        displayProducts(products);

        return;
    }


    const result =
        products.filter(function(product) {

            return product.category === category;

        });


    displayProducts(result);
};


/* =========================================
   CART
========================================= */

let cart = [];


window.addToCart = function(id) {

    const product =
        products.find(function(item) {

            return item.id === id;

        });


    if (!product) return;


    const existing =
        cart.find(function(item) {

            return item.id === id;

        });


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
        product.name +
        " cart me add ho gaya 🛒"
    );
};


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    let total = 0;

    let count = 0;


    if (!cartItems) return;


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

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

            <strong>
                ${item.name}
            </strong>

            <p>
                ₹${item.price.toLocaleString("en-IN")}
            </p>

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


/* =========================================
   CART QUANTITY
========================================= */

window.increaseQuantity = function(id) {

    const item =
        cart.find(function(product) {

            return product.id === id;

        });


    if (item) {

        item.quantity++;

        updateCart();

    }
};


window.decreaseQuantity = function(id) {

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


window.removeFromCart = function(id) {

    cart =
        cart.filter(function(product) {

            return product.id !== id;

        });


    updateCart();
};


/* =========================================
   CART OPEN / CLOSE
========================================= */

window.openCart = function() {

    const cartSidebar =
        document.getElementById("cartSidebar");


    if (cartSidebar) {

        cartSidebar.classList.add("active");

    }
};


window.closeCart = function() {

    const cartSidebar =
        document.getElementById("cartSidebar");


    if (cartSidebar) {

        cartSidebar.classList.remove("active");

    }
};


/* =========================================
   SHOP NOW
========================================= */

window.scrollToProducts = function() {

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


/* =========================================
   CHECKOUT
========================================= */

window.openCheckout = function() {

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


window.closeCheckout = function() {

    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (modal) {

        modal.classList.remove("active");

    }
};


/* =========================================
   ORDER
========================================= */

window.placeOrder = function() {

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


/* =========================================
   LOGIN MODAL
========================================= */

window.openAuth = function() {

    const modal =
        document.getElementById(
            "authModal"
        );


    if (modal) {

        modal.classList.add("active");

    }
};


window.closeAuth = function() {

    const modal =
        document.getElementById(
            "authModal"
        );


    if (modal) {

        modal.classList.remove("active");

    }
};


/* =========================================
   FIREBASE SIGNUP
========================================= */

window.signup = async function() {

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


        const firebaseAuth =
            window.firebaseAuth;


        if (!firebaseAuth) {

            alert(
                "Firebase abhi load nahi hua. Page refresh karo."
            );

            return;
        }


        const {
            createUserWithEmailAndPassword
        } = await import(
            "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
        );


        await createUserWithEmailAndPassword(
            firebaseAuth,
            email,
            password
        );


        alert(
            "Account successfully created! ✅"
        );


        closeAuth();


    } catch (error) {

        alert(
            error.message
        );

    }
};


/* =========================================
   FIREBASE LOGIN
========================================= */

window.login = async function() {

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


        const firebaseAuth =
            window.firebaseAuth;


        if (!firebaseAuth) {

            alert(
                "Firebase abhi load nahi hua. Page refresh karo."
            );

            return;
        }


        const {
            signInWithEmailAndPassword
        } = await import(
            "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
        );


        await signInWithEmailAndPassword(
            firebaseAuth,
            email,
            password
        );


        alert(
            "Login successful! ✅"
        );


        closeAuth();


    } catch (error) {

        alert(
            error.message
        );

    }
};


/* =========================================
   GOOGLE LOGIN
========================================= */

window.googleLogin = async function() {

    try {

        const firebaseAuth =
            window.firebaseAuth;


        if (!firebaseAuth) {

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
            firebaseAuth,
            provider
        );


        alert(
            "Google Login Successful! ✅"
        );


        closeAuth();


    } catch (error) {

        alert(
            error.message
        );

    }
};


/* =========================================
   LOGOUT
========================================= */

window.logout = async function() {

    try {

        const firebaseAuth =
            window.firebaseAuth;


        const { signOut } =
            await import(
                "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
            );


        await signOut(firebaseAuth);


        alert(
            "Logout successful! 👋"
        );


    } catch (error) {

        alert(
            error.message
        );

    }
};


/* =========================================
   START WEBSITE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "My Store JavaScript started."
        );

        console.log(
            "Total products:",
            products.length
        );


        displayProducts(products);

        updateCart();

    }
);
