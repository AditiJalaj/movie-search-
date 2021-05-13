import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyATkttrNdSFZnZJYHu3fHFudE0NmrJwq7M",
    authDomain: "movie-search-backend.firebaseapp.com",
    projectId: "movie-search-backend",
    storageBucket: "movie-search-backend.appspot.com",
    messagingSenderId: "42082212850",
    appId: "1:42082212850:web:60b1bcb7d09620d04fa96b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore()

  export default db