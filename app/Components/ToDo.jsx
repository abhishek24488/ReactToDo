var React= require('react');
var {connect}= require('react-redux');
var actions= require('actions');
var createReactClass = require('create-react-class');

var Todo= createReactClass({    

    render: function(){   
        // We are fetching the text property using this.props
        var {completed,id , text,dispatch}=this.props;
        console.log(text);
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
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
            <div className={todoClassName} onClick={()=>{
                   // this.props.onToggle(id); // It will pass the id in onToggle function 
                   dispatch(actions.startToggleTodo(id, !completed));
                }} >
                {/* {renderTodo()} */}
                <input type="checkbox" checked={completed} onChange={()=>{}}/>
                {text}
            </div>
        )
    }
});

//export default connect()(Todo);
module.exports= connect()(Todo); //here todo component is needed to acces to its distach so by call connect it is avaible to its