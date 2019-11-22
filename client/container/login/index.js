import React , { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from '../../components/text_input';
import LoginButton from '../../components/button';
import { fetchUsersList } from '../../actions/async_action';
import './style.scss';

class Login extends Component {

  componentDidMount(){
    const { fetchUsersList } = this.props;
  }
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

Login.need = {
  fetchUsersList: (store) => store.dispatch(fetchUsersList()),
};

export default Login;