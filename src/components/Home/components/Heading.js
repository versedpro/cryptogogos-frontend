import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import headingBanner from 'images/home-banner.png'
import styled from 'styled-components'

export default class Heading extends React.Component {
    render() {
        return (
            <section className="heading-section">
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                Prepare for total <br /> <span>NFT</span> takeover
                            </h1>
                            <ThinHeader>
                                The NFT Trading Card Game the World has never seen.
                                <br />
                                Collect them and join the GOGO-Rebellion
                            </ThinHeader>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="heading-banner">
                    <Row>
                        <Col>
                            <Image fluid src={headingBanner} />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

const ThinHeader = styled.h3`
    font-size: 20px;
    font-weight: 300;
    font-family: 'HelveticaNeueCyr Light';
    padding-top: 20px;
    @media (min-width: 1601px) {
        font-size: 24px;
    }
`
