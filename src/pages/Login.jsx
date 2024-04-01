import React from 'react'
import Head from '../components/Head'
import Foot from '../components/Foot'
import { Button } from '@chakra-ui/react'
import google from "../assets/Frame.png"
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className=''>
            <Head />
            <div className='log-card'>
                <div className='log-card-inn'>
                    <div className='log-p-1'>
                        <p>Create a new account</p>
                        <Button className='login-btn google-btn'>
                            <img src={google} alt="" />
                            <span>Sign Up with Google</span>
                        </Button>
                    </div>
                    <div className='log-p-2'>
                        <Button className='login-btn create-acc'>Create an Account</Button>
                        <p>Already have an account? <Link to={'#'}>Sign In</Link></p>
                    </div>
                </div>
            </div>
            <Foot />
        </div>
    )
}

export default Login