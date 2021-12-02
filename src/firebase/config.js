import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyB8FelBQp-gtDNJlieI-dd67r0r0v59RMM',
  authDomain: 'e-commerce-react-e9b39.firebaseapp.com',
  projectId: 'e-commerce-react-e9b39',
  storageBucket: 'e-commerce-react-e9b39.appspot.com',
  messagingSenderId: '21033273454',
  appId: '1:21033273454:web:d6804c8e5dcf36924cbe7f',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
