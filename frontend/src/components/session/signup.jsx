import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { signup, clearErrors } from '../../actions/session_actions';
import { closeModal } from "../../actions/modal_actions";

const SignupForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const errors = useSelector((state) => (state.errors.session));

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ companyName, setCompanyName ] = useState('');

    useEffect(() => {
        if (errors.length) dispatch(clearErrors());
    });

    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);
    const updateCompanyName = e => setCompanyName(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email, password, companyName
        };

        dispatch(signup(user))
          .then(() => history.push("/"))
          .then(() => dispatch(closeModal()));
    };




    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className='signup-errors-container'>{errors.email}</div>
          <label>
            Email
            <input value={email} onChange={updateEmail} />
          </label>
          <label>
            <div className='signup-errors-container'>{errors.password}</div>
            Password
            <input value={password} onChange={updatePassword} type='password' />
          </label>
          <label>
            <div className='signup-errors-container'>{errors.companyName}</div>
            Company Name
            <input
              value={companyName}
              onChange={updateCompanyName}
              type='text'
            />
          </label>

          <input type='submit' value='Log In' />
        </form>
      </div>
    );

};

export default SignupForm;