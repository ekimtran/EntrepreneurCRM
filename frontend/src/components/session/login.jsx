// effect is like react life cycle meethod
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const errors = useSelector(state => Object.values(state.errors.session));

    //   useEffect(() => {
    //     if (errors.length) dispatch(clearErrors());
    //   }, []);

    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email, 
            password
        };

        dispatch(login(user))
    }

    return (
      <div>
        <div>
          {errors.map((err, i) => (
            <div key={i}>
              <li>
                {err.message}
                {console.log(err.message)}
              </li>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input value={email} onChange={updateEmail} />
          </label>
          <label>
            Password
            <input value={password} onChange={updatePassword} type='password' />
          </label>
          <input type='submit' value='Log In' />
        </form>
      </div>
    );
};



export default LoginForm;