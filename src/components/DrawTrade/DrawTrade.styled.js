import styled from 'styled-components'
import bg from '../../images/rocket-bg.png'

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
export const DrawTradeWrapper = styled.div`
    input.subscribe-email {
        width: 50%;
        margin: 0 auto;
        border-radius: 10px;
        padding-left: 1.5rem;
        font-size: 1.5rem;
        padding-top: 8px;
    }

    .close {
        position: absolute;
        top: 50px;
        right: 50px;
        font-size: 24px;
    }

    .rocket-section {
        background: url(${bg}) no-repeat;
        background-size: cover;
        background-position: center top;
    }

    .rocket-body {
        padding-top: 17rem;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        height: auto;
    }

    .drawButton {
        padding-top: 8rem;
    }
    .tradeButton {
        padding-top: 2rem;
    }

    section.terms-section {
        padding-top: 10rem;
    }
    section .terms-title {
        opacity: 0.9;
    }
    section .terms-content {
        padding-top: 3rem;
        font-size: 1rem;
        line-height: 25px;
        color: rgba(255,255,255, 0.75);
    }
    .rocket-buttons {
        position: absolute;
        top: 22rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .rocket-buttons .actions img {
        cursor: pointer;
    }
`
export const GOGODetailsWrapper = styled.div`
    h1 {
        font-size: 40px;
    }

    .opensea-link {
        h1 {
            .label {
                opacity: 0.5;
                margin-bottom: 8px;
            }
            font-size: 14px;
        }
    }

    .tribe {
        color: ${props => tribeColors[props.tribe]};
        line-height: 20px;
        font-size: 29px;
    }

    .tribe-wrapper {
        margin: 0 auto;

        max-width: 300px;
        margin-top: 40px;
        span {
            font-weight: bold;
            display: inline-block;
            font-size: 12px;
            letter-spacing: 2px;
            opacity: 0.6;
            text-transform: uppercase;
        }
    }

    zindex: 5000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
