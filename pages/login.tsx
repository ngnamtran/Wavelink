import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Button } from '@mui/material';
import Image from 'next/image';
import waveLinkLogo from '../assets/waveLinkLogo.png';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from '@/config/firebase';

const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full height of the viewport */
  padding: 100px;
  border-radius: 7px;
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 50px;
`;

const Login = () => {
  const [signInWithGoogle, _user, _loading, _error] = useSignInWithGoogle(auth);
  const signIn = () => {
    signInWithGoogle()
  }
  return (
    <StyledLoginContainer>
      <Head>
        <title>Login</title>
      </Head>
    
        <StyledImageWrapper>
          <Image src={waveLinkLogo} alt="Wavelink Logo" height={200} width={200} />
        </StyledImageWrapper>

        <Button
          variant="outlined"
          onClick={signIn}>
          Sign in with Google
        </Button>
      </StyledLoginContainer>
    
  )
}

export default Login