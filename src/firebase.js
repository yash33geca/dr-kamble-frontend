import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// ─────────────────────────────────────────────────────────────────────────────
// TODO: Replace these placeholder values with your actual Firebase project config.
//
// How to get your config:
//   1. Go to https://console.firebase.google.com
//   2. Create a project (or open an existing one)
//   3. Go to Project Settings → Your apps → Add app → Web (</>)
//   4. Register the app and copy the firebaseConfig object below
//   5. In Firebase console → Authentication → Sign-in method → Enable Google
// ─────────────────────────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyBudNYdmcDNzEbdo2XkDuwASIJdKEThHY8",
  authDomain: "my-doctor-d9d7b.firebaseapp.com",
  projectId: "my-doctor-d9d7b",
  storageBucket: "my-doctor-d9d7b.firebasestorage.app",
  messagingSenderId: "362356097176",
  appId: "1:362356097176:web:63e190ae6d79d60b4650ed",
  measurementId: "G-ZZH9ECS32N"
};

const app = initializeApp(firebaseConfig)
 
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()