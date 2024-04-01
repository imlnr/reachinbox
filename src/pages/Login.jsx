import React from 'react';
import Head from '../components/Head';
import Foot from '../components/Foot';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import google from "../assets/Frame.png";

const Login = () => {
    return (
        <Box>
            <Head />
            <Box className='log-card'>
                <Box className='log-card-inn'>
                    <Box className='log-p-1'>
                        <Typography variant="h6">Create a new account</Typography>
                        <StyledButton variant="contained" sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            border: '1px solid white',
                            padding: '8px 16px',
                            width: '90%',
                            borderRadius: '4px',
                            height: '48px',
                        }}>
                            <img src={google} alt="" />
                            <span>Sign Up with Google</span>
                        </StyledButton>
                    </Box>
                    <Box className='log-p-2'>
                        <StyledButton variant="contained" sx={{
                            padding: '13px 35px',
                            width: '60%',
                            backgroundImage: 'linear-gradient(to right, #4B63DD, #0524BFFC)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            height: '48px',
                        }}>
                            Create an Account
                        </StyledButton>
                        <Typography variant="body2">Already have an account? <Link to={'#'}>Sign In</Link></Typography>
                    </Box>
                </Box>
            </Box>
            <Foot />
        </Box>
    );
}

// Styled Button component
const StyledButton = styled(Button)(({ theme }) => ({
    padding: '8px 16px',
    borderRadius: '4px',
    height: '48px',
    width: '100%',
    '& img': {
        marginRight: theme.spacing(1),
    },
}));

export default Login;
