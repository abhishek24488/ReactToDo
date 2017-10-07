//var redux = require('redux');

//var {searchTextReducer,showCompletedReducer,todosReducer}= require('reducers');
import * as redux from "redux";
import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from "reducers";


export var configure=()=> {
    var reducer = redux.combineReducers({
        searchText : searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )) ;

    return store
};