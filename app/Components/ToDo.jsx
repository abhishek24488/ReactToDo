var React= require('react');
var createReactClass = require('create-react-class');

var Todo= createReactClass({
    
    render: function(){   
        // We are fetching the text property using this.props
        var {completed,id , text}=this.props;
        //console.log(text );
       /*  var renderTodo =()=>{
            return
                (
                    <div>
                         {text}
                    </div>
                )
        } */
        return(
            <div onClick={()=>{
                    this.props.onToggle(id); // It will pass the id in onToggle function 
                }} >
                {/* {renderTodo()} */}
                <input type="checkbox" checked={completed}/>
                {text}
            </div>
        )
    }
});

module.exports= Todo;