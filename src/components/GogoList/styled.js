import styled from 'styled-components'

export const GogoListWrapper = styled.div`
    background-size: cover;
    background-position: center top;

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
    }

    .rc-loading-icon-default {
        width: 40px !important;
        height: 40px !important;
        background: unset !important;
    }
`