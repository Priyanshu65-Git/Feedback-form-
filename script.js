// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCKOm81xc_vpPt_weAWNjlMFci68NmecZg",
  authDomain: "feedbackapp-ca2a8.firebaseapp.com",
  databaseURL: "https://feedbackapp-ca2a8-default-rtdb.firebaseio.com",
  projectId: "feedbackapp-ca2a8",
  storageBucket: "feedbackapp-ca2a8.appspot.com",
  messagingSenderId: "183244119696",
  appId: "1:183244119696:web:5deb401c680ceb4f7e4215"
};

// Initialize Firebase (using v8 style)
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Form submit handler
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const rating = document.getElementById('rating').value;
  const comment = document.getElementById('comment').value;

  //  Push to Firebase Realtime Database
  db.ref("feedbacks").push({
    name: name,
    rating: rating,
    comment: comment
  });

  alert("Thank you for your feedback, " + name + "!");

  // Optional: Reset form
  document.getElementById('feedbackForm').reset();
});
