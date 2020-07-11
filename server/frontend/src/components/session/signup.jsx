import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';

const SignupForm = () => {
    const dispatch = useDispatch();
    const errors = useSelector((state) => Object.values(state.errors.session));

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ companyName, setCompanyName ] = useState('');

    // useEffect(() => {
    //     if (errors.length) dispatch(clearErrors());
    // });

    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);
    const updateCompanyName = e => setCompanyName(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email, password, companyName
        };

        dispatch(signup(user))
            // .then(login(user))
    };


    return (
      <div>
        <div>
          {errors.map((err, i) => {
            Object.values(err).map((er, j) => {
              Object.values(er).map((error, k) => (
                // {console.log(error.message)}
                <li>{error.message}</li>
              ))
            })
          })}
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
          <label>
            Company Name
            <input value={companyName} onChange={updateCompanyName} type='text' />
          </label>

          <input type='submit' value='Log In' />
        </form>
      </div>
    );

};

export default SignupForm;