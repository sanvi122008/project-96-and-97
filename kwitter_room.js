
//ADD YOUR FIREBASE LINKS HERE


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyChjjoynp8_oUofISTr2RZsm-bj3FI59jM",
    authDomain: "kwitter-1-b9678.firebaseapp.com",
    databaseURL: "https://kwitter-1-b9678-default-rtdb.firebaseio.com",
    projectId: "kwitter-1-b9678",
    storageBucket: "kwitter-1-b9678.appspot.com",
    messagingSenderId: "935323418349",
    appId: "1:935323418349:web:3e97d22e0f54ffd59a16e4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name",room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Nam'es - " + Room_names);
    row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> #"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
