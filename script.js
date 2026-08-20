// ================================
// AUTH MODAL
// ================================

const authModal = document.getElementById("authModal");


// OPEN LOGIN POPUP
window.openAuth = function () {
    if (authModal) {
        authModal.classList.add("active");
    }
};


// CLOSE LOGIN POPUP
window.closeAuth = function () {
    if (authModal) {
        authModal.classList.remove("active");
    }
};


// CLOSE WHEN CLICKING OUTSIDE
if (authModal) {
    authModal.addEventListener("click", function (event) {

        if (event.target === authModal) {
            authModal.classList.remove("active");
        }

    });
}


// ================================
// SIGN UP
// ================================

window.signup = async function () {

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;

    if (!email || !password) {
        alert("Email aur password enter karo.");
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

        alert("Account successfully created!");

        closeAuth();

    } catch (error) {

        console.error(error);
        alert(error.message);

    }
};


// ================================
// LOGIN
// ================================

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

        alert("Login successful!");

        closeAuth();

    } catch (error) {

        console.error(error);
        alert(error.message);

    }
};


// ================================
// GOOGLE LOGIN
// ================================

window.googleLogin = async function () {

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
};


// ================================
// LOGOUT
// ================================

window.logout = async function () {

    try {

        const {
            signOut
        } = await import(
            "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
        );

        await signOut(window.firebaseAuth);

        alert("Logout successful!");

    } catch (error) {

        console.error(error);
        alert(error.message);

    }
};
