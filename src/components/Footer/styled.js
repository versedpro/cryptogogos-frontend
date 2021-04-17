import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import footerImage from '../../images/svgs/footer.svg'
import footerBgImage from '../../images/footer-bg.png'

export const StyledLightButton = styled(Button)`
    background: transparent;
    border: 1px solid #fff;
    opacity: 0.5;
    &:hover {
        color: #fff;
        background-color: #3108ed;
        border-color: #f8f9fa;
        border: 1px solid #3108ed;
    }
    img {
        margin-right: 10px;
    }
`
export const FooterWrapper = styled.section`
    background-image: url(${footerBgImage});
    background-size: cover;
    background-position: center;
    min-height: 300px;
    background-repeat: no-repeat;
    & .container {
        text-align: left;
        border-top: 1px solid #9c4d83;
        margin-top: 18rem;
        padding-top: 30px;
    }
    & ul li {
        list-style-type: none;
    }
    & ul li a {
        color: #ffffff !important;
        text-align: left;
        padding-bottom: 20px;
        display: block;
    }
    .right-footer {
        text-align: right;
    }
    .right-footer .footer-links {
        margin-top: 80px;
        text-align: right;
        margin-left: 40px;
    }

    .footer-links img {
        width: 20px;
    }
    .footer-copyright {
        margin-top: 70px;
        font-size: 14px;
        color: #c1a3c3;
    }
    .right-footer .footer-links li {
        float: left;
        margin-left: 10px;
    }
    @media (max-width: 991px) {
        background-image: url(${footerImage});
        background-size: contain;
        background-position: center bottom;
        min-height: 300px;
        background-repeat: no-repeat;
        .footer-copyright {
            margin-top: 70px;
            font-size: 14px;
            color: #c1a3c3;
            margin-bottom: 50px;
        }
        & .container {
            text-align: center;
            border-top: 1px solid #9c4d83;
            margin-top: 8rem;
            padding-top: 30px;
        }
        & ul li a {
            color: #fff !important;
            text-align: center;
            padding-bottom: 20px;
            display: block;
        }
        .right-footer {
            text-align: center;
        }
        .right-footer .footer-links {
            margin-top: 72px;
            padding-bottom: 80px;
            margin-left: 0;
            margin-right: 0 !important;
            text-align: center;
            padding-left: 0;
            display: flex;
            justify-content: center;
        }
    }
    @media (max-width: 1600px) {
        background-size: contain;
        background-position: center bottom;
        min-height: 300px;
        background-repeat: no-repeat;
    }
`
