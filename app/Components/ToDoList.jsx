    var React= require('react');
    var createReactClass = require('create-react-class');

    var Todo = require('Todo');

    var TodoList= createReactClass({
        
        render: function(){
            // Using ES6 destructuring property
            var { todos,nexText }= this.props;
            //console.log(todos);
            var renderTodos = ()=>{
                //todo.map function call for every element in the array
                // when we are iterating an array and generating multiple instance then we need provide some key
                return todos.map((todo)=>{
                    //console.log(todo);
                    return(
//spreadout operator is help us to spread the all property on an object . Now Every attribute todo in map method will pass down  
//todo component as its own prop i.e. we can grab the text prop          
            <Todo key ={todo.id} {...todo} onToggle={this.props.onToggle} />  //used this.props Since we are passing from parent component
                    );
                });
            }
            return(
                <div>
                    {renderTodos()}
                </div>
            );
        }
    });

    module.exports= TodoList;