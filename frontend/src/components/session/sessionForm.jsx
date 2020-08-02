import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { login, signup, clearErrors } from '../../actions/session_actions';
import '../../stylesheets/session.scss'
const SessionForm = () => {
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const history = useHistory();
    const errors = useSelector(state => state.errors.session);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [companyName, setCompanyName] = useState("");

    const isLogin = match.path === '/login';
    const isSignup = !isLogin;

    useEffect(() => {
      if (errors.length) dispatch(clearErrors());
    }, []);

    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);
    const updateCompanyName = (e) => setCompanyName(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email, 
            password,
            companyName
        };

        if (isLogin) {
          await dispatch(login(user));
        } else {
          await dispatch(signup(user));
        };

        history.push('/');
    }

    return (
      <div className='form-container flex-center'>
        <span className='logo'>Entrepreneur CRM</span>

        <div className='links'>
          <Link to='/login' className='session-link'>
            <span className={isLogin ? "active" : "inactive"}>LOG IN</span>
          </Link>

          <Link to='/signup' className='session-link'>
            <span className={isSignup ? "active" : "inactive"}>SIGN UP</span>
          </Link>
        </div>
        <br />

        <div>
          {errors.map((err, i) => (
            <div className='user-auth-errors' key={i}>
              {err}
            </div>
          ))}
        </div>

        <form className='form flex-center'>
          <input
            id='email'
            className='input'
            onChange={updateEmail}
            placeholder='Email'
            type='text'
            name='email'
            value={email}
          />

          <input
            id='password'
            className='input'
            onChange={updatePassword}
            placeholder='Password'
            type='password'
            name='password'
            value={password}
          />

          <input
            className={isSignup ? "input email" : "hidden"}
            onChange={updateCompanyName}
            placeholder='Company Name'
            type='text'
            name='companyName'
            value={companyName}
          />

          <input
            className='input submit'
            onClick={handleSubmit}
            type='submit'
            value={isLogin ? "Log In" : "Sign Up"}
          />

          <input
            className={isLogin ? "input submit" : "hidden"}
            onClick={handleSubmit}
            type='submit'
            value='Demo Login'
          />
        </form>
      </div>
    );
};



export default SessionForm;