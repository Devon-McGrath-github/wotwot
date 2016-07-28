import firebase from 'firebase'
firebase.initializeApp (
  {
    apiKey: "AIzaSyA1xJpVFCwyiCCTfzXIgiri7a6eLd8vnzM",
    authDomain: "test-9eee4.firebaseapp.com",
    databaseURL: "https://test-9eee4.firebaseio.com",
    uiConfig: 'uiConfig',
    storageBucket: 'gs://test-9eee4.appspot.com'
  })
export const db = firebase.database()
var uiConfig = {
  // Query parameter name for mode.
  'queryParameterForWidgetMode': 'mode',
  // Query parameter name for sign in success url.
  'queryParameterForSignInSuccessUrl': 'signInSuccessUrl',
  'signInSuccessUrl': '/',
  'signInOptions': [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  'tosUrl': '<your-tos-url>',
  'callbacks': {
    'signInSuccess': (currentUser, credential, redirectUrl) => {
      debugger;
      // Do something.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    }
  }
};
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
export const firebaseStart = () => {
  ui.start('#firebaseui-auth-container', uiConfig);
}
export const auth = firebase.auth()
export const storage = firebase.storage()
