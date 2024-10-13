"use client";
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Button } from '@mui/material';
import Image from 'next/image';
import waveLinkLogo from '../assets/waveLinkLogo.png';

const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full height of the viewport */
  padding: 100px;
  background-color: whitesmoke; /* Similar background to the container */
  border-radius: 7px;
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 50px;
`;

const NewPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <StyledLoginContainer>
        <StyledImageWrapper>
          <Image src={waveLinkLogo} alt="Wavelink Logo" height={200} width={200} />
        </StyledImageWrapper>

        <Button
          variant="outlined"
          onClick={() => {
            console.log('SIGNING IN');
          }}
        >
          Sign in with Google
        </Button>
      </StyledLoginContainer>
    </>
  );
};

export default NewPage;
