import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import discord from '../../images/svgs/discord.svg'
import instagram from '../../images/svgs/insta.svg'
import twitter from '../../images/svgs/twitter.svg'
import telegram from '../../images/svgs/telegram.svg'
import wallet from '../../images/svgs/wallet.svg'
import logo from '../../images/svgs/logo.svg'
import footerImage from '../../images/svgs/footer.svg'
import footerBgImage from '../../images/footer-bg.png'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="footer-logo">
                            <Image src={logo} />
                        </div>
                        <div className="footer-copyright">
                            © 2021, CryptoGogos. <br />
                            All rights reserved
                        </div>
                    </Col>
                    <Col lg="6">
                        <Row>
                            <Col lg="5">
                                <ul>
                                    <li>
                                        <a href="#">Draw & Trade</a>
                                    </li>
                                    <li>
                                        <a href="leaderboard">Leaderboard</a>
                                    </li>
                                    <li>
                                        <a href="#">Suggestion & Offers</a>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg="2">
                                <ul>
                                    <li>
                                        <a href="https://wiki.cryptogogos.com/about/">About</a>
                                    </li>
                                    <li>
                                        <a href="https://wiki.cryptogogos.com/faq">FAQ</a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://wiki.cryptogogos.com">
                                            <b>Wiki</b>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg="5" className="right-footer">
                                <LightButton
                                    disabled
                                    style={{ opacity: 0.5 }}
                                    variant="outline-light">
                                    <Image src={wallet} />
                                    My wallet
                                </LightButton>{' '}
                                <ul className="footer-links">
                                    <li>
                                        <a href="https://discord.io/cryptogogos">
                                            <Image src={discord} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/cryptogogos ">
                                            <Image src={twitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/crypto.gogos">
                                            <Image src={instagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/cryptogogos">
                                            <Image src={telegram} />
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </FooterWrapper>
    )
}

export default Footer

const LightButton = styled(Button)`
    background: transparent;
    border: 1px solid #fff;
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
const FooterWrapper = styled.section`
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
