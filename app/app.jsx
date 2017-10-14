var React =require('react');
var ReactDOM = require('react-dom');
var {Provider}= require('react-redux');

//debugger;
import firebase from "../app/firebase/firebase";
import createBrowserHistory from "../app/History/history";
import {Router, HashRouter, Route} from "react-router-dom";
import router from "../app/Router/index";


var actions= require('actions');
var store= require('configureStore').configure();


import ToDoApp from 'ToDoApp';
import Login from 'Login';
var history= createBrowserHistory

firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
        //store.dispatch(actions.login(user.uid));
        store.dispatch(actions.startAddTodos());
        history.push('/todos');        
    } else {
        store.dispatch(actions.logout());
        history.push('/');       
    }
});


/*var IntializeTodos = TodoApi.getTodos(); 
store.dispatch(actions.addTodos(IntializeTodos));
store.subscribe(()=>{
    var state = store.getState();
    console.log('New State',state);
    TodoApi.setTodos(state.todos);
});  */


require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.css');

$(document).foundation();

require('style-loader!css-loader!sass-loader!!../app/style/app.scss');
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


ReactDOM.render(
    <Provider store={store}>             
        <Router history={history}>    
            <div>
                <Route path="/"/>
                <Route path ="/todos" component={ToDoApp} onEnter={requireLogin}/>
                <Route exact path="/" component={Login} onEnter={redirectIfLoggedIn}/>              
            </div>
        </Router>
    </Provider>
            ,    
    document.getElementById('app')
); 

