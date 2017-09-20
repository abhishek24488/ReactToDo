var React = require('react');
var createReactClass = require('create-react-class');

var ToDoList= require('ToDoList');
var AddTodo= require('AddTodo')

var ToDoApp= createReactClass({
    getInitialState: function(){
        return {
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
    render: function(){

        var that = this;
        var {todos}= this.state; // grab the todos value using state property

        //Its Important to return funtion 
       return(
        <div>
            <p>Todo Application</p>
            <ToDoList todos ={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
       )
    }
});

module.exports=ToDoApp;