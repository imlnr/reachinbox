import React from 'react'
import "../style/nav.css"
import main from "../assets/Frame 2087326278.png"
import bar from "../assets/barchart.png"
import home from "../assets/Home_fill.png"
import temp from "../assets/Frame 19 (1).png"
import vector from "../assets/Vector.png"
import frame from "../assets/Frame 23.png"
// import bar from "../assets/bar_chart.png"
import mail from "../assets/mail.png"
import v2 from "../assets/Vector (2).png"
const Navbar = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-first'>
                <img className='logo-img' src={main} alt="" />
                <div className='nav-items'>
                    <img src={home} alt="" />
                    <img src={vector} alt="" />
                    <img src={mail} alt="" />
                    <img src={frame} alt="" />
                    <img src={v2} alt="" />
                    <img src={temp} alt="" />
                    <img src={bar} alt="" />
                </div>
            </div>
            <div className='profile'>LN</div>
        </div>
    )
}

export default Navbar