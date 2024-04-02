
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMs5vFTDZSFXznachwGsdFjyQc0oqEkPs",
  authDomain: "online-connect-9bf51.firebaseapp.com",
  databaseURL: "https://online-connect-9bf51-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "online-connect-9bf51",
  storageBucket: "online-connect-9bf51.appspot.com",
  messagingSenderId: "649331692065",
  appId: "1:649331692065:web:52a8fb9d828c46db108960",
  measurementId: "G-K3TKSTV339"
};

firebase.initializeApp(firebaseConfig);

const user = firebase.auth().currentUser;
    
    if (user) {
      const userEmail = user.email;
      const uid = user.uid;
      const displayName = user.displayName;
      const photoURL = user.photoURL;
    
      
      user_name = document.querySelectorAll(".user_name");
      user_name.innerHTML = displayName;
      
      email = document.querySelectorAll(".email");
      email.innerHTML = userEmail;
      
      imgDiv = document.querySelector(".imgDiv");
      imgDiv.style.background = "url('photoURL')"
    
      profileDiv = document.querySelector(".profileDiv");
      profileDiv.style.background = "url('photoURL')"
    
      console.log("User email:", email);
      console.log("User UID:", uid);
      console.log("User display name:", displayName);
      console.log("User photo URL:", photoURL);
      
    } else {
      console.log("No user signed in.");
    }
    
    
    

copy = document.querySelector(".copy");
copy.onclick = function(){
  var api = "f730F9IHY2d8";
  var tempInput = document.createElement("input");
  tempInput.value = api;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  successPrompt()
}


// adding js code for success prompt

function successPrompt(){
  success_alert = document.querySelector(".success_alert");
  success_alert.style.display = 'flex';
  success_alert.classList.remove("hide");
  success_alert.classList.add("show");
  setTimeout(function(){
    success_alert.classList.remove("show");
    success_alert.classList.add("hide");
  },2000)
}

function removePrompt() {
  success_alert = document.querySelector(".success_alert");
  success_alert.style.display = 'flex';
  success_alert.classList.remove("show");
  success_alert.classList.add("hide");
}

close = document.querySelector(".close")
close.onclick = function(){
  removePrompt()
}


// adding js code for the page of Profile

change_value = document.getElementById("change_value");
select = document.querySelector(".select");
select.addEventListener('click', function(){
  prompt("Enter your New " + change_value.value);
  successPrompt()
})
