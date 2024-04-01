import React from 'react'
import "../style/nav.css"
import main from "../assets/Frame 2087326278.png"
import bar from "../assets/barchart.png"
import home from "../assets/Home_fill.png"
import temp from "../assets/Frame 19 (1).png"
import vector from "../assets/Vector.png"
import frame from "../assets/Frame 23.png"
import mail from "../assets/mail.png"
import v2 from "../assets/Vector (2).png"
const Navbar = ({ setst, st }) => {
    console.log(st);
    return (
        <div className='nav-bar'>
            <div className='nav-first'>
                <img className='logo-img' src={main} alt="" />
                <div className='nav-items'>
                    <img style={st.ismailhome?{backgroundColor:"#2f3030",borderRadius:"5px",padding:"5px 7px"}:{}} onClick={() => setst(prev => ({
                        ismailhome: true,
                        search: false,
                        allMail: false,
                        sent: false,
                        list: false,
                        archive: false,
                        bar: false
                    }))} src={home} alt="" />
                    <img style={st.search?{backgroundColor:"#2f3030",borderRadius:"5px",padding:"5px 7px"}:{}} onClick={() => setst(prev => ({
                        ismailhome: false,
                        search: true,
                        allMail: false,
                        sent: false,
                        list: false,
                        archive: false,
                        bar: false
                    }))} src={vector} alt="" />
                    <img style={st.allMail?{backgroundColor:"#2f3030",borderRadius:"5px",padding:"5px 7px"}:{}} onClick={() => setst(prev => ({
                        ismailhome: false,
                        search: false,
                        allMail: true,
                        sent: false,
                        list: false,
                        archive: false,
                        bar: false
                    }))} src={mail} alt="" />
                    <img style={st.sent?{backgroundColor:"#2f3030",borderRadius:"5px",padding:"5px 7px"}:{}} onClick={() => setst(prev => ({
                        ismailhome: false,
                        search: false,
                        allMail: false,
                        sent: true,
                        list: false,
                        archive: false,
                        bar: false
                    }))} src={frame} alt="" />
                    <img style={st.list?{backgroundColor:"#2f3030",borderRadius:"5px",padding:"5px 7px"}:{}} onClick={() => setst(prev => ({
                        ismailhome: false,
                        search: false,
                        allMail: false,
                        sent: false,
                        list: true,
                        archive: false,
                        bar: false
                    }))} src={v2} alt="" />
                    <img style={st.archive?{backgroundColor:"#2f3030",borderRadius:"5px",padding:"5px 7px"}:{}} onClick={() => setst(prev => ({
                        ismailhome: false,
                        search: false,
                        allMail: false,
                        sent: false,
                        list: false,
                        archive: true,
                        bar: false
                    }))} src={temp} alt="" />
                    <img style={st.bar?{backgroundColor:"#2f3030",borderRadius:"5px",padding:"5px 7px"}:{}} onClick={() => setst(prev => ({
                        ismailhome: false,
                        search: false,
                        allMail: false,
                        sent: false,
                        list: false,
                        archive: false,
                        bar: true
                    }))} src={bar} alt="" />
                </div>
            </div>
            <div className='profile'>
                LN
            </div>
        </div>
    )
}

export default Navbar