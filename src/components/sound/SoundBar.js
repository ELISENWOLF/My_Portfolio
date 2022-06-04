import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import mus from '../../assets/music.mp3'

const SoundContainer = styled.div`
> h3 {
    display: block;
    display:flex;
    position:fixed;
    right:19.3rem;
    top:2.5rem;
    color:rgba(255, 255, 255, 0.6);
    z-index:2;
    @media (max-width: 1024px){
            position: fixed;
            right: 9rem;
            top: 4rem;
        }
    @media (max-width: 600px){
            position: fixed;
            right: 5rem;
            top: 3.8rem;
        }
    @media (max-width: 400px){
            position: fixed;
            right: 4rem;
            top: 4.1rem;
            font-size: 15px;
        }
}
`

const Box = styled.div`
display: block;
display:flex;
cursor:pointer;
position:fixed;
right:15rem;
top:3rem;
z-index:2;

&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.6s;
}

@media (max-width: 1024px){
    position: fixed;
    right: 4.8rem;
    top: 4.6rem;
}
@media (max-width: 600px){
    position: fixed;
    right: 2.7rem;
    top: 4.5rem;
}
@media (max-width: 400px){
    position: fixed;
    right: 1.7rem;
    top: 4.5rem;
}
`
const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`

const Line = styled.span`
background:rgba(255, 255, 255, 0.3);
animation: ${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 3px;
margin: 0 0.3rem;
@media (max-width: 1024px){
    height: 1rem;
    margin: 0 0.3rem;
}
@media (max-width: 600px){
    height: 0.8rem;
    margin: 0 0.1rem;
}
@media (max-width: 400px){
    height: 0.8rem;
    margin: 0 0.1rem;
}
`

const SoundBar = () => {

    const ref = useRef(null);
    const [misc, setMisc] = useState(false)

    const handleClick = () => {
        setMisc(!misc);

        if(!misc){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }

  return (
      <SoundContainer>
          <h3>Play</h3>
        <Box onClick={() => handleClick()}>
            <Line click={misc} />
            <Line click={misc} />
            <Line click={misc} />
            <Line click={misc} />
            <Line click={misc} />

            <audio src={mus} ref={ref} loop/>
        </Box>
    </SoundContainer>
  )
}

export default SoundBar