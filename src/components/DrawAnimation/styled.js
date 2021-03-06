import styled from 'styled-components'

export const DrawAnimationWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50000;

    video {
        max-height: 70vh;
    }
`

export const Video = styled.video`
    transform: scale(${props => (props.isOpening ? 1 : 0)});
`
