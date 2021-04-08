import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import rocky from '../../images/rocky.png'
import enjin from '../../images/enjin.png'
import shiller from '../../images/shiller.png'
import mushroom from '../../images/mushroom.png'
import lips from '../../images/lips.png'
import maltahead from '../../images/metalhead.png'
import nftGold from '../../images/nft-card-golden.png'
import milestone from '../../images/svgs/distribute-milestone.svg'
import milestonProgress from '../../images/svgs/mileston-progress.svg'

export default class Distribution extends React.Component {
    responsive = {
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

    render() {
        return (
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
                                <div className="box-number">1.8%</div>
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
                            <div className="nft-distribute active  in-progress first-distribute extra-white">
                                <div className="distribute-bar"></div>
                                <div className="progressed-bar"></div>
                                <div className="milestone first">
                                    <Image src={milestone} />
                                </div>
                                <div className="milestone">
                                    <Image src={milestone} />
                                </div>
                                <div className="milestone progressed">
                                    <Image src={milestonProgress} />
                                </div>
                                <div className="nft-price">0.05 ETH</div>
                                <div className="nft-numbers">150 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                            <div className="nft-distribute">
                                <div className="distribute-bar"></div>
                                <div className="progressed-bar"></div>
                                <div className="milestone">
                                    <Image src={milestone} />
                                </div>
                                <div className="milestone progressed">
                                    <Image src={milestonProgress} />
                                </div>
                                <div className="nft-price">0.07 ETH</div>
                                <div className="nft-numbers">150 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                            <div className="nft-distribute">
                                <div className="distribute-bar"></div>
                                <div className="progressed-bar"></div>
                                <div className="milestone">
                                    <Image src={milestone} />
                                </div>
                                <div className="milestone progressed">
                                    <Image src={milestonProgress} />
                                </div>
                                <div className="nft-price">0.1 ETH</div>
                                <div className="nft-numbers">850 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                            <div className="nft-distribute">
                                <div className="distribute-bar"></div>
                                <div className="progressed-bar"></div>
                                <div className="milestone">
                                    <Image src={milestone} />
                                </div>
                                <div className="milestone progressed">
                                    <Image src={milestonProgress} />
                                </div>
                                <div className="nft-price">0.15 ETH</div>
                                <div className="nft-numbers">2000 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                            <div className="nft-distribute">
                                <div className="distribute-bar"></div>
                                <div className="progressed-bar"></div>
                                <div className="milestone">
                                    <Image src={milestone} />
                                </div>
                                <div className="milestone progressed">
                                    <Image src={milestonProgress} />
                                </div>
                                <div className="nft-price">0.2 ETH</div>
                                <div className="nft-numbers">4000 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                            <div className="nft-distribute">
                                <div className="distribute-bar"></div>
                                <div className="progressed-bar"></div>
                                <div className="milestone">
                                    <Image src={milestone} />
                                </div>
                                <div className="milestone progressed">
                                    <Image src={milestonProgress} />
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
                            responsive={this.responsive}
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
        )
    }
}
