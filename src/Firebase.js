import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDeWDgXzQgtLYd5_QF5QZv5Jmij5HHja4Y",
    authDomain: "todo-app-33009.firebaseapp.com",
    projectId: "todo-app-33009",
    storageBucket: "todo-app-33009.appspot.com",
    messagingSenderId: "493519634083",
    appId: "1:493519634083:web:d6992dcffcd76fe2038916"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
