var React = require('react');
var createReactClass = require('create-react-class');

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
                    id: 1,
                    text:'Lunch'
                },
                {
                    id: 2,
                    text:'Dinner'
                },
                {
                    id: 3,
                    text:'Make a call'
                },
                {
                    id: 4,
                    text:'Be ready at 4'
                }
            ]
        };
    },

    handleAddTodo: function(newText){
        alert('Yours new Added todo' + newText);
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