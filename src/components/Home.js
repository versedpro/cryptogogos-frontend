import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import * as S from './Home.styled'
import Heading from './home_components/Heading'
import Distribution from './home_components/Distribution'
import OurMission from './home_components/OurMission'


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
