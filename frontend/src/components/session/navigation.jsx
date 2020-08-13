import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { closeModal, openModal } from '../../actions/modal_actions';

const NavigationBar = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.entities.users[state.session.id])

    const login = (() => dispatch(openModal('login')));
    return (
        <div>
            <h3 onClick={login}>Login</h3>
        </div>
    )
};

export default NavigationBar;