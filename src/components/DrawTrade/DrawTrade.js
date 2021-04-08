import React, { useEffect } from 'react'
import Particles from 'react-particles-js'
import Web3 from 'web3'
import rocket from '../../images/rocket_cp_006.png'
import { Container, Row, Col, Image } from 'react-bootstrap'
import {
    addPurchase,
    addTransaction, confirmMint,
    createMintRequest,
    getDrawCard, getTokenMetadata,
    registerUser,
} from '../../utils/api'
import DrawError from './DrawError'
import * as S from './DrawTrade.styled'
import drawBtn from '../../images/button-draw.png'
import tradeBtn from '../../images/button-trade.png'
import packet from '../../images/gogos_card_small.png'
import videoWrap from '../../videos/wrapper_3.mp4'
import axios from 'axios'
import ABI from '../../utils/contract.abi.json'
import GOGODetails from './GOGODetails'

require('dotenv').config()


const loadWeb3 = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
    } else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }

    window.web3.eth.getGasPrice((err, curPrice) => {
        window.gasPrice = curPrice
    })


}

const loadContract = () => {
    // return new window.web3.eth.Contract(ABI, '0x2118E79aBEf1D49d6ff9B38F104A166A00633420') //mainnet
    return new window.web3.eth.Contract(ABI, '0xd90467ADd138dF4362f105437e42Ad6e6DC15193') //testnet
}

const DrawTrade = () => {
    const videoRef = React.createRef()
    const [error, setError] = React.useState(null)
    const [isAuth, setIsAuth] = React.useState(false)
    const [signature, setSignature] = React.useState(false)
    const [isValid, setIsValid] = React.useState(false)
    const [canClose, setCanClose] = React.useState(false)
    const [account, setAccount] = React.useState()
    const [price, setPrice] = React.useState()
    const [metadata, setMetaData] = React.useState({})
    const [isOpening, setIsOpening] = React.useState(false)
    const loadAccount = async () => {
        const web3 = window.web3

        const accounts = await web3.eth.getAccounts()
        setAccount(accounts[0])
        const networkId = await web3.eth.net.getId()
        console.log('networkId', networkId)
    }

    useEffect(async () => {
        await loadWeb3()
        await loadContract()
        await loadAccount()
    }, [])

    const getPackPrice = async () => {
        const mintPrice = await window.contract.methods.getNFTPrice().call()

        setPrice(mintPrice)
        return mintPrice
    }

    const handleAccountsChanged = accounts => {
        if (accounts.length === 0) {
            setAccount(null)
            console.log(account)
            // MetaMask is locked or the user has not connected any accounts
            console.log('Please connect to MetaMask.')
        } else if (accounts[0] !== account) {
            setAccount(accounts[0])
            // Do any other work!
        }
    }

    const handleDrawCardClicked = async () => {
        setIsOpening('Connecting Metamask...')
        window.contract = await loadContract()

        const web3 = window.web3

        try {
            const {data: {signature}} = await createMintRequest(account)
            setSignature(signature)

            const price = await getPackPrice()


            await window.contract.methods
                .mint()
                .send({
                    from: account,
                    value: web3.utils.toWei(price, 'wei'),
                    gas_price: window.gasPrice,
                })
                .on('transactionHash', function(transactionHash) {
                    setIsOpening("Bringing A GOGO to Planet Earth 🌍...")
                })
                .on('error', (err) => {
                    console.log('error')
                })

            const balance = await window.contract.methods.balanceOf(account).call()
            const tokenId = await window.contract.methods.tokenOfOwnerByIndex(account, balance-1).call()

            setIsOpening('Grooming your GOGO ⚡️...')
            await confirmMint(account, tokenId, signature)

            const {data: metadata } = await getTokenMetadata(tokenId)

            console.log(metadata)

            setMetaData(metadata)
        } catch (err) {
            setError("Error while minting")
        }


        window.ethereum.on('accountsChanged', handleAccountsChanged)
    }

    if (!isAuth)
        return (
            <div
                className="draw-trade"
                style={{
                    padding: '250px',
                }}>
                <h2>Enter your pre registered ETH address 👁</h2>
                <form onSubmit={() => setIsAuth(true)}>
                    <input
                        className="form-control"
                        type="text"
                        minLength={8}
                        onChange={e => setIsValid(e.target.value.length >= 8)}
                        style={{ maxWidth: '300px', margin: '40px auto 10px auto' }}
                    />
                    <button disabled={!isValid} type="submit" className="btn btn-primary">
                        <b>Enter The Gogo 🚀</b>
                    </button>
                </form>
            </div>
        )

    if(error)
        return <DrawError error={error}/>

    return (
        <div className="draw-trade">
            {account ? (
                <S.DrawTradeWrapper>
                    {canClose && (
                        <div className="close" onClick={() => setIsOpening(false)}>
                            <b>Go back to spaceship</b>
                        </div>
                    )}
                    <div>
                        <S.Fullscreen
                            style={{
                                opacity: isOpening ? 1 : 0,
                                zIndex: isOpening ? 5000 : -20,
                            }}>
                            <Particles></Particles>

                            {metadata.image ? <GOGODetails metadata={metadata}/> : (
                                <div>
                                    <h2
                                        style={{
                                            color: 'white',
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%,-50%)',
                                        }}>
                                        {isOpening}
                                    </h2>
                                </div>
                            )}
                        </S.Fullscreen>
                        <section className="heading-section space-ship">
                            <Container>
                                <Row>
                                    <Col>
                                        <h2 style={{ paddingTop: '5rem' }}>CryptoGogo Spaceship</h2>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        <section className="rocket-section">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="rocket-buttons">
                                            <div className="card-draw">
                                                <img src={packet} />
                                            </div>

                                            <div className="actions">
                                                <div className="drawButton">
                                                    <img
                                                        src={drawBtn}
                                                        onClick={handleDrawCardClicked}
                                                    />
                                                </div>
                                                <div className="tradeButton">
                                                    <img src={tradeBtn} />
                                                </div>
                                            </div>
                                        </div>
                                        <Image style={{ paddingTop: '10rem' }} src={rocket} />
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        <section className="terms-section">
                            <Container>
                                <Row>
                                    <Col lg="1"></Col>
                                    <Col lg="10" xs="12">
                                        <div className="terms text-left">
                                            <div className="terms-title">
                                                <h4>Terems</h4>
                                            </div>
                                            <div className="terms-content">
                                                <p>
                                                    In 2021 the world became like in 1984. The human
                                                    race got enslaved to nonsense NFT Art and bad
                                                    Collectibles. Ugly Kitties and terrible Punks
                                                    mesmerized humankind and stole their money.
                                                    Seeking revenge for the unjust treatment of the
                                                    true meaning of NFTs, the CryptoGOGOs are coming
                                                    the far way from PLANET GOGO in the Metaverse to
                                                    start a revolution. Alongside the GOGO-Rebellion
                                                    (CryptoGOGO-Collectors), they bring back freedom
                                                    and power to humankind by taking over the NFT
                                                    WORLD.
                                                </p>

                                                <p>
                                                    In 2021 the world became like in 1984. The human
                                                    race got enslaved to nonsense NFT Art and bad
                                                    Collectibles. Ugly Kitties and terrible Punks
                                                    mesmerized humankind and stole their money.
                                                    Seeking revenge for the unjust treatment of the
                                                    true meaning of NFTs,
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="1"></Col>
                                </Row>
                            </Container>
                        </section>
                    </div>
                </S.DrawTradeWrapper>
            ) : (
                <div className="no-meta-mask text-center">
                    <h1>Connect to metamask</h1>
                    <div className="no-meta-mas">
                        <svg
                            width="94"
                            height="80"
                            viewBox="0 0 94 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M67.81 47.1C68.01 46.5 68.21 45.8 68.41 45.1C69.81 39.5 68.91 33.6 65.81 28.6C62.81 23.6 58.01 20.1 52.41 18.8C50.71 18.4 49.01 18.2 47.31 18.2C42.31 18.2 37.71 19.9 34.01 22.7C32.81 21.9 31.61 21.2 30.41 20.5C30.61 20.1 30.71 19.7 30.81 19.3C31.21 17.6 30.91 15.8 30.01 14.3C29.11 12.8 27.61 11.7 25.91 11.3C25.41 11.2 24.91 11.1 24.31 11.1C22.01 11.1 19.91 12.3 18.71 14.2C11.81 11 10.11 11.6 9.31004 12.6C7.11004 15.6 17.01 24.8 26.61 32.7C26.41 33.4 26.11 34.1 26.01 34.8C23.21 46.5 30.41 58.2 42.01 61.1C43.71 61.5 45.41 61.7 47.11 61.7C52.01 61.7 56.71 60 60.41 57.2C61.31 57.7 62.11 58.3 62.91 58.8C62.71 59.2 62.61 59.5 62.51 59.9C61.61 63.7 63.91 67.5 67.71 68.4C68.21 68.5 68.81 68.6 69.41 68.6C71.81 68.6 73.91 67.4 75.21 65.5C79.31 67.4 81.61 68.1 83.01 68.1C84.11 68.1 84.61 67.7 84.91 67.3C87.31 64.2 75.41 53.5 67.81 47.1ZM51.81 20.8C56.91 22 61.31 25.2 64.01 29.7C66.71 34.2 67.61 39.5 66.31 44.6C66.01 45.6 65.71 46.6 65.31 47.6C64.11 50.4 62.41 52.8 60.21 54.7C55.11 51.5 49.71 47.8 44.21 43.8C38.31 39.6 33.21 35.6 28.91 32.1C32.11 25 39.21 20.3 47.21 20.3C48.71 20.3 50.31 20.5 51.81 20.8ZM19.81 16.7C20.31 14.6 22.11 13.2 24.31 13.2C24.71 13.2 25.01 13.2 25.41 13.3C26.61 13.6 27.61 14.3 28.21 15.4C28.81 16.4 29.01 17.7 28.71 18.9C28.21 21 26.41 22.4 24.21 22.4C23.81 22.4 23.51 22.4 23.11 22.3C20.71 21.6 19.21 19.2 19.81 16.7ZM11.01 13.9C11.31 13.8 12.81 13.7 17.91 16.1V16.2C17.01 19.7 19.21 23.3 22.71 24.2C23.21 24.3 23.71 24.4 24.31 24.4C26.21 24.4 27.91 23.6 29.21 22.3C30.21 22.9 31.31 23.6 32.31 24.2C30.31 26.1 28.71 28.4 27.51 30.9C16.61 21.9 10.91 15.6 11.01 13.9ZM47.21 59.8C45.61 59.8 44.11 59.6 42.51 59.2C31.91 56.7 25.41 46 28.01 35.4C28.11 35 28.21 34.6 28.31 34.2C35.71 40.2 42.51 45.1 43.21 45.6C48.51 49.4 53.71 53 58.71 56.1C55.41 58.5 51.41 59.8 47.21 59.8ZM69.51 66.7C69.11 66.7 68.71 66.7 68.31 66.6C65.61 65.9 63.91 63.2 64.61 60.5C65.11 58.2 67.21 56.7 69.51 56.7C69.91 56.7 70.31 56.7 70.71 56.8C72.01 57.1 73.11 57.9 73.81 59.1C74.51 60.2 74.71 61.6 74.41 62.9C73.91 65.1 71.81 66.7 69.51 66.7ZM76.21 63.8C76.31 63.6 76.31 63.5 76.41 63.3C76.81 61.5 76.51 59.6 75.61 58C74.61 56.4 73.11 55.3 71.31 54.8C70.81 54.7 70.21 54.6 69.61 54.6C67.51 54.6 65.51 55.6 64.21 57.1C63.51 56.7 62.91 56.3 62.21 55.9C64.21 54 65.91 51.7 67.11 49.1C78.21 58.5 83.21 64.6 83.41 66.2C83.01 66.2 81.41 66.3 76.21 63.8Z"
                                fill="url(#paint0_linear)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="31.8176"
                                    y1="55.4126"
                                    x2="62.5907"
                                    y2="24.6395"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFA7FB" />
                                    <stop offset="1" stop-color="#C657B1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DrawTrade