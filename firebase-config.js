
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD8C-qscj7-zFUTxYd37esMzM3YzQh8nCQ",
    authDomain: "stud-notes.firebaseapp.com",
    projectId: "stud-notes",
    storageBucket: "stud-notes.firebasestorage.app",
    messagingSenderId: "501942156264",
    appId: "1:501942156264:web:1acfb193a420f1391bc25d",
    measurementId: "G-D3E7KJ48RV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
