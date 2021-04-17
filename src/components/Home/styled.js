import styled from 'styled-components'

export const HomeWrapper = styled.div`
    input.subscribe-email {
        width: 50%;
        margin: 0 auto;
        border-radius: 10px;
        padding-left: 1.5rem;
        font-size: 1.5rem;
        padding-top: 8px;
    }
`
export const ThinHeader = styled.h3`
    font-size: 20px;
    font-weight: 300;
    font-family: 'HelveticaNeueCyr Light';
    padding-top: 20px;
    @media (min-width: 1601px) {
        font-size: 24px;
    }
`

export const OurMissionSectionWrapper = styled.section`
    margin-top: 5rem;
    text-align: left;
    & h4 {
        font-size: 20px;
        padding-bottom: 25px;
    }
    & h2 {
        font-size: 1.8rem;
        line-height: 1.5;
    }
    & p {
        color: rgba(255, 255, 255, 0.75);
        font-size: 0.8rem;
        margin-top: 31px;
    }
    & img {
        margin-top: -30px;
    }
    @media (max-width: 600px) {
        & h2 {
            font-size: 1.3rem;
            line-height: 1.5;
        }
    }
    @media (max-width: 991px) {
        margin-top: 5rem;
        text-align: center;
        & img {
            text-align: center;
            margin-left: -50px;
            width: 310px;
            margin: 30px auto;
        }
    }
    @media (min-width: 1601px) {
        & h4 {
            font-size: 24px;
            padding-bottom: 25px;
        }
        & p {
            color: rgba(255, 255, 255, 0.75);
            font-size: 1rem;
            margin-top: 31px;
        }
    }
`
