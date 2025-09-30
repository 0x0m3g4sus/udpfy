import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "udpfy-app.firebaseapp.com",
  projectId: "udpfy-app",
  storageBucket: "udpfy-app.firebasestorage.app",
  messagingSenderId: "1077227101453",
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export default app;