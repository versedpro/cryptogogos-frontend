import React, { useEffect } from 'react'
import Web3 from 'web3'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import * as S from './styled'
import rocky from '../../images/rocky.png'
import enjin from '../../images/enjin.png'
import shiller from '../../images/shiller.png'
import mushroom from '../../images/mushroom.png'
import lips from '../../images/lips.png'
import maltahead from '../../images/metalhead.png'
import nftGold from '../../images/nft-card-golden.png'
import milestoneImg from '../../images/svgs/distribute-milestone.svg'
import milestonProgressImg from '../../images/svgs/mileston-progress.svg'
import ABI from '../../utils/contract.abi.json'

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
    return new window.web3.eth.Contract(ABI, process.env.REACT_APP_CONTRACT_ADDRESS) //testnet
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
}

const Distribution = () => {
    const [totalSupply, setTotalSupply] = React.useState()
    const [account, setAccount] = React.useState()
    const [totalAmount, setTotalAmount] = React.useState()
    const [milestoneAmount, setMilestoneAmount] = React.useState()
    const [milestone, setMilestone] = React.useState()

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
        await getTotalSupply()
    }, [])

    const getTotalSupply = async () => {
        window.contract = await loadContract()
        const totalSupply = await window.contract.methods.totalSupply().call()

        setTotalSupply(totalSupply)
        console.log('totalSupply: ', totalSupply)

        const TotalAmount = totalSupply / 7777 * 100
        setTotalAmount(TotalAmount.toFixed(2))

        if (totalSupply >= 7150) {
            setMilestone(6)
            setMilestoneAmount(((totalSupply - 7150) / 627 * 100).toFixed(2))
        } else if (totalSupply >= 3150) {
            setMilestone(5)
            setMilestoneAmount(((totalSupply - 3150) / 4000 * 100).toFixed(2))
        } else if (totalSupply >= 1150) {
            setMilestone(4)
            setMilestoneAmount(((totalSupply - 1150) / 2000 * 100).toFixed(2))
        } else if (totalSupply >= 300) {
            setMilestone(3)
            setMilestoneAmount(((totalSupply - 300) / 850 * 100).toFixed(2))
        } else if (totalSupply >= 150) {
            setMilestone(2)
            setMilestoneAmount(((totalSupply - 150) / 150 * 100).toFixed(2))
        } else {
            setMilestone(1)
            setMilestoneAmount((totalSupply / 150 * 100).toFixed(2))
        }

        return totalSupply
    }

    return (
        <S.DistributionWrapper>
            <section className="distribution-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="12" lg="1">
                            <h2>
                                <Button variant="outline-light">
                                    {' '}
                                    <span></span> Live
                                </Button>
                            </h2>
                        </Col>
                        <Col xs="12" lg="7">
                            <h2>Distribution of CryptoGOGOs</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="3">
                            <div className="tx-box extra-white">
                                <div className="box-text">Amount of CryptoGOGOs</div>
                                <div className="box-number">{totalAmount}%</div>
                                <div className="box-label red">Sold</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="3">
                            <div className="tx-box">
                                <div className="box-text">Max amount per tx</div>
                                <div className="box-number">2</div>
                                <div className="box-label">Tier 1</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="3">
                            <div className="tx-box">
                                <div className="box-text">Max amount per tx</div>
                                <div className="box-number">2</div>
                                <div className="box-label">Tier 2</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="3">
                            <div className="tx-box">
                                <div className="box-text">Max amount per tx</div>
                                <div className="box-number">XX</div>
                                <div className="box-label ">Tier 3-6</div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="distribution-row">
                        <Col xs="12" lg="2">
                            <div className={`nft-distribute ${milestone >= 1? 'active  in-progress first-distribute extra-white': ''}`}>
                                <div className="distribute-bar"></div>
                                <div className="progressed-bar" style={{width: `calc(${milestone >= 1 ? (milestone === 1 ? milestoneAmount + '%' : '100% - 27px') : '0%'})`}}></div>
                                <div className={`milestone ${milestone >= 1 ? 'first': ''}`}>
                                    <Image src={milestoneImg} />
                                </div>
                                <div className={`milestone-end ${milestone === 1 ? 'milestone-display': ''}`} style={{left: `calc(${milestoneAmount}% - 121px)`}}>
                                    <Image src={milestonProgressImg} />
                                </div>
                                <div className="nft-price">0.05 ETH</div>
                                <div className="nft-numbers">150 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                        <div className={`nft-distribute ${milestone >= 2? 'active  in-progress first-distribute extra-white': ''}`}>
                                <div className="distribute-bar"></div>
                                <div className="progressed-bar" style={{width: `calc(${milestone >= 2 ? (milestone === 2 ? milestoneAmount + '%' : '100% - 27px') : '0%'})`}}></div>
                                <div className={`milestone ${milestone >= 2 ? 'first': ''}`}>
                                    <Image src={milestoneImg} />
                                </div>
                                <div className={`milestone-end ${milestone === 2 ? 'milestone-display': ''}`} style={{left: `calc(${milestoneAmount}% - 121px)`}}>
                                    <Image src={milestonProgressImg} />
                                </div>
                                <div className="nft-price">0.07 ETH</div>
                                <div className="nft-numbers">150 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                        <div className={`nft-distribute ${milestone >= 3? 'active  in-progress first-distribute extra-white': ''}`}>
                                <div className="distribute-bar"></div>
                                <div className="progressed-bar" style={{width: `calc(${milestone >= 3 ? (milestone === 3 ? milestoneAmount + '%' : '100% - 27px') : '0%'})`}}></div>
                                <div className={`milestone ${milestone >= 3 ? 'first': ''}`}>
                                    <Image src={milestoneImg} />
                                </div>
                                <div className={`milestone-end ${milestone === 3 ? 'milestone-display': ''}`} style={{left: `calc(${milestoneAmount}% - 121px)`}}>
                                    <Image src={milestonProgressImg} />
                                </div>
                                <div className="nft-price">0.1 ETH</div>
                                <div className="nft-numbers">850 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                        <div className={`nft-distribute ${milestone >= 4? 'active  in-progress first-distribute extra-white': ''}`}>
                                <div className="distribute-bar"></div>
                                <div className="progressed-bar" style={{width: `calc(${milestone >= 4 ? (milestone === 4 ? milestoneAmount + '%' : '100% - 27px') : '0%'})`}}></div>
                                <div className={`milestone ${milestone >= 4 ? 'first': ''}`}>
                                    <Image src={milestoneImg} />
                                </div>
                                <div className={`milestone-end ${milestone === 4 ? 'milestone-display': ''}`} style={{left: `calc(${milestoneAmount}% - 121px)`}}>
                                    <Image src={milestonProgressImg} />
                                </div>
                                <div className="nft-price">0.15 ETH</div>
                                <div className="nft-numbers">2000 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                        <div className={`nft-distribute ${milestone >= 5? 'active  in-progress first-distribute extra-white': ''}`}>
                                <div className="distribute-bar"></div>
                                <div className="progressed-bar" style={{width: `calc(${milestone >= 5 ? (milestone === 5 ? milestoneAmount + '%' : '100% - 27px') : '0%'})`}}></div>
                                <div className={`milestone ${milestone >= 5 ? 'first': ''}`}>
                                    <Image src={milestoneImg} />
                                </div>
                                <div className={`milestone-end ${milestone === 5 ? 'milestone-display': ''}`} style={{left: `calc(${milestoneAmount}% - 121px)`}}>
                                    <Image src={milestonProgressImg} />
                                </div>
                                <div className="nft-price">0.2 ETH</div>
                                <div className="nft-numbers">4000 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                        <div className={`nft-distribute ${milestone >= 6? 'active  in-progress first-distribute extra-white': ''}`}>
                                <div className="distribute-bar"></div>
                                <div className="progressed-bar" style={{width: `calc(${milestone >= 6 ? (milestone === 6 ? milestoneAmount + '%' : '100% - 27px') : '0%'})`}}></div>
                                <div className={`milestone ${milestone >= 6 ? 'first': ''}`}>
                                    <Image src={milestoneImg} />
                                </div>
                                <div className={`milestone-end ${milestone === 6 ? 'milestone-display': ''}`} style={{left: `calc(${milestoneAmount}% - 121px)`}}>
                                    <Image src={milestonProgressImg} />
                                </div>
                                <div className="nft-price">1 ETH</div>
                                <div className="nft-numbers">627 NFTs</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="recent-minted">
                    <Row>
                        <Col>
                            <div className="text-center">
                                <h4>Latest minted CryptoGogos</h4>
                            </div>
                        </Col>

                        <Carousel
                            containerClass="carousel-container"
                            responsive={responsive}
                            infinite="true"
                            autoPlay
                            autoPlaySpeed={3000}
                            arrows>
                            <Image
                                draggable={false}
                                style={{ width: '90%', height: '90%' }}
                                src={rocky}
                            />

                            <Image
                                draggable={false}
                                style={{ width: '90%', height: '90%' }}
                                src={mushroom}
                            />
                            <Image
                                draggable={false}
                                style={{ width: '90%', height: '90%' }}
                                src={shiller}
                            />
                            <Image
                                draggable={false}
                                style={{ width: '90%', height: '90%' }}
                                src={enjin}
                            />

                            <Image
                                draggable={false}
                                style={{ width: '90%', height: '90%' }}
                                src={maltahead}
                            />

                            <Image
                                draggable={false}
                                style={{ width: '90%', height: '90%' }}
                                src={lips}
                            />
                            <Image
                                draggable={false}
                                style={{ width: '90%', height: '90%' }}
                                src={nftGold}
                            />
                        </Carousel>
                        <Col>
                            {' '}
                            <Button>Gallery</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="subscribe-box">
                                <h2 className="">
                                    Sign-up NOW for our <br />
                                    pre-sale this weekend! 🚀
                                </h2>

                                <div className="subscribe-form">
                                    <form action="">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name=""
                                                className="subscribe-email form-control form-control-lg"
                                                placeholder="Your Email"
                                            />{' '}
                                            <br />
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </S.DistributionWrapper>
    )
}

export default Distribution
