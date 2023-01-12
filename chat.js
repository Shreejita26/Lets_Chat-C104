// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



