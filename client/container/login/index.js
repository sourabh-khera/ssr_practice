import React , { Component } from 'react';
import TextInput from '../../components/text_input';
import LoginButton from '../../components/button';
import './style.scss';

class Login extends Component {
  render() {
    return (
      <div className='login-container'>
        <div className='login-inputs-container'> 
          <div className='title'>Login</div>
          <div className='text-input-container'>
            <TextInput placeholder='Username'/>             
            <TextInput placeholder='Password'/>               
          </div>
          <div className='login-button-container'>
            <LoginButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;