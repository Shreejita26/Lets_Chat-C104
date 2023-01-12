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
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!!";

function addRoom(){
    room_name =document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="Chat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name -"+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
   
   });});}

function redirectToRoomName(name){
   console.log(name);
localStorage.setItem("room_name",name);
window.location="Chat_room.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";

}