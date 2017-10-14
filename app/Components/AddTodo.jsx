var React= require('react');
var {connect}= require('react-redux');
var actions= require('actions');
var createReactClass= require('create-react-class');

export class AddTodo extends React.Component{

    handleSubmit(e){
        e.preventDefault();
        var {dispatch} =this.props;
        var task = this.refs.task.value;
        console.log("AddTodDo Component"+ task);
        if(task.length>0){
            this.refs.task.value= '';
            //this.props.onAddTodo(task);
            dispatch(actions.startAddTodo(task));
        }else{
    // Moves cursor back 
            this.refs.task.focus();
        }
    }
    render (){               
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h3>AddTODo</h3>
                    <input type="text" placeholder="Enter the task" ref="task"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
};

export default connect()(AddTodo);
//module.exports=connect()(AddTodo);