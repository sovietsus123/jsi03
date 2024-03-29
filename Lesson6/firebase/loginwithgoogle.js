import { auth } from './config.js';
import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const provider = new GoogleAuthProvider();
const loginwithgooglebtn = document.getElementById('btnGoogle');

const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    const email = user.email;
    const displayName = user.displayName;
    const photoURL = user.photoURL;
    const userProfile = {
        email,
        displayName,
        photoURL
    }
    localStorage.setItem("currentUser", JSON.stringify(userProfile));
    window.location = "./index.html";
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

loginwithgooglebtn.addEventListener('click', handleLoginWithGoogle);