import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import { styled } from 'styled-components'
import Image from 'next/image'
import waveLinkLogo from '../assets/waveLinkLogo.png' 


 
const StyledImageWrapper = styled.div`
    margin-bottom: 50px;
`
const Loading = () => {
    return (
        <div className='style_loading'>
            <StyledImageWrapper>
                <Image src={waveLinkLogo}
                    alt='waveLink Logo'
                    height='200'
                    width='200'
                />
            </StyledImageWrapper>

            <RingLoader
                color="#B399D4"
                size={100}

            />
        </div>

    )
}

export default Loading
