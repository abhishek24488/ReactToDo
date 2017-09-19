var React= require('react');
var createReactClass = require('create-react-class');

var Todo= createReactClass({
    
    render: function(){   
        // We are fetching the text property using this.props
        var {id , text}=this.props;
        console.log(text );
        var renderTodo =()=>{
            return
                (
                    <div>
                         {text}
                    </div>
                )
        }
        return(
            <div>
                {/* {renderTodo()} */}
                {id}. {text}
            </div>
        )
    }
});

module.exports= Todo;