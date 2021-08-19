// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOkIYKvTUEV_Sq_h0Ix4Xz2ZNZP0nt5SY",
    authDomain: "c93-practice-activity.firebaseapp.com",
    databaseURL: "https://c93-practice-activity-default-rtdb.firebaseio.com",
    projectId: "c93-practice-activity",
    storageBucket: "c93-practice-activity.appspot.com",
    messagingSenderId: "289393497916",
    appId: "1:289393497916:web:69250bc1a393a0866ab039"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name= document.getElementById("text_input1").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }