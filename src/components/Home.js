import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import * as S from './Home.styled'
import Heading from './home-components/Heading'
import Distribution from './home-components/Distribution'
import OurMission from './home-components/OurMission'


function Home() {
    return (
        <S.HomeWrapper>
            <Heading />
            <OurMission />
            <Distribution />
        </S.HomeWrapper>
    )
}

export default Home
