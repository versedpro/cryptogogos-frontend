import styled from 'styled-components'

const tribeColors = {
    Orange: 'darkorange',
    Red: 'tomato',
    Purple: 'blueviolet',
    Green: '#3cc071',
}

export const Fullscreen = styled.div`
    background: black;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 100px;
    .error {
        position: relative;
        z-index: 1000;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 50px;
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