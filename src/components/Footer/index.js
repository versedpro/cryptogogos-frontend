import { Container, Row, Col, Navbar, Nav, Button, Image } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css'
import discord from 'images/svgs/discord.svg'
import instagram from 'images/svgs/insta.svg'
import twitter from 'images/svgs/twitter.svg'
import telegram from 'images/svgs/telegram.svg'
import wallet from 'images/svgs/wallet.svg'

//svg images
import logo from 'images/svgs/logo.svg'

const Footer = () => {
    return (
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
                            <Button disabled style={{ opacity: 0.5 }} variant="outline-light">
                                <Image src={wallet} />
                                My wallet
                            </Button>{' '}
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
    )
}
export default Footer
