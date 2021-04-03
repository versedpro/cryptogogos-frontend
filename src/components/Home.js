import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import rocky from '../images/rocky.png'
import enjin from '../images/enjin.png'
import shiller from '../images/shiller.png'
import mushroom from '../images/mushroom.png'
import lips from '../images/lips.png'
import photosImg from '../images/photos.png'

import maltahead from '../images/metalhead.png'
import nftGold from '../images/nft-card-golden.png'
import { Container, Row, Col, Navbar, Nav, Button, Image } from 'react-bootstrap'
import * as S from './Home.styled'

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

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType },
    } = rest
    // onMove means if dragging or swiping in progress.
    return (
        <button onClick={() => onClick()}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                    <path
                        d="M0.499756 10C0.499756 4.7533 4.75305 0.5 9.99976 0.5H29.9998C35.2465 0.5 39.4998 4.75329 39.4998 10V30C39.4998 35.2467 35.2465 39.5 29.9998 39.5H9.99976C4.75305 39.5 0.499756 35.2467 0.499756 30V10Z"
                        stroke="white"
                    />
                    <path
                        d="M13.7867 21.133L13.7649 21.128H23.133L20.188 24.1739C20.0438 24.3226 19.9647 24.524 19.9647 24.7354C19.9647 24.9469 20.0438 25.1469 20.188 25.2959L20.6463 25.7691C20.7904 25.9178 20.9824 26 21.1871 26C21.392 26 21.5841 25.9184 21.7282 25.7697L26.7765 20.5605C26.9212 20.4112 27.0003 20.2123 26.9998 20.0008C27.0003 19.788 26.9212 19.5891 26.7765 19.44L21.7282 14.2303C21.5841 14.0818 21.3921 14 21.1871 14C20.9824 14 20.7904 14.0819 20.6463 14.2303L20.188 14.7035C20.0438 14.8519 19.9647 15.0502 19.9647 15.2616C19.9647 15.4729 20.0438 15.6608 20.188 15.8093L23.1663 18.8722H13.7762C13.3543 18.8722 12.9998 19.2475 12.9998 19.6827V20.3518C12.9998 20.787 13.3648 21.133 13.7867 21.133Z"
                        fill="white"
                    />
                </g>
            </svg>
        </button>
    )
}
;<Carousel customRightArrow={<CustomRightArrow />} />

const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType },
    } = rest
    // onMove means if dragging or swiping in progress.
    return (
        <button onClick={() => onClick()}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                    <path
                        d="M0.5 10C0.5 4.7533 4.7533 0.5 10 0.5H30C35.2467 0.5 39.5 4.75329 39.5 10V30C39.5 35.2467 35.2467 39.5 30 39.5H10C4.7533 39.5 0.5 35.2467 0.5 30V10Z"
                        stroke="white"
                    />
                    <path
                        d="M26.213 18.867L26.2349 18.872H16.8667L19.8117 15.8261C19.956 15.6774 20.0351 15.476 20.0351 15.2646C20.0351 15.0531 19.956 14.8531 19.8117 14.7041L19.3535 14.2309C19.2094 14.0822 19.0174 14 18.8126 14C18.6077 14 18.4156 14.0816 18.2715 14.2303L13.2232 19.4395C13.0785 19.5888 12.9994 19.7877 13 19.9992C12.9994 20.212 13.0785 20.4109 13.2232 20.56L18.2715 25.7697C18.4156 25.9182 18.6076 26 18.8126 26C19.0174 26 19.2094 25.9181 19.3535 25.7697L19.8117 25.2965C19.956 25.1481 20.0351 24.9498 20.0351 24.7384C20.0351 24.5271 19.956 24.3392 19.8117 24.1907L16.8335 21.1278H26.2235C26.6454 21.1278 27 20.7525 27 20.3173V19.6482C27 19.213 26.635 18.867 26.213 18.867Z"
                        fill="white"
                    />
                </g>
            </svg>
        </button>
    )
}
;<Carousel customLeftArrow={<CustomLeftArrow />} />

