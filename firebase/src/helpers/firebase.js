import firebase from 'firebase';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDvng7fRjRiLpAinfqIJc_bI_WWilipmT0',
  authDomain: 'fir-quickstart-1d1f5.firebaseapp.com',
  databaseURL: 'https://fir-quickstart-1d1f5.firebaseio.com'
};
const GOOGLE_AUTH_PROVIDER = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(FIREBASE_CONFIG);

export function login() {
    firebase.auth().signInWithPopup(GOOGLE_AUTH_PROVIDER).then(result => {
    // This gives you a Google Access Token. You can use it to access the Google API
    // For using API provided by firebase itself, there is no need to use token below
    const token = result.credential.accessToken;
    // The signed-in user info, such as avatar
    const user = result.user;
  }).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

window.firebase = firebase;

setInterval(function () {
  // console.log(firebase.auth().currentUser);
}, 500);
