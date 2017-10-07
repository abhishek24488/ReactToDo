var React = require('react');
var createReactClass= require('create-react-class');

var VerifyUser= require('./VerifyUser');
var ToDoApp= require('ToDoApp');

var Home = createReactClass({

    
    handleSubmit: function(e){
        e.preventDefault();
        var username= this.refs.username.value;
        var password= this.refs.password.value;
        if(username.length!=0 && password.length!=0){
            console.log(username+" Your are logged In");   
            /*  this.setState({
                username:this.username,
                password: this.password
             }); */  
             return(
                 this.refs.child
            )                             
        }
    }, 
    render: function(){     
        return(
            <div>
                <p>Home</p>
                <VerifyUser ref="child"/>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" ref="username" placeholder="Enter UserName" id=""/>
                    <input type="password" ref="password" placeholder="Enter Your Password"/>
                    <button className="button expanded">Login</button>
                </form>  
                   {/* <VerifyUser/>  */}  
                {/* <ToDoApp/>  */}               
            </div>
        )
    }
});

module.exports= Home;