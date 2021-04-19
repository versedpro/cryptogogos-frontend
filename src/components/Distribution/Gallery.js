import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import rocky from '../../images/rocky.png'
import enjin from '../../images/enjin.png'
import shiller from '../../images/shiller.png'
import mushroom from '../../images/mushroom.png'
import lips from '../../images/lips.png'
import maltahead from '../../images/metalhead.png'
import nftGold from '../../images/nft-card-golden.png'
import variables from '../../theme/variables'
import { StyledImage } from './styled'
import GogoList from '../GogoList'

const { superLargeDesktop, desktop, tablet, mobile } = variables.breakpoints
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: superLargeDesktop.max, min: superLargeDesktop.min },
        items: 5,
    },
    desktop: {
        breakpoint: { max: desktop.max, min: desktop.min },
        items: 5,
    },
    tablet: {
        breakpoint: { max: tablet.max, min: tablet.min },
        items: 3,
    },
    mobile: {
        breakpoint: { max: mobile.max, min: mobile.min },
        items: 2,
    },
}

const Gallery = () => {
    return (
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
                {/* <StyledImage draggable={false} src={rocky} />
                <StyledImage draggable={false} src={mushroom} />
                <StyledImage draggable={false} src={shiller} />
                <StyledImage draggable={false} src={enjin} />
                <StyledImage draggable={false} src={maltahead} />
                <StyledImage draggable={false} src={lips} />
                <StyledImage draggable={false} src={nftGold} /> */}
                <GogoList tokenCount={10}></GogoList>
            </Carousel>
            <Col>
                {' '}
                <Button>Gallery</Button>
            </Col>
        </Row>
    )
}

export default Gallery
