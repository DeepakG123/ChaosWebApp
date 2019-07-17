import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBT3sRryVV0APlRS9Hcqb6-LsgcSSSdw4g",
    authDomain: "caas-a3e3c.firebaseapp.com",
    databaseURL: "https://caas-a3e3c.firebaseio.com",
    projectId: "caas-a3e3c",
    storageBucket: "",
    messagingSenderId: "170546946739",
    appId: "1:170546946739:web:71f357a88b071e0b"
  };
  // Initialize Firebase
var fir = firebase.initializeApp(firebaseConfig);

export default fir;