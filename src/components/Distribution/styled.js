import { Button, Container, Image, Row } from 'react-bootstrap'
import styled from 'styled-components'
import distributeImage from '../../images/distribute.png'
import variables from '../../theme/variables'

export const DistributionWrapper = styled.div`
    .first,
    .second,
    .third,
    .fourth,
    .fifth,
    .sixth {
        display: block !important;
    }
    .milestone-end {
        position: absolute;
        top: -81px;
        display: none;
    }
    .milestone-display {
        display: block !important;
    }
    .in-progress .milestone.progressed {
        top: -81px !important;
        display: block !important;
    }
    .in-progress .milestone {
        display: none;
    }
    .in-progress .milestone.first {
        display: block !important;
    }
    .nft-distribute .progressed-bar {
        height: 15px;
        width: calc(100% - 62%);
        display: block;
        background-color: #ecfff4;
        box-shadow: 0px 0px 20px #3cc071;
        position: absolute;
        margin-left: -2px;
    }
    .nft-distribute.in-progress .distribute-bar {
        height: 15px !important;
        width: calc(100% - 33px) !important;
        display: block;
        background-color: #964d85 !important;
    }
    .nft-distribute .progressed-bar {
        display: none !important;
    }
    .nft-distribute.in-progress .progressed-bar {
        display: block !important;
    }
    .nft-distribute .milestone.progressed {
        display: none !important;
    }
    .nft-distribute.in-progress .milestone.progressed {
        display: block !important;
    }
`

export const Section = styled.section`
    margin-top: 50px;
    margin-bottom: 50px !important;
`

export const StyledSpan = styled.span`
    width: 10px;
    height: 10px;
    background: greenyellow;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
`

export const LightButton = styled(Button)`
    padding: 5px 25px;
    border-radius: 12px;
    border: 1px solid #9c4d83;
    margin-right: 30px;
    text-transform: uppercase;

    background: transparent;
    &:hover {
        color: #fff;
        background-color: #3108ed;
        border-color: #f8f9fa;
        border: 1px solid #3108ed;
    }
`

export const Header = styled.h2`
    margin-bottom: 50px;

    @media (max-width: 600px) {
        margin-bottom: 28px;
        font-size: 1.3rem;
    }
`

export const SubscribeHeader = styled(Header)`
    font-size: 50px;
    @media (max-width: 600px) {
        font-size: 40px;
        line-height: 60px;
    }
    @media (max-width: 370px) {
        font-size: 28px;
        line-height: 1.5;
    }
`

export const SubscribeBox = styled.div`
    margin-top: 250px;
    @media (max-width: 991px) {
        margin-top: 80px;
    }
`

export const SubscribeInput = styled.input`
    @media (max-width: 600px) {
        width: 90% !important;
        margin: 0 auto;
        border-radius: 10px;
        font-size: 0.9rem !important;
        padding-top: 8px !important;
    }
`

export const RecentMintedContainer = styled(Container)`
    margin-top: 150px;
    h4 {
        text-align: center;
        margin-bottom: 30px;
    }
    @media (min-width: 1601px) {
        margin-top: 13rem;
        margin-bottom: 12rem;
    }
`
export const StyledImage = styled(Image)`
    width: 90%;
    height: 90%;
`

export const DistributionRow = styled(Row)`
    @media (max-width: ${variables.breakpoints.mobile.value}px) {
        .overflow-hidden {
            overflow: hidden;
        }
    }

    .col-lg-2.col-12 {
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
`

export const NftDistribute = styled.div`
    background-image: url(${distributeImage});
    background-repeat: no-repeat;
    background-position: right;
    background-repeat: no-repeat;
    min-height: 142px;
    margin-top: 50px;
    z-index: 1999;
    padding-top: 8px;
    position: relative;
    .distribute-bar {
        height: 15px;
        width: calc(100% - 33px);
        display: block;
        background-color: #964d85;
    }
    &.active .distribute-bar {
        height: 15px;
        width: calc(100% - 27px);
        display: block;
        background-color: #ecfff4;
        box-shadow: 0px 0px 20px #3cc071;
        position: absolute;
        margin-left: -2px;
    }
    &.active .milestone {
        width: 101px;
        top: -81px;
        position: absolute;
        right: 31px;
        z-index: 99999;
        display: block;
    }
    & .milestone {
        display: none;
    }
    .milestone.first {
        left: -131px;
        display: block;
    }
    &.first-distribute {
        background-image: url(${distributeImage});
        background-repeat: no-repeat;
        background-position: right;
        position: relative;
    }

    @media (max-width: 991px) {
        min-height: 142px;
        margin-top: 0;
        z-index: 1999;
        padding-top: 8px;
        position: relative;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        &.first-distribute {
            margin-top: 50px;
        }
        & .progressed-bar {
            margin-left: 8px !important;
        }
        .milestone.first {
            left: -121px;
            display: block;
        }
    }
`

export const NftNumbers = styled.div`
    color: ${p => (p.isWhite ? 'white' : '#98568d')};
    font-family: 'HelveticaNeueCyr Black';
    font-size: 20px;
`

export const NftPrice = styled.div`
    color: ${p => (p.isWhite ? 'white' : '#98568d')};
    font-family: 'HelveticaNeueCyr Black';
    font-size: 18px;
    padding-top: ${p => (p.isActive ? '39px' : '20px')};
`

export const RootWrapper = styled.div`
    background: rgba(255, 255, 255, 0.6);
    padding: 10px 20px 0;
    color: #000 !important;
    border-radius: 20px;
    text-align: left !important;
    position: relative;
    @media (max-width: 991px) {
        margin-bottom: 20px;
    }
`

export const BoxText = styled.div`
    font-family: 'HelveticaNeueCyr Bold';
`

export const BoxNumber = styled.div`
    font-family: 'HelveticaNeueCyr Black';
    font-size: ${p => (p.variant === 'small' ? '30px' : '2.5rem')};
    line-height: 58px;
`

export const BoxLabel = styled.div`
    position: absolute;
    right: 10px;
    bottom: 18px;
    background: ${p => (p.variant === 'red' ? '#D12F4D' : '#3FD27F')};
    padding: 3px 10px;
    border-radius: 6px;
    color: #fff;
    font-family: 'HelveticaNeueCyr Bold';
    font-size: 12px;
`
