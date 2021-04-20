import { Navbar, Nav, Button, Image } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css'
import discord from 'images/svgs/discord.svg'
import instagram from 'images/svgs/insta.svg'
import twitter from 'images/svgs/twitter.svg'
import telegram from 'images/svgs/telegram.svg'
import wallet from 'images/svgs/wallet.svg'
import { NavLink } from 'react-router-dom'
import { useWallet } from 'use-wallet'

//svg images
import logo from 'images/svgs/logo.svg'

const Header = () => {
    const { account, connect } = useWallet()
    return (
        <Navbar expand="lg" className="pt-4">
            <Navbar.Brand to="/" exact="full">
                <a href="/"><Image src={logo} /></a>
            </Navbar.Brand>
            <ul className="header-links">
                <li>
                    <a target="_blank" rel="noreferrer" href="https://discord.io/cryptogogos">
                        <Image src={discord} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/cryptogogos ">
                        <Image src={twitter} />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/crypto.gogos">
                        <Image src={instagram} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://t.me/cryptogogos">
                        <Image src={telegram} />
                    </a>
                </li>
            </ul>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link target="_blank" href="https://wiki.cryptogogos.com">
                        <b>Wiki →</b>
                    </Nav.Link>
                    <Nav.Link href="/draw-trade">Draw & Trade</Nav.Link>
                    <Nav.Link href="https://opensea.io/assets/cryptogogos">OpenSea</Nav.Link>
                    {/*<Nav.Link href="#link">Gallery</Nav.Link>*/}
                    {/*<Nav.Link href="#link">Leaderboard</Nav.Link>*/}
                    <NavLink className="nav-link" to="leaderboard">
                        Leaderboard
                    </NavLink>
                    <Nav.Link href="https://wiki.cryptogogos.com/about/">About</Nav.Link>
                    <Nav.Link href="/faq">FAQ</Nav.Link>
                    <Nav.Link href="/mycollection">
                        <Button variant="outline-light">
                            <Image src={wallet} />
                            My wallet
                        </Button>{' '}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
