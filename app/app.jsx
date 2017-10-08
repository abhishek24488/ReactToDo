var React =require('react');
var ReactDOM = require('react-dom');
var {Provider}= require('react-redux');
import { Router, Route,Switch, HashRouter} from 'react-router-dom';
import {browserHistory} from "react-router";

//debugger;
import firebase from "../app/firebase/firebase";
var ToDoApp= require('ToDoApp');
var actions= require('actions');
//var applicationStyles = require('applicationStyles');
var store= require('configureStore').configure();
var TodoApi = require('TodoApi');
var Login = require('Login');

firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
        browserHistory.push('/todos');
    } else {
        browserHistory.push('/');
    }

});

var IntializeTodos = TodoApi.getTodos();

store.dispatch(actions.addTodos(IntializeTodos));
store.subscribe(()=>{
    var state = store.getState();
    console.log('New State',state);
    TodoApi.setTodos(state.todos);
}); 


require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.css');

$(document).foundation();

require('style-loader!css-loader!sass-loader!!../app/style/app.scss');

ReactDOM.render(
            <Provider store={store}>
                <Route history={history}>
                    <div>
                        <Route path="/"/>
                        <Route path ="/todos" component={ToDoApp}/>
                        <Route exact path="/" component={Login}/>              
                    </div>
                 </Route>
            </Provider>
            ,    
    document.getElementById('app')
); 

