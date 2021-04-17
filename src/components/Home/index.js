import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import Distribution from 'components/Distribution'
import Heading from './components/Heading'
import OurMission from './components/OurMission'
import styled from 'styled-components'

function Home() {
    return (
        <HomeWrapper>
            <Heading />
            <OurMission />
            <Distribution />
        </HomeWrapper>
    )
}

export default Home

const HomeWrapper = styled.div`
    input.subscribe-email {
        width: 50%;
        margin: 0 auto;
        border-radius: 10px;
        padding-left: 1.5rem;
        font-size: 1.5rem;
        padding-top: 8px;
    }
`
