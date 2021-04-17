import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import Distribution from 'components/Distribution'
import Heading from './components/Heading'
import OurMission from './components/OurMission'
import { HomeWrapper } from './styled'

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
