import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import * as S from './styled'
import Distribution from 'components/Distribution'
import Heading from './components/Heading'
import OurMission from './components/OurMission'
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
