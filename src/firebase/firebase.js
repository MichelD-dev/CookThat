// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// todo: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA1Z51dGBZKWll6jZbxLQUSUpbELlxmzg",
  authDomain: "cook-that-47386.firebaseapp.com",
  projectId: "cook-that-47386",
  storageBucket: "cook-that-47386.appspot.com",
  messagingSenderId: "1036255711345",
  appId: "1:1036255711345:web:5432f5a6f350f2b9de8bd0"
};
// const firebaseConfig = {
//   apiKey: REACT_APP_FIREBASE_API_KEY,
//   authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: "REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: REACT_APP_FIREBASE_APP_ID
// };

// Initialize Firebase

export const firebase = initializeApp(firebaseConfig)
// On obtient la base de données firestore
export const db = getFirestore()
// On obtient le service d'authentification
export const auth = getAuth()


export const storage = getStorage(firebase)