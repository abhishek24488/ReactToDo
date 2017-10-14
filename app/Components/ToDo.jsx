var React= require('react');
var {connect}= require('react-redux');
var actions= require('actions');
var createReactClass = require('create-react-class');

export class Todo extends React.Component{    
    handleSubmit(e){
        e.preventDefault();
        var {dispatch,id , text}= this.props;
        //var newTask= this.refs.userTask.value;
        //alert(newTask);
        //
       var newTask= prompt("Enter theh new todo");
        if(newTask.length!=0){
            this.refs.userTask.value= newTask;
            var newT=this.refs.userTask.value;
            dispatch(actions.UpdateUserTak(id,newT)) ;
           //console.log(newTask);
        }       
    }
    onDelete(e){
       // e.preventDefault();        
        var {dispatch,id,text}= this.props;
        dispatch(actions.removeTodo(id));
        
    }
    render(){   
        // We are fetching the text property using this.props
        var {completed,id , text,dispatch}=this.props;
        console.log(text);
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        
        return(

            <div className={todoClassName} 
                   // this.props.onToggle(id); // It will pass the id in onToggle function                  
                >
                    <div>
                        <input type="checkbox" checked={completed}  onClick={()=>{
                            dispatch(actions.startToggleTodo(id, !completed));
                            }} onChange={()=>{}} />                      
                        <form onSubmit={this.handleSubmit.bind(this)}> 
                            <input type="text" value= {text} ref="userTask" onChange={()=>{}}/>
                            <button className="button expanded">Edit your task</button>
                        </form>
                    </div>
                    <div>
                        <form onSubmit={this.onDelete.bind(this)}>
                            <button className="button expanded">Delete your task</button>
                        </form> 
                    </div>            
            </div>
        )
    }
};

export default connect()(Todo);
//module.exports= connect()(Todo); //here todo component is needed to acces to its distach so by call connect it is avaible to its