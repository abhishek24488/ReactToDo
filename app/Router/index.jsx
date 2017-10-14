
import {Router, HashRouter, Route} from "react-router-dom";

import firebase from "../firebase/firebase";
import createBrowserHistory from "../History/history";

//var ToDoApp= require('../Components/ToDoApp');
//var Login = require('../Components/Login');
import Login from "../Components/Login";
import ToDoApp from "../Components/ToDoApp";


var history= createBrowserHistory

var requireLogin=(nextState,replace,next)=>{
    if(!firebase.auth().currentUser){
        replace('/');
    }
    next();
}

var redirectIfLoggedIn=(nextState,replace,next)=>{
    if(!firebase.auth().currentUser){
        replace('/todos');
    }
    next();
}


 export default (router) => { 
    <div>
       <Router history={history}>    
            <div>
                <Route path="/"/>
                <Route path ="/todos" component={ToDoApp} onEnter={requireLogin}/>
                <Route exact path="/" component={Login} onEnter={redirectIfLoggedIn}/>              
            </div>
        </Router>
    </div>
};
