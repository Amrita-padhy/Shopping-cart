import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCREBiajHFIUySSWF2bnkREM5QA37gIBFU",
  authDomain: "qudestek-task.firebaseapp.com",
  projectId: "qudestek-task",
  storageBucket: "qudestek-task.appspot.com",
  messagingSenderId: "171220187689",
  appId: "1:171220187689:web:1ae9ba1d52e3a6274fba38",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
