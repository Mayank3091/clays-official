import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => {
  return signInWithPopup(auth, googleProvider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additional = {}) => {
  if (!userAuth) return;

  const docUserRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(docUserRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(docUserRef, {
        displayName,
        email,
        createdAt,
        ...additional,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return docUserRef;
};

export const createAuthoUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const LoggingWithEmailandPass = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const authStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
