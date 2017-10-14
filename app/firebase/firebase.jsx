import  firebase  from "firebase";

try{
    var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,        
        projectId: "abhi-todo",
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: "41378217390"
      };
  firebase.initializeApp(config);
    }
    catch (e){

    }

export var provider = new firebase.auth.EmailAuthProvider(); 
//export var githubProvider = new firebase.auth.GithubAuthProvider();
export  var firebaseRef=  firebase.database().ref();
export default firebase;