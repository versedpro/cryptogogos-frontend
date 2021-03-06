import styled from 'styled-components'

export const GogoListWrapper = styled.div`
    position: relative;
    background-size: cover;
    background-position: center top;
    background: rgb(0, 0, 0);
    margin: 20px 0;
    padding: 40px 0;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    video {
        max-width: 300px;
        border-radius: 20px;
    }
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

    .gallery-section {
        padding-top: 4rem;
        overflow: hidden;
    }

    .rc-loading {
        width: 200px;
    }

    .rc-loading-icon-default {
        width: 40px !important;
        height: 40px !important;
        background: unset !important;
    }

    .video-container {
        padding: 1rem;
        text-align: -webkit-center;
    }

    .zhigh {
        position: relative;
        z-index: 110000;
    }
`
