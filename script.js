const authModal = document.getElementById("authModal");


// SIGN IN BUTTON
const signInButton = document.querySelector(".account-button");

if (signInButton) {
    signInButton.addEventListener("click", function () {
        authModal.classList.add("active");
    });
}


// CLOSE BUTTON
const closeButton = document.querySelector(".auth-close");

if (closeButton) {
    closeButton.addEventListener("click", function () {
        authModal.classList.remove("active");
    });
}


// CLICK OUTSIDE MODAL TO CLOSE
if (authModal) {
    authModal.addEventListener("click", function (event) {

        if (event.target === authModal) {
            authModal.classList.remove("active");
        }

    });
}


// SIGN UP
window.signup = async function () {

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

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

        authModal.classList.remove("active");

    } catch (error) {

        alert(error.message);

    }
};


// LOGIN
window.login = async function () {

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

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

        authModal.classList.remove("active");

    } catch (error) {

        alert(error.message);

    }
};


// GOOGLE LOGIN
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

        authModal.classList.remove("active");

    } catch (error) {

        alert(error.message);

    }
};


// LOGOUT
window.logout = async function () {

    try {

        const { signOut } = await import(
            "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js"
        );

        await signOut(window.firebaseAuth);

        alert("Logout successful!");

    } catch (error) {

        alert(error.message);

    }
};
