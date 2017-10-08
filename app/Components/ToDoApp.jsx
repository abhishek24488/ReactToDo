var React = require('react');
var createReactClass = require('create-react-class');
var uuid= require('node-uuid');

var ToDoList= require('ToDoList');
var AddTodo= require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApi = require('TodoApi');


var ToDoApp= createReactClass({
    getInitialState: function(){
        return {
            showCompleted: true,// false because we only want to see todos which is not yet finished
            searchText: '',// You need to return all the items no matter what the text is :)
            todos: TodoApi.getTodos() // to fetch the todos            
        };
    },
    // Its going fire after either props or states gonna change
    componentDidUpdate : function(){
        //console.log(this.state.todos);
        TodoApi.setTodos(this.state.todos);
    }, 
    /* handleAddTodo: function(newText){
        //alert('Yours new Added todo' + newText);

        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id: uuid(),
                    text: newText,
                    completed: false
                }
            ]
        })
    }, */
    /* handleToggle:function(id){
        //alert(id);
        // map function going to iterate all over the todo task
        var updatedTodos= this.state.todos.map(function(todo){
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;            
        });      
        this.setState({
            todos: updatedTodos
        });  
    }, */
    /* handleSearch: function(showCompleted, searchText){
            this.setState({
                showCompleted:showCompleted,
                searchText:searchText.toLowerCase()
            }); */
    /*var serachTodo= this.state.todos.map(function(todo){
                if(todo.text === searchText){
                    console.log(searchText);
                }
            }); 
            
            },*/
    render: function(){

        var that = this;
        var {todos,searchText, showCompleted}= this.state; // grab the todos value using state property
        console.log(searchText);
        var filterTodos= TodoApi.filterTodos(todos,searchText, showCompleted);

        //Its Important to return funtion 
       return(
        <div>
            <h1 className="page-title">Todo App</h1>
            <div className="row">
                <div className="column small-centered small-11 medium-6 large-5">
                    <div className="container">                        
                        <TodoSearch/>
                        <ToDoList/>
                        <AddTodo/>
                    </div>
                </div>
            </div>
        </div>
       )
    }
});

//export default ToDoApp;
module.exports=ToDoApp;