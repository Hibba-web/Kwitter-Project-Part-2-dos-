// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA6qY0OvblXJy8ONk7WSMR5dEIKmOdpGjk",
      authDomain: "kwitter-project-427ef.firebaseapp.com",
      databaseURL: "https://kwitter-project-427ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-427ef",
      storageBucket: "kwitter-project-427ef.appspot.com",
      messagingSenderId: "680496442265",
      appId: "1:680496442265:web:a143725417f83940474108"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name_welcome").innerHTML = "Welcome  " + user_name + "  !";

    
