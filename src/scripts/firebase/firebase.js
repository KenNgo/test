import firebase from 'firebase';

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: 'AIzaSyCsjOZptxs39BEvSqifL77pRn1BhB-_K7Y',
  authDomain: 'todo-app-6293f.firebaseapp.com',
  databaseURL: 'https://todo-app-6293f.firebaseio.com',
  projectId: 'todo-app-6293f',
  storageBucket: 'todo-app-6293f.appspot.com',
  messagingSenderId: '1082091469672',
};
var fire = firebase.initializeApp(config);
export default fire;