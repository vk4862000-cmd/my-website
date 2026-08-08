// ==============================
// PRODUCTS
// ==============================

const products = [

    {
        id: 1,
        name: "Wireless Headphones",
        price: 1499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 1999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id: 3,
        name: "Men's T-Shirt",
        price: 599,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },

    {
        id: 4,
        name: "Running Shoes",
        price: 2499,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
        id: 5,
        name: "Leather Wallet",
        price: 799,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93"
    },

    {
        id: 6,
        name: "Sunglasses",
        price: 999,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
    }

];


// ==============================
// CART
// ==============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ==============================
// DISPLAY PRODUCTS
// ==============================

function displayProducts(productList) {

    const container =
        document.getElementById("productContainer");

    container.innerHTML = "";


    productList.forEach(product => {

        container.innerHTML += `

            <div class="product-card">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="price">
                        ₹${product.price}
                    </p>

                    <button
                        class="add-btn"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        `;

    });

}


// ==============================
// ADD TO CART
// ==============================

function addToCart(id) {

    const product =
        products.find(p => p.id === id);

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


    saveCart();

    alert("Product added to cart 🛒");

}


// ==============================
// SAVE CART
// ==============================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();

}


// ==============================
// UPDATE CART
// ==============================

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    cartItems.innerHTML = "";

    let total = 0;

    let count = 0;


    cart.forEach(item => {

        total +=
            item.price * item.quantity;

        count += item.quantity;


        cartItems.innerHTML += `

            <div class="cart-item">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <p>
                        ₹${item.price}
                    </p>

                </div>


                <div class="quantity">

                    <button
                        onclick="changeQuantity(
                            ${item.id}, -1
                        )"
                    >
                        -
                    </button>

                    ${item.quantity}

                    <button
                        onclick="changeQuantity(
                            ${item.id}, 1
                        )"
                    >
                        +
                    </button>

                </div>

            </div>

        `;

    });


    cartCount.innerText = count;

    cartTotal.innerText = total;

}


// ==============================
// CHANGE QUANTITY
// ==============================

function changeQuantity(id, change) {

    const item =
        cart.find(item => item.id === id);


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(item => item.id !== id);

    }


    saveCart();

}


// ==============================
// OPEN CART
// ==============================

function openCart() {

    document
        .getElementById("cartSidebar")
        .classList.add("active");

}


// ==============================
// CLOSE CART
// ==============================

function closeCart() {

    document
        .getElementById("cartSidebar")
        .classList.remove("active");

}


// ==============================
// CHECKOUT
// ==============================

function openCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }


    document
        .getElementById("checkoutModal")
        .classList.add("active");

}


function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("active");

}


// ==============================
// PLACE ORDER
// ==============================

function placeOrder() {

    const name =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("customerPhone").value;

    const address =
        document.getElementById("customerAddress").value;


    if (!name || !phone || !address) {

        alert("Please fill all details.");

        return;

    }


    let message =
        "🛒 *NEW ORDER*%0A%0A";


    message +=
        "*Customer:* " + name + "%0A";

    message +=
        "*Phone:* " + phone + "%0A";

    message +=
        "*Address:* " + address + "%0A%0A";


    message +=
        "*Products:*%0A";


    let total = 0;


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        message +=
            "• " +
            item.name +
            " x " +
            item.quantity +
            " = ₹" +
            itemTotal +
            "%0A";

    });


    message +=
        "%0A*Total: ₹" + total + "*";


    // CHANGE THIS NUMBER
    const whatsappNumber =
        "919876543210";


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;


    window.open(
        whatsappURL,
        "_blank"
    );

}


// ==============================
// SEARCH
// ==============================

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        function () {

            const search =
                this.value.toLowerCase();


            const filtered =
                products.filter(product =>
                    product.name
                        .toLowerCase()
                        .includes(search)
                );


            displayProducts(filtered);

        }
    );


// ==============================
// CATEGORY FILTER
// ==============================

function filterProducts(category) {

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

}


// ==============================
// SCROLL
// ==============================

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==============================
// INITIALIZE
// ==============================

displayProducts(products);

updateCart();