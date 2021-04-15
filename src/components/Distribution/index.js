import { useContext } from 'react'
import React, { useEffect } from 'react'
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
import ProgressBar from './ProgressBar'
import { AccountContext } from '../../contexts/AccountProvider'

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
    const { infuraContract } = useContext(AccountContext)
    const [totalSupply, setTotalSupply] = React.useState()
    const [totalAmount, setTotalAmount] = React.useState()

    const getTotalSupply = async () => {
        try {
            const totalSupply = await infuraContract.methods.totalSupply().call()
            setTotalSupply(totalSupply)
            console.log('totalSupply: ', totalSupply)

            const TotalAmount = (totalSupply / 7777) * 100
            setTotalAmount(TotalAmount.toFixed(2))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (infuraContract) {
            getTotalSupply()
        }
    }, [infuraContract])

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
                            <div className="tx-box">
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
                                <div className="box-number small">
                                    <small>Unlimited</small>
                                </div>
                                <div className="box-label ">Tier 3-6</div>
                            </div>
                        </Col>
                    </Row>
                    <ProgressBar totalSupply={totalSupply} />
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
