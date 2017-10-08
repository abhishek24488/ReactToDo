import  firebase  from "firebase";

try{
    var config = {
        apiKey: "AIzaSyCpPvYzwiH1_47KzaltpRDiJHvt3LcCV0k",
        authDomain: "todo-app-175f2.firebaseapp.com",
        databaseURL: "https://todo-app-175f2.firebaseio.com",
        projectId: "todo-app-175f2",
        storageBucket: "todo-app-175f2.appspot.com",
        messagingSenderId: "271805320127"
      };
  firebase.initializeApp(config);
    }
    catch (e){

    }

export var githubProvider = new firebase.auth.GithubAuthProvider();
export  var firebaseRef=  firebase.database().ref();
export default firebase;