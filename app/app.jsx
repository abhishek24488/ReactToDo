var React =require('react');
var ReactDOM = require('react-dom');
import { Router, Route,Switch, HashRouter} from 'react-router-dom';
//var { Layout }= require('react-router');

var ToDoApp= require('./Components/ToDoApp');
var Home= require('./Components/Home');


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

