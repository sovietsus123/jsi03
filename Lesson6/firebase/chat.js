import { db } from "./config.js"
import { auth } from './config.js';
import { collection, query, getDocs, addDoc, serverTimestamp, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

let messagesList = []

const ref = collection(db, "messages");
const q = query(ref, orderBy('createdAt'));

const inputMessage = document.getElementById("input-message");
const sendBtn = document.getElementById("send-btn");

const sender = localStorage.getItem("currentUser");
const userProfile = JSON.parse(sender);

// add the message
const addMessage = async() => {
    const message = inputMessage.value;
    await addDoc(ref, {
        content: message,
        sender: userProfile.displayName ? userProfile.displayName : userProfile.email,
        image: userProfile.photoUrl ? userProfile.photoUrl : 'https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png',
        createdAt: serverTimestamp(),
    });
}
sendBtn.addEventListener("click", addMessage);

//render messages
const messageDiv = document.getElementById("messages-list");
const renderMessages = () => {
  messageDiv.innerHTML = "";
  messagesList.forEach((message) => {
    const message_div = document.createElement("div");
    message_div.className = "message";
    const image = document.createElement("img")
    const msgElm = document.createElement('p');
    image.className = "rounded-circle"
    image.src = message.image;
    msgElm.textContent = `${message.sender}: ${message.content}`
    message_div.appendChild(msgElm);
    message_div.appendChild(image);
    messageDiv.appendChild(message_div);
  });
}

onSnapshot(q, (querySnapshot) => {
  messagesList = [];
  querySnapshot.forEach((doc) => {
      messagesList.push(doc.data());
  });
  renderMessages();
});