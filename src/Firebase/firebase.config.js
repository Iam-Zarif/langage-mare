// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCl3kYZ7VdFcqbqGZ9wcquVfxpMqx_y-7U",
  authDomain: "mare-auth.firebaseapp.com",
  projectId: "mare-auth",
  storageBucket: "mare-auth.appspot.com",
  messagingSenderId: "563809722035",
  appId: "1:563809722035:web:deadf67e5055b8424ddac6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
