import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import Distribution from 'components/Distribution'
import Heading from './components/Heading'
import OurMission from './components/OurMission'
import * as S from './styled'

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
