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
                    text:'Lunch'
                },
                {
                    id: uuid(),
                    text:'Dinner'
                },
                {
                    id: uuid(),
                    text:'Make a call'
                },
                {
                    id: uuid(),
                    text:'Be ready at 4'
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
                    text: newText
                }
            ]
        })
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
            <ToDoList todos ={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
       )
    }
});

module.exports=ToDoApp;