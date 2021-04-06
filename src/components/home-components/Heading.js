import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap'
import headingBanner from '../../images/svgs/banner.svg'

export default class Heading extends React.Component {

    render() {
        return (<section className="heading-section">
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
            <Container fluid className="heading-banner">
                <Row>
                    <Col>
                        <Image fluid src={headingBanner} />

                    </Col>
                </Row>

            </Container>
        </section>)
    }
}