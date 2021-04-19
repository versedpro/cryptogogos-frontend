import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import headingBanner from 'images/home-banner.png'
import * as S from '../styled'

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
                            <S.ThinHeader>
                                The NFT Trading Card Game the World has never seen.
                                <br />
                                Collect them and join the GOGO-Rebellion
                            </S.ThinHeader>
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
