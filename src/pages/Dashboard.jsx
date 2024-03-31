import React from 'react'
import Navbar from '../components/Navbar'
import "../style/dashboard.css"
import ThemeToggle from '../components/ThemeToggle'
import MailRoutes from '../Allroutes/MailRoutes'
const Dashboard = () => {
    return (
        <div className='dashboard'>
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
                <div className='main-content'>
                    <MailRoutes />
                </div>
            </div>
        </div>
    )
}

export default Dashboard