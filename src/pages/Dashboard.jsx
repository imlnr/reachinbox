import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import "../style/dashboard.css";
import ThemeToggle from '../components/ThemeToggle';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const [ismailhome, setmailhome] = useState(false);
    const theme = useSelector(state => state.theme);

    return (
        <div className='dashboard' style={theme ? { backgroundColor: "black", color: "white", transition: "all 0.3s ease" } : { transition: "all 0.3s ease" }}>
            <Navbar />
            <div className='content'>
                <div className='dash-head'>
                    <span>Onebox</span>
                    <div className='dash-head-in'>
                        <ThemeToggle />
                        <select name="workspace" id="workspace">
                            <option value="ln's Workspace">ln's Workspace</option>
                            <option value="Tim's Workspace">Tim's Workspace</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
                {/* <div className='main-content'> */}
                {/* </div> */}
            </div>
        </div>
    );
}

export default Dashboard;
