'use client'

import { Avatar, Button, IconButton } from '@mui/material';
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat'
import MoreVerticalIcon from '@mui/icons-material/MoreVert'
import LogOutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search'

const StyledContainer = styled.div`
    height: 100vh;
    min-width: 300px;
    max-width: 350px;
    overflow-y: scroll;
    border-right: 1px solid whitesmoke;
`
    
const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    position: sticky;
    top: 0 ;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
    z-index: 1;
    `
const StyledSearch = styled.div`
    display: flex; 
    align-items: center;
    padding: 15px; 
    border-radius: 2px;
`
const StyledSidebarButton = styled(Button)`
    width: 100%;
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
`
const StyledUserAvatar = styled(Avatar)`
  cursor: pointer;
  
  :hover {
    opacity: 0.8;
  }
`
const StyledSearchInput= styled.input`
    outline: none;
    border: none;
    flex: 1;
`

const Sidebar = () => {
  return (
    <StyledContainer>
      <StyledHeader>
      <Tooltip title='Username' placement ='right'>
      <StyledUserAvatar />
        </Tooltip>
        <div>
            <IconButton>
                <ChatIcon/>
            </IconButton>
            <IconButton>
                <MoreVerticalIcon/>
            </IconButton>
            <IconButton>
                <LogOutIcon/>
            </IconButton>
        </div>
        
      </StyledHeader>
      <StyledSearch>
        <SearchIcon/>
        <StyledSearchInput placeholder='Search username to start'/>
      </StyledSearch>
      <StyledSidebarButton>
        Start a new conversation
      </StyledSidebarButton>
    </StyledContainer>
  );
};

export default Sidebar;

