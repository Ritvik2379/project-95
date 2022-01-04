
// ADD YOUR FIREBASE LINKS
firebaseConfig = {
  apiKey: "AIzaSyBvoFnQPp6Ied9DBhjOyfB-CvHIRz8_y4w",
  authDomain: "ritvik-d2aec.firebaseapp.com",
  databaseURL: "https://ritvik-d2aec-default-rtdb.firebaseio.com",
  projectId: "ritvik-d2aec",
  storageBucket: "ritvik-d2aec.appspot.com",
  messagingSenderId: "345492588887",
  appId: "1:345492588887:web:103438536c36242cff9612",
  measurementId: "G-X9GDP2MQHR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


