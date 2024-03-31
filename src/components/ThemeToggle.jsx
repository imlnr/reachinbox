import React, { useState } from 'react';
import '../style/theme.css';

function ThemeToggle() {
    const [theme,setTheme] = useState(false);
    console.log(theme);
    return (
        <div className="toggle-switch">
            <input type="checkbox" onChange={()=>setTheme(state => setTheme(!state))}/>
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
