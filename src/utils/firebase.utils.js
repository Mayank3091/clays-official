import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCQo1OUl94ogRhHglNi4dn5t5te1ofSFY8',
  authDomain: 'clays-official.firebaseapp.com',
  projectId: 'clays-official',
  storageBucket: 'clays-official.appspot.com',
  messagingSenderId: '832440635162',
  appId: '1:832440635162:web:acbffe8d330226bdb2e6a3',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const docUserRef = doc(db, 'users', userAuth.uid);
  console.log(docUserRef);

  const userSnapshot = await getDoc(docUserRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(docUserRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return docUserRef;
};
