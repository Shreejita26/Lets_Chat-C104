// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDHVQJUaEZschbDNUMi3cWPPWVkIyCD2lA",
    authDomain: "let-s-chat-f0c1d.firebaseapp.com",
    databaseURL: "https://let-s-chat-f0c1d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-f0c1d",
    storageBucket: "let-s-chat-f0c1d.appspot.com",
    messagingSenderId: "487546944189",
    appId: "1:487546944189:web:245cbc672ac822c9d015d4"
  };
  
  // Initialize Firebase
 firebase. initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");
 function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
 }