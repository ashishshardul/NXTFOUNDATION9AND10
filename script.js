const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Login Successful!";
            document.getElementById("logoutBtn").style.display = "block";
        })
        .catch((error) => {
            document.getElementById("message").innerText = error.message;
        });
}

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Signup Successful!";
        })
        .catch((error) => {
            document.getElementById("message").innerText = error.message;
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        document.getElementById("message").innerText = "Logged out!";
        document.getElementById("logoutBtn").style.display = "none";
    });
}
