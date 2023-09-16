import { auth } from './config.js';
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const signedInAnoymousbtn = document.getElementById('signedInanoymous-btn');

const signedInAnoymous = () => {
    signInAnonymously(auth)
      .then(user => {
            alert(' signed in as anonymous');
            window.location = "./index.html";
        })
      .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode);
        });
}

signedInAnoymousbtn.addEventListener('click', signedInAnoymous);