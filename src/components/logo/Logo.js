import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/wolf_logo.webp'

const LogoContainer = styled.div`
> h2 {
    display: block;
    display:flex;
    position:absolute;
    left:2rem;
    top:2.5rem;
    color:rgba(255, 255, 255, 0.8);
    z-index:2;
    @media (max-width: 1024px){
            position: absolute;
            left: 1rem;
            top: 4rem;
            font-size: 20px;
        }
    @media (max-width: 600px){
            display: none !important;
        }
    @media (max-width: 400px){
            display: none !important;
        }
    }
> img {
    display: block;
    display:flex;
    position:absolute;
    left:10rem;
    top:2.2rem;
    height: 3rem;
    width: 3rem;
    opacity: 0.6;
    color:rgba(255, 255, 255, 0.6);
    z-index:2;
    @media (max-width: 1024px){
        position: absolute;
        left: 7.5rem;
        top: 3.56rem;
    }
    @media (max-width: 600px){
        position: absolute;
        left: 1rem;
        top: 1rem;
        width: 2.5rem;
        height:2.5rem;
    }
    @media (max-width: 400px){
        position: absolute;
        left: 1rem;
        top: 1rem;
    }
}
`



const Logo = () => {
    return (
        <LogoContainer>
            <h2>elisenwolf</h2><img src={logo} alt='logo' />
        </LogoContainer>
    )
}

export default Logo