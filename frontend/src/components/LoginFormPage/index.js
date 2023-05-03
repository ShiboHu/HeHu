import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import hehu from '../Navigation/logoo.PNG'
import './loginform.css'

function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const demoLogin = (e) => {
    e.preventDefault();

    setCredential('hushibo123');
    setPassword('hushibo123');

    dispatch(sessionActions.login(
      {credential:'hushibo123', password:'hushibo123'}
      ))
    }
    
    return (
      <div className='login-form-main-container'>

        <div className='loginpage-logo-container'>
        <img className='loginpage-logo' src={hehu} onClick={() => history.push('/')} alt='logo'></img>
        </div>

        <div className='loginpage-error-container'>
         {errors.map((error, idx) => (
          <div className='loginpage-error-content'>
          <i class="fa-solid fa-triangle-exclamation"></i>
          <h5>There was a problem</h5>
         <li key={idx}>{error}</li>
         </div>
         ))}
         </div>
         
      <form onSubmit={handleSubmit} className='loginpage-form'>
        <div className='loginpage-form-container'>
      <h2>Log In</h2>
        <label>
        <div className='username'>
          Username or Email
          <input
            className='input-username'
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            />
        </div>
        </label>
        <label>
          <div className='password'>
          Password
          <input
          className='input-username'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            </div>
        </label>

      
        <div className='loginpage-buttons'>
        <button  className='button-17' type="submit">Log In</button>
        <button className='button-17'  onClick={demoLogin}>Demo</button>
        </div>

        <p>By signing in you agree to HeHu's Conditions of Use and Privacy Notice</p>

        </div>

      </form>

      <div className='loginpage-signup-div'>
        <h5>New to HeHu?</h5>
      </div>
      
      <div className='loginpage-signup-button'>
        <button className='button-17' onClick={() => history.push('/signup')}>Create your HeHu account</button>
       </div>
    </div>
  );
}

export default LoginFormPage;
