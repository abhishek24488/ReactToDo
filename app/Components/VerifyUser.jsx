var React = require('react');
var createReactClass= require('create-react-class');

var ToDoApp= require('./ToDoApp');

var  VerifyUser = createReactClass({
    /* renderTodoApp: function(){
        return (
            <div>
                <TodoApp/>
            </div>
        )
    }, */

    
    render: function(){
       var {username, password}= this.props;
       return(
            <div>
                <p>Welcome {username}</p>
                {/* <ToDoApp/> */}
            </div>
       )
    }
});

module.exports= VerifyUser;

