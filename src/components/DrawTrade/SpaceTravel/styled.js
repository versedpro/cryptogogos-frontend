import styled from 'styled-components'
import Particles from 'react-particles-js'

export const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5000;
    padding: 0 80px;
    max-width: 100vw;
    overflow-y: scroll;

    .error {
        position: relative;
        z-index: 1000;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 50px;

        pre {
            margin: 20px;
            max-width: 50%;
        }
        h1 {
            line-height: 60px;
            font-size: 48px;
        }
    }

    .loading {
        position: relative;
        top: -100px;
        z-index: 1;
    }
    video {
        height: 50vh;
        position: relative;
        z-index: 5;
    }
`
export const Canvas = styled.canvas`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100vw;
`

export const StyledParticles = styled(Particles)`
    z-index: 5001;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`
