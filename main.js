const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDxBXchuAv8px0ZlziNWVGkYJyE5uMfelI",
    authDomain: "auth-form-89a5e.firebaseapp.com",
    projectId: "auth-form-89a5e",
    storageBucket: "auth-form-89a5e.appspot.com",
    messagingSenderId: "800339173862",
    appId: "1:800339173862:web:4f1783d50b3843a6937627"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            alert("You are Signed Up!");
            window.location.href = "https://www.google.com/"; // Change this to your website
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            alert("You are Signed In!");
            window.location.href = "http://127.0.0.1:5500/project1/index.html"; // Change this to your website
        })
        .catch((error) => {
            alert(error.message);
        });
}