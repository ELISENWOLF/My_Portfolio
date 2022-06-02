import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
// import { loadFull } from 'tsparticles'
import { useCallback, useMemo } from 'react'

const ParticlesComponent = (props) => {

  const options = useMemo(() => {
     return {
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
          },
          modes: {
            repulse: {
              distance: 100,
            }
          }
        },
        fulScreen: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          links: {
              color: "#a3cdef",
              enable: true,
              distance: 80,
              opacity: 0.6,
              size: 7,
          },
          collision: {
            enable: true
          },
          move: {
              enable: true,
              speed: { min: 0, max: 3},
          },
          opacity: {
            value: { min: 0, max: 0.7},
          },
          size: {
            value: { min: 1, max: 3 },
          }
        }
      }
     }, [])

  const particlesInit = useCallback((engine) => {
    loadSlim(engine)
  })
 

  return (
    <Particles init={particlesInit} id={props.id} options={options}/> 
  )
  };

export default ParticlesComponent