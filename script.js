// ===============================
// NORTHLINE STUDIO - JAVASCRIPT
// ===============================

// Get elements
const authModal = document.getElementById("authModal");

// ===============================
// OPEN LOGIN POPUP
// ===============================

function openAuth() {
    if (authModal) {
        authModal.classList.add("active");
    }
}

// ===============================
// CLOSE LOGIN POPUP
// ===============================

function closeAuth() {
    if (authModal) {
        authModal.classList.remove("active");
    }
}

// ===============================
// SIGN UP
// ===============================

async function signup() {

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;

    if (!email || !password) {
        alert("Please enter email and password.");
        return;
    }

    try {

        const { createUserWithEmailAndPassword } =
            await import(
                "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
            );

        await createUserWithEmailAndPassword(
            window.firebaseAuth,
            email,
            password
        );

        alert("Account created successfully!");

        closeAuth();

    } catch (error) {

        console.error(error);

        alert(error.message);
    }
}

// ===============================
// LOGIN
// ===============================

async function login() {

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Please enter email and password.");
        return;
    }

    try {

        const { signInWithEmailAndPassword } =
            await import(
                "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
            );

        await signInWithEmailAndPassword(
            window.firebaseAuth,
            email,
            password
        );

        alert("Login successful!");

        closeAuth();

    } catch (error) {

        console.error(error);

        alert(error.message);
    }
}

// ===============================
// GOOGLE LOGIN
// ===============================

async function googleLogin() {

    try {

        const {
            GoogleAuthProvider,
            signInWithPopup
        } = await import(
            "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
        );

        const provider = new GoogleAuthProvider();

        await signInWithPopup(
            window.firebaseAuth,
            provider
        );

        alert("Google login successful!");

        closeAuth();

    } catch (error) {

        console.error(error);

        alert(error.message);
    }
}

// ===============================
// LOGOUT
// ===============================

async function logout() {

    try {

        const { signOut } =
            await import(
                "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
            );

        await signOut(window.firebaseAuth);

        alert("Logged out successfully!");

    } catch (error) {

        console.error(error);

        alert(error.message);
    }
}

// ===============================
// FOOTER YEAR
// ===============================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ===============================
// CLOSE MODAL BY CLICKING OUTSIDE
// ===============================

if (authModal) {

    authModal.addEventListener("click", function(event) {

        if (event.target === authModal) {
            closeAuth();
        }

    });

}
