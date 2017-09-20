var React= require('react');
var createReactClass= require('create-react-class');

var AddTodo= createReactClass({

    onFormSubmit: function(e){
        e.preventDefault();
        var task = this.refs.task.value;
        console.log("AddTodDo Component"+ task);
        if(task.length>0){
            this.refs.task.value= '';
            this.props.onAddTodo(task);
        }else{
    // Moves cursor back 
            this.refs.task.focus();
        }
    },

    render: function(){
               
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <h3>AddTODo</h3>
                    <input type="text" placeholder="Enter the task" ref="task"/>
                    <button className="button expanded hollow">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports=AddTodo;