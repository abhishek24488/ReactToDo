var React = require('react');

var createReactClass = require('create-react-class');

var ToDoList= require('ToDoList');

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
                }
            ]
        };
    },

    render: function(){

        var that = this;
        var {todos}= this.state; // grab the todos value using state property


        //Its Important to return funtion 
       return(
        <div>
            <p>Todo Application</p>
            <ToDoList todos ={todos}/>
        </div>
       )
    }
});

module.exports=ToDoApp;