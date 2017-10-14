    var React= require('react');
    var {connect}= require('react-redux');// provider component acces to children component and childer still needs to specify which data it needde
    var createReactClass = require('create-react-class');

    //var Todo = require('Todo');
    import Todo from 'Todo';
    var TodoApi =require('TodoApi');

    export class TodoList extends React.Component{
        
        render(){
            // Using ES6 destructuring property
            var { todos,searchText, showCompleted }= this.props;
                        
            var renderTodos = ()=>{
                //todo.map function call for every element in the array
                // when we are iterating an array and generating multiple instance then we need provide some key
                var filteredTodos =TodoApi.filterTodos(todos,searchText, showCompleted);
                if(filteredTodos.length===0){
                    return(
                        <p className="container_message">Nothing to do</p>
                    );
                } 
                return filteredTodos.map((todo)=>{
                        return (
                            <Todo key ={todo.id} {...todo}/>
                        );
                    });                
            };
            return(
                <div>
                    {renderTodos()}
                </div>
            );
        }
    };

    export default connect(
        (state) => {
          return state;
        }
      )(TodoList);
  /*   module.exports= connect( 
         (state) => {
             //return state;
                return {               
            ...state
            ///todos: state.todos
            };    //state => ({todos: state.todos})
    })(TodoList) */;
//todos: state
//spreadout operator is help us to spread the all property on an object . Now Every attribute todo in map method will pass down  
//todo component as its own prop i.e. we can grab the text prop          