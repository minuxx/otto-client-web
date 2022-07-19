// import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// import {getAuth} from 'firebase/auth'

import firebase from "firebase/compat/app"
import "firebase/compat/storage"


const firebaseConfig = {
  apiKey: 'AIzaSyD_tAk5ZLaBTXLKSsDnI8eeuDMSy_SO9rU',
  authDomain: 'riderranking.firebaseapp.com',
  projectId: 'riderranking',
  storageBucket: 'riderranking.appspot.com',
  messagingSenderId: '472961625251',
  appId: '1:472961625251:web:500c8039476df5207ee316',
  measurementId: 'G-GT7W7R741F'
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const authService = getAuth(app);
// export default app;


const app = firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export default firebase