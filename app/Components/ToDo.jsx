var React= require('react');
var {connect}= require('react-redux');
var actions= require('actions');
var createReactClass = require('create-react-class');
var moment = require('moment');

export class Todo extends React.Component{ 

    handleSubmit(e){
        //e.preventDefault();
       var {dispatch,id , text,updated}= this.props;        
       var newTask= prompt("Enter theh new todo");
       //console.log("newtask"+typeof(newTask));
       if(newTask.length!=0){
            this.refs.userTask.value= newTask;
            updated=true;
            var newT=this.refs.userTask.value;
            dispatch(actions.UpdateUserTak(id,newT,updated)) ;
           //console.log(newTask);
        }       
    }
    onDelete(e){
        //e.preventDefault();        
        var {dispatch,id,text}= this.props;
        dispatch(actions.removeTodo(id));        
    }
   
    render(){   
        // We are fetching the text property using this.props
        var {completed,id ,updated,updatedAt, createdAt,completedAt,text,dispatch}=this.props;
        console.log(completed);
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = ()=> {

            var message = 'Created ';
            var timestamp = createdAt;
      
            if (completed) {
              message = 'Completed ';
              timestamp = completedAt;
            }
            else if(updated){
                message = 'Updated';
                timestamp= updatedAt;
            }        
      
            return "Task "+ message+" " + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
          }       
        
        return(

            <div className={todoClassName} 
                   // this.props.onToggle(id); // It will pass the id in onToggle function                  
                >
                    <div>
                        <input type="checkbox" checked={completed}  onClick={()=>{
                            dispatch(actions.startToggleTodo(id, !completed));
                            }} onChange={()=>{
                            //dispatch(actions.startToggleTodo(id, completed));
                            }} />                      
                        <form > 
                            <input type="text" value= {text} ref="userTask" onChange={()=>{}}/>
                            <p className="todo__subtext">{renderDate()}</p>
                            <button disabled={completed} className="button expanded"  onClick={this.handleSubmit.bind(this)} 
                            >Edit your task</button>
                        </form>
                    </div>
                    <div>
                        <form onSubmit={this.onDelete.bind(this)}>
                            <button className="button hollow expanded">Delete your task</button>
                        </form> 
                    </div>            
            </div>
        )
    }
};

export default connect()(Todo);
//module.exports= connect()(Todo); //here todo component is needed to acces to its distach so by call connect it is avaible to its