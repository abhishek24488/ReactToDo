import React from 'react';
import createReactClass from 'create-react-class';
import * as Redux from 'react-redux';
import * as actions from '../actions/actions';

export class Login extends React.Component{

  constructor (props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }
    onLogin () {
        var {dispatch} = this.props;
        var username= this.refs.usr.value;
        var password = this.refs.pwd.value;
        dispatch(actions.startLogin(username,password));
    }
  render () {
    return (
      <div>
        <h1 className="page-title">Your Todo Application</h1>

        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Your Task dossier</h3>
              <p>
                <i>Login</i>  
              </p>
              <input type="text" placeholder="Enter the Registered Email ID" ref="usr"/>
              <input type="password" placeholder="Enter the Password" ref="pwd"/>
              <button className="button" onClick={this.onLogin}>Enter your credential</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Redux.connect()(Login);;
//module.exports= connect()( Login);