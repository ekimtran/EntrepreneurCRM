import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { closeModal, openModal } from '../../actions/modal_actions';

const NavigationBar = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.entities.users[state.session.user])

    const login = () => dispatch(openModal('login'));
    const signup = () => dispatch(openModal('signup'));

    return (
        <div className='navbar'>
            <h2>Entrepreneur CRM</h2>
            <h3 className='login-btn' onClick={login}>Login</h3>
            <h3 onClick={signup}>Sign Up</h3>
        </div>
    )
};

export default NavigationBar;