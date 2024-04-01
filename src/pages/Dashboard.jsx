import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import "../style/dashboard.css";
import ThemeToggle from '../components/ThemeToggle';
import { useSelector } from 'react-redux';
import NoMail from '../components/NoMail';
import HomeMail from './HomeMail';
import Search from './Search';
import AllMail from './AllMail';
import Sent from './Sent';
import List from './List';
import Archive from './Archive';
import Bar from './Bar';

const Dashboard = () => {
    const [state, setState] = useState({
        ismailhome: false,
        search: false,
        allMail: false,
        sent: false,
        list: false,
        archive: false,
        bar: false
    });
    const theme = useSelector(state => state.theme);

    return (
        <div className='dashboard' style={theme ? { backgroundColor: "black", color: "white", transition: "all 0.3s ease" } : { transition: "all 0.3s ease" }}>
            <Navbar setst={setState} st={state}/>
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
                <div className='main-content'>
                    {state.ismailhome || state.search || state.allMail || state.sent || state.list || state.archive || state.bar || <NoMail />}
                    {state.ismailhome && <HomeMail />}
                    {state.search && <Search />}
                    {state.allMail && <AllMail />}
                    {state.sent && <Sent />}
                    {state.list && <List />}
                    {state.archive && <Archive />}
                    {state.bar && <Bar />}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
