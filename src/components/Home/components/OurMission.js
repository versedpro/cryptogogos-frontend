import React from 'react'
import photosImg from 'images/photos.png'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'

export default class OurMission extends React.Component {
    render() {
        return (
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
        )
    }
}
