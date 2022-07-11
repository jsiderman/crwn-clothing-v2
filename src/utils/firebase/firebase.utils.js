import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCkErSm5XexaryeUMlnJm0BZIJoHx5ivbQ',
  authDomain: 'react-ecomm-6d1eb.firebaseapp.com',
  projectId: 'react-ecomm-6d1eb',
  storageBucket: 'react-ecomm-6d1eb.appspot.com',
  messagingSenderId: '37621240789',
  appId: '1:37621240789:web:c5e02a8fd80c385d70e35c',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
