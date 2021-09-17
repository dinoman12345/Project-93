
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCgSTRpqTDEcFvH7Esed3crCDsWIwS5Bdc",
      authDomain: "dinoter-e9c26.firebaseapp.com",
      databaseURL: "https://dinoter-e9c26-default-rtdb.firebaseio.com/",
      projectId: "dinoter-e9c26",
      storageBucket: "dinoter-e9c26.appspot.com",
      messagingSenderId: "734177772573",
      appId: "1:734177772573:web:3b0bd9fc1df34650eff2f4",
      measurementId: "G-C2V9SKGQHX"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    y=localStorage.getItem("username");
    document.getElementById("dijno")
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
