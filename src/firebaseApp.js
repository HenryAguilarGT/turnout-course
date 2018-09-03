import firebase from 'firebase'

const config = {
   apiKey: "AIzaSyDzB2EKWzCxj6EWW4987evuJC-ZJXTdGTI",
   authDomain: "turnout-faa33.firebaseapp.com",
   databaseURL: "https://turnout-faa33.firebaseio.com",
   projectId: "turnout-faa33",
   storageBucket: "turnout-faa33.appspot.com",
   messagingSenderId: "25105606925"
 };

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
