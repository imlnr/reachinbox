import React from 'react';
import Head from '../components/Head';
import Foot from '../components/Foot';
import google from "../assets/Frame.png";
import { Link } from 'react-router-dom';
import '../style/login.css';
import { Box, Button } from '@mui/material';

const Login = () => {
    return (
        <Box className=''>
            <Head />
            <div className='log-card'>
                <div className='log-card-inn'>
                    <div className='log-p-1'>
                        <p>Create a new account</p>
                        <Button sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            border: '1px solid #707172',
                            padding: '8px 16px',
                            width: '90%',
                            borderRadius: '4px',
                            height: '48px',
                        }}>
                            <img src={google} alt="" />
                            <span>Sign Up with Google</span>
                        </Button>
                    </div>
                    <div className='log-p-2'>
                        <Button sx={{
                            padding: '13px 35px',
                            // width: '42.3%',
                            backgroundImage: 'linear-gradient(to right, #4B63DD, #0524BFFC)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            height: '48px',
                        }}>Create an Account</Button>
                        <p>Already have an account? <Link to={'#'}>Sign In</Link></p>
                    </div>
                </div>
            </div>
            <Foot />
        </Box>
    );
}

export default Login;
