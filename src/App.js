import './App.css'
import { Container, Row, Col, Navbar, Nav, Button, Image } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css'
import MintCountown from './components/MintCountown/MintCountdown'
import discord from './images/svgs/discord.svg'
import instagram from './images/svgs/insta.svg'
import twitter from './images/svgs/twitter.svg'
import telegram from './images/svgs/telegram.svg'
import wallet from './images/svgs/wallet.svg'
import Home from './components/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DrawTrade from './components/DrawTrade'
import Faq from './components/Faq'
import Gallery from './components/Gallery'
import Leaderboard from './components/Leaderboard'

//svg images
import logo from './images/svgs/logo.svg'

function App() {
    return (
        <Router>
            <div className="main-body text-center">
                <Container fluid>
                    <Row>
                        <Col>
                            <Navbar expand="lg">
                                <Navbar.Brand to="/" exact="full">
                                    <Image src={logo} />
                                </Navbar.Brand>
                                <ul className="header-links">
                                    <li>
                                        <a target="_blank" href="https://discord.io/cryptogogos">
                                            <Image src={discord} />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://twitter.com/cryptogogos ">
                                            <Image src={twitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://www.instagram.com/crypto.gogos">
                                            <Image src={instagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://t.me/cryptogogos">
                                            <Image src={telegram} />
                                        </a>
                                    </li>
                                </ul>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                        <Nav.Link
                                            target="_blank"
                                            href="https://wiki.cryptogogos.com">
                                            <b>Wiki →</b>
                                        </Nav.Link>
                                        <Nav.Link href="#home">Draw & Trade</Nav.Link>
                                        <Nav.Link href="https://opensea.io/assets/cryptogogos">OpenSea</Nav.Link>
                                        {/*<Nav.Link href="#link">Gallery</Nav.Link>*/}
                                        {/*<Nav.Link href="#link">Leaderboard</Nav.Link>*/}
                                        <Nav.Link  href="https://wiki.cryptogogos.com/about/">About</Nav.Link>
                                        <Nav.Link  href="https://wiki.cryptogogos.com/faq">FAQ</Nav.Link>
                                        <Nav.Link href="#link">
                                            <Button disabled style={{opacity: 0.5}} variant="outline-light">
                                                <Image src={wallet} />
                                                My wallet
                                            </Button>{' '}
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/df2852a2b39ef0790c7acc806cdaca35-n" component={DrawTrade} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/leaderboard" component={Leaderboard} />
                    <Route path="/df2852a2b39ef0790c7acc806cdaca35" component={MintCountown} />
                </Switch>

                <section className="footer">
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
                                                    href="https://wiki.cryptogogos.com">
                                                    <b>Wiki</b>
                                                </a>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col lg="5" className="right-footer">
                                        <Button  disabled style={{opacity: .5}} variant="outline-light">
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
                </section>
            </div>
        </Router>
    )
}
export default App