function Home() {
    return (
        <S.HomeWrapper>
            >
            <section className="heading-section">
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                Prepare for total <br /> <span>NFT</span> takeover
                            </h1>
                            <h3 className="thin-heading">
                                The NFT Trading Card Game the World has never seen.
                                <br />
                                Collect them and join the GOGO-Rebellion
                            </h3>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="our-mission-section">
                <Container>
                    <Row>
                        <Col lg="1" className="quote">
                            <svg
                                width="36"
                                height="32"
                                viewBox="0 0 36 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    opacity="0.9"
                                    d="M35.7998 31.7H21.4998V19.2C21.4998 14.1333 22.6665 9.86667 24.9998 6.4C27.3998 2.93333 30.9998 0.799998 35.7998 0V6.6C31.5331 7.86666 29.2998 11.1333 29.0998 16.4H35.7998V31.7ZM14.5998 31.7H0.299805V19.2C0.299805 14.1333 1.46647 9.86667 3.79981 6.4C6.19981 2.93333 9.7998 0.799998 14.5998 0V6.6C10.3331 7.86666 8.0998 11.1333 7.89981 16.4H14.5998V31.7Z"
                                    fill="white"
                                />
                            </svg>
                        </Col>
                        <Col lg="5">
                            <h4>Our mission</h4>
                            <h2>
                                {' '}
                                Disrupt the Status Quo & Hail
                                <br /> the CryptoGOGOs{' '}
                            </h2>
                            <p>
                                In 2021 the world became like in 1984. The human race got enslaved
                                to nonsense NFT Art and bad Collectibles. Ugly Kitties and terrible
                                Punks mesmerized humankind and stole their money. Seeking revenge
                                for the unjust treatment of the true meaning of NFTs, the
                                CryptoGOGOs are coming the far way from PLANET GOGO in the Metaverse
                                to start a revolution. Alongside the GOGO-Rebellion
                                (CryptoGOGO-Collectors), they bring back freedom and power to
                                humankind by taking over the NFT WORLD.
                            </p>
                            <Button>About Us</Button>
                        </Col>
                        <Col lg="6">
                            <Image src={photosImg} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="distribution-section">
                <Container>
                    <Row>
                        <Col>
                            <h2>
                                <Button variant="outline-light">
                                    {' '}
                                    <span></span> Live
                                </Button>
                                Distribution of CryptoGOGOs
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="3">
                            <div className="tx-box extra-white">
                                <div className="box-text">Amount of CryptoGOGOs</div>
                                <div className="box-number">0%</div>
                                <div className="box-label red">Sold</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="3">
                            <div className="tx-box">
                                <div className="box-text">Max amount per tx</div>
                                <div className="box-number">XX</div>
                                <div className="box-label">Tier 1</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="3">
                            <div className="tx-box">
                                <div className="box-text">Max amount per tx</div>
                                <div className="box-number">XX</div>
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
                            <div className="nft-distribute active first-distribute extra-white">
                                <div className="distribute-bar"></div>
                                <div className="neon-bar"></div>
                                <div className="nft-price">0.05 ETH</div>
                                <div className="nft-numbers">150 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                            <div className="nft-distribute active">
                                <div className="distribute-bar"></div>
                                <div className="neon-bar"></div>
                                <div className="nft-price">0.07 ETH</div>
                                <div className="nft-numbers">150 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                            <div className="nft-distribute active">
                                <div className="distribute-bar"></div>
                                <div className="nft-price">0.1 ETH</div>
                                <div className="nft-numbers">850 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                            <div className="nft-distribute active">
                                <div className="distribute-bar"></div>
                                <div className="nft-price">0.15 ETH</div>
                                <div className="nft-numbers">2000 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                            <div className="nft-distribute">
                                <div className="distribute-bar"></div>
                                <div className="nft-price">0.2 ETH</div>
                                <div className="nft-numbers">4000 NFTs</div>
                            </div>
                        </Col>
                        <Col xs="12" lg="2">
                            <div className="nft-distribute">
                                <div className="distribute-bar"></div>
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
                            arrows
                            customLeftArrow={<CustomLeftArrow />}
                            customRightArrow={<CustomRightArrow />}>
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
                                                type="button"
                                                className="btn btn-primary btn-lg">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="bottom-img">
                                    <img
                                        class="img-fluid"
                                        src="./assets/images/cards-bottom.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </S.HomeWrapper>
    )
}

export default Home
