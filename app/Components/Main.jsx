var React =require('react');
var createReactClass = require('create-react-class');

var ToDoApp= require('ToDoApp');

var Main=createReactClass({
    
    render: function() { 
        return( 
            <div>
                 <ToDoApp/>     
            <div >
                <div >                
                        <p>Main Component</p>                        
                        {this.props.children}      
                </div>
            </div>            
        </div>          
        );
    }
}); 

/* var Main= (props) => {
    return( 
        <div>
            <Nav/>            
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">                
                {props.children}                 
                </div>
            </div>            
        </div>          
    );
} */

module.exports=Main;