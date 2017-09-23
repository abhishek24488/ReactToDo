var React = require('react');
var createReactClass = require('create-react-class');
var uuid= require('node-uuid');

var ToDoList= require('ToDoList');
var AddTodo= require('AddTodo');
var TodoSearch = require('TodoSearch');

var ToDoApp= createReactClass({
    getInitialState: function(){
        return {
            showCompleted: false,// false because we aonly want to see todos which is not yet finished
            searchText: '',// You need to return all the items no matter what the text is :)
            todos: [
                {
                    id: uuid(),
                    text:'Meeting Anne Hathaway at 4 pm  on Monday',
                    completed: false
                },
                {
                    id: uuid(),
                    text:'Meeting Emily Blunt at 4 pm on Tuesday ',
                    completed: true
                },
                {
                    id: uuid(),
                    text:'Buy a Home in PAO ALTO :) :) and a claasy jaguar',
                    completed: false
                },
                {
                    id: uuid(),
                    text:'Wake up at 4 AM and do yoga',
                    completed: false
                }
            ]
        };
    },

    handleAddTodo: function(newText){
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
    },
    handleToggle:function(id){
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
    },
    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted:showCompleted,
            searchText:searchText.toLowerCase()
        });
    },
    render: function(){

        var that = this;
        var {todos}= this.state; // grab the todos value using state property

        //Its Important to return funtion 
       return(
        <div>
            <p>Todo Application</p>
            <TodoSearch onSearch={this.handleSearch}></TodoSearch>
            <ToDoList todos ={todos} onToggle={this.handleToggle} />
            <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
       )
    }
});

module.exports=ToDoApp;