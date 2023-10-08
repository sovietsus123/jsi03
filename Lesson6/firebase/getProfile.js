import { auth } from './config.js';
import { updateProfile, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const Name = document.getElementById('fullname');
const Image = document.getElementById('image');
const user = auth.currentUser;

const handleGetProfile = () => {
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
          Name.innerHTML = "Name: " + user.displayName;
          Image.src = user.photoURL;

        }
      });
}
handleGetProfile();
