import styled from 'styled-components'

export const StyledHeader = styled.h1`
    font-family: 'Avenir Next Cyr Medium';
    font-size: 3rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
    @media (max-width: 991px) {
        margin-top: 3rem;
        font-size: 2rem;
    }
    @media (max-width: 600px) {
        margin-top: 2rem;
        font-size: 1.2rem;
    }
`

export const StyledSubheader = styled.h2`
    font-family: 'Avenir Next Cyr Medium';
    font-size: 2rem;
    margin-top: 5rem;
    margin-bottom: 2rem;
    text-align: left;
    @media (max-width: 991px) {
        margin-top: 4rem;
        font-size: 1.6rem;
    }
    @media (max-width: 600px) {
        margin-top: 2rem;
        font-size: 1rem;
    }
`

export const StyledFaqBox = styled.div`
    text-align: left;
    font-size: 1.4rem;
    background: white;
    border-radius: 0 6rem 6rem 6rem;
    padding: 2rem 5rem;
    @media (max-width: 991px) {
        border-radius: 0 5rem 5rem 5rem;
        padding: 1.5rem 4rem;
        font-size: 1.1rem;
    }
    @media (max-width: 600px) {
        border-radius: 0 4rem 4rem 4rem;
        padding: 1rem 3rem;
        font-size: 0.9rem;
    }
`

export const StyledBoldText = styled.p`
    font-family: 'HelveticaNeueCyr Bold';
    color: #222;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 991px) {
        margin-top: 1.2rem;
        margin-bottom: 1.2rem;
    }
`

export const StyledNormalText = styled.p`
    font-family: 'HelveticaNeueCyr Light';
    color: #222;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 991px) {
        margin-top: 1.2rem;
        margin-bottom: 1.2rem;
    }
`

export const StyledLinkText = styled.a`
    font-family: 'HelveticaNeueCyr Light';
    color: #ff1493;
    text-decoration: underline;
    &:hover {
        color: #ff1493;
    }
`
