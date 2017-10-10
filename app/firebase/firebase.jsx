import  firebase  from "firebase";

try{
    var config = {
        apiKey: "AIzaSyA7pqLfe70sPiLmphJuVXmEm5fbHmjeGhI",
        authDomain: "abhi-todo.firebaseapp.com",
        databaseURL: "https://abhi-todo.firebaseio.com",
        projectId: "abhi-todo",
        storageBucket: "abhi-todo.appspot.com",
        messagingSenderId: "41378217390"
      };
  firebase.initializeApp(config);
    }
    catch (e){

    }

export var provider = new firebase.auth.EmailAuthProvider(); 
export var githubProvider = new firebase.auth.GithubAuthProvider();
export  var firebaseRef=  firebase.database().ref();
export default firebase;