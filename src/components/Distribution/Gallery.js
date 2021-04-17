import React from 'react'
import { Col, Image, Row, Button } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import rocky from '../../images/rocky.png'
import enjin from '../../images/enjin.png'
import shiller from '../../images/shiller.png'
import mushroom from '../../images/mushroom.png'
import lips from '../../images/lips.png'
import maltahead from '../../images/metalhead.png'
import nftGold from '../../images/nft-card-golden.png'

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
                <Image draggable={false} style={{ width: '90%', height: '90%' }} src={rocky} />
                <Image draggable={false} style={{ width: '90%', height: '90%' }} src={mushroom} />
                <Image draggable={false} style={{ width: '90%', height: '90%' }} src={shiller} />
                <Image draggable={false} style={{ width: '90%', height: '90%' }} src={enjin} />

                <Image draggable={false} style={{ width: '90%', height: '90%' }} src={maltahead} />

                <Image draggable={false} style={{ width: '90%', height: '90%' }} src={lips} />
                <Image draggable={false} style={{ width: '90%', height: '90%' }} src={nftGold} />
            </Carousel>
            <Col>
                {' '}
                <Button>Gallery</Button>
            </Col>
        </Row>
    )
}

export default Gallery
