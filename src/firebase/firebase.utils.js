// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDltI7KnAwti8P65jNVZXU9XL-W-K1_CYM',
  authDomain: 'crwn-db-452c6.firebaseapp.com',
  projectId: 'crwn-db-452c6',
  storageBucket: 'crwn-db-452c6.appspot.com',
  messagingSenderId: '1072403675788',
  appId: '1:1072403675788:web:81791863b28a81896099a9',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore()

const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  console.log('uid', userAuth.uid)
  const userRef = doc(db, 'users', `${userAuth.uid}`)
  const docSnap = await getDoc(userRef)
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
  } else {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(doc(db, 'users', `${userAuth.uid}`), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.error('error creating user', error.message)
    }
  }
  return userRef
}
