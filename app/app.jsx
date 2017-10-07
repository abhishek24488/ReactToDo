var React =require('react');
var ReactDOM = require('react-dom');
import { Router, Route,Switch, HashRouter} from 'react-router-dom';
//var { Layout }= require('react-router');

var ToDoApp= require('ToDoApp');
var actions= require('actions');
var store= require('configureStore').configure();

store.subscribe(()=>{
    console.log('New State',store.getState());

});

store.dispatch(actions.addTodo('clean mess'));
store.dispatch(actions.toggleShowCompletedTodo());
store.dispatch(actions.setSerachText('mess'));


require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.css');

$(document).foundation();

//require('style-loader!css-loader!sass-loader!!../app/style/app.scss');
require('style-loader!css-loader!sass-loader!../app/style/app.scss')

/* ReactDOM.render(
    <div>
        <HashRouter>
            <div>
                <Route path="/"/>
                <Route path ="/" component={ToDoApp}/>
                <Route  path="/" component={Login}/>              
            </div>
        </HashRouter>
    </div>

    ,

document.getElementById('app')
); */

ReactDOM.render(
        <div>
            <p className="page-title">Welcome to Todo</p>
            <ToDoApp/>                
            </div>
        ,
    
    document.getElementById('app')
); 

