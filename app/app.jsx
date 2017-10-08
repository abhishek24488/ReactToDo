var React =require('react');
var ReactDOM = require('react-dom');
var {Provider}= require('react-redux');
import { Router, Route,Switch, HashRouter} from 'react-router-dom';
//var { Layout }= require('react-router');

//debugger;
var ToDoApp= require('ToDoApp');
var actions= require('actions');
//var applicationStyles = require('applicationStyles');
var store= require('configureStore').configure();

store.subscribe(()=>{
    console.log('New State',store.getState());

});

store.dispatch(actions.addTodo('clean mess'));
store.dispatch(actions.toggleShowCompleted());
//store.dispatch(actions.setSearchText('m'));
//store.dispatch(actions.toggleTodo('eb310554-38b1-4f52-8256-a581a2321a0d'));


require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.css');

$(document).foundation();

require('style-loader!css-loader!sass-loader!!../app/style/app.scss');
//require('style-loader!css-loader!sass-loader!applicationStyles');

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
            <Provider store={store}>
                <ToDoApp/>
            </Provider>
            ,    
    document.getElementById('app')
); 

