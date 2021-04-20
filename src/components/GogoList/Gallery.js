import React, { useEffect, useState, useContext } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import variables from '../../theme/variables'
import { getTokenList } from '../../utils/api'
import { AccountContext } from 'contexts/AccountProvider'

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
        items: 2,
    },
    mobile: {
        breakpoint: { max: mobile.max, min: mobile.min },
        items: 1,
    },
}

const Gallery = ({ totalSupply }) => {
    const { infuraContract } = useContext(AccountContext)
    const [tokenList, setTokens] = useState([])

    useEffect(() => {
        getTokens()
    }, [totalSupply])

    const getTokens = async () => {
        const tokenList = await getTokenList({
            balance: totalSupply,
            contract: infuraContract && infuraContract.methods,
            tokenCount: 10,
            ownerAddress: null,
        })

        setTokens([...tokenList])
    }
    return (
            <Carousel
                containerClass="carousel-container"
                responsive={responsive}
                infinite="true"
                autoPlay
                playsInline
                autoPlaySpeed={3000}
                arrows>
                {tokenList.map(item => (
                    <div key={item.tokenId}>
                        <video autoPlay playsInline muted loop width="300px" src={item.metaData.image} />
                    </div>
                ))}
            </Carousel>
    )
}

export default Gallery
