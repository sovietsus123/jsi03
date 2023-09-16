import { auth } from './config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const welcometext = document.getElementById("welcome-text"); 

const name = () => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          if(user.email == null) {
            welcometext.textContent = "Welcome anonymous to home page";
          }else {
            welcometext.textContent = `Welcome ${user.email} to home page`;
          }
          console.log(uid)
          console.log(user.email)
          // ...
        } else {
            window.location = "./login.html";
        }
      });
}
name();