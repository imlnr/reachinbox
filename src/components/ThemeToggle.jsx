import React, { useState } from 'react';
import '../style/theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { GET_THEME_CHANGE } from '../redux/AppReducer/action-type';

function ThemeToggle() {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    console.log(theme);
    return (
        <div className="toggle-switch">
            <input type="checkbox" onChange={() => dispatch({ type: GET_THEME_CHANGE, payload: !theme })} />
            <div className="round-button">
                <div className='bb'></div>
                <div className='bb'></div>
                <div className='bb'></div>
                <div className="button-body"></div>
            </div>
        </div>
    );
}

export default ThemeToggle;
