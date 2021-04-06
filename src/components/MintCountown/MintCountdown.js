import React from 'react'
import * as S from './styled'
import Countdown from 'react-countdown'
import moment from 'moment'
import Particles from 'react-particles-js';

function MintCountown() {
    return (
        <S.Wrapper>
            <div className="particles">
                <Particles />
            </div>
            <div className="content">
                <h1 className="teaser">Secret Pre-sale countdown ⏱</h1>
                <h1 className="time">
                    <Countdown date={new Date((1617734208 + 3600*3) * 1000)} />
                </h1>
            </div>
        </S.Wrapper>
    )
}

export default MintCountown
