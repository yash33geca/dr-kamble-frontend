import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyBudNYdmcDNzEbdo2XkDuwASIJdKEThHY8",
  authDomain: "my-doctor-d9d7b.firebaseapp.com",
  databaseURL: "https://my-doctor-d9d7b-default-rtdb.firebaseio.com",
  projectId: "my-doctor-d9d7b",
  storageBucket: "my-doctor-d9d7b.firebasestorage.app",
  messagingSenderId: "362356097176",
  appId: "1:362356097176:web:63e190ae6d79d60b4650ed",
  measurementId: "G-ZZH9ECS32N"
};

const app = initializeApp(firebaseConfig)
 
export const auth = getAuth(app)
export const database = getDatabase(app)
export const googleProvider = new GoogleAuthProvider()
