var React =require('react');
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route,Switch, HashRouter} from 'react-router-dom';
//var { Layout }= require('react-router');

var ToDoApp= require('../app/Components/ToDoApp');

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');

$(document).foundation();

//require('style-loader!css-loader!sass-loader!!../app/style/app.scss');
require('style-loader!css-loader!sass-loader!../app/style/app.scss')

ReactDOM.render(
    <div>                
        <p>Application</p>
        <ToDoApp/> 
    </div>,
    
    document.getElementById('app')
);

