import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

import { auth } from "./firebaseconfig.js"

const logout = document.querySelector("#logout-btn")

onAuthStateChanged(auth,  (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);

  } else {
    window.location = "login.html"
  }
});

logout.addEventListener('click' , ()=>{
    signOut(auth).then(() => {
        console.log('logout sucessfully');
        window.location = 'login.html'

      }).catch((error) => {
        console.log(error);
        
      });
})

