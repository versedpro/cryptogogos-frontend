import React from 'react'
import { Wrapper } from './styled'
import Countdown from 'react-countdown'
import moment from 'moment'
import Particles from 'react-particles-js'

function MintCountown() {
    return (
        <Wrapper>
            <div className="particles">
                <Particles />
            </div>
            <div className="content">
                <h1 className="teaser">Secret Pre-sale countdown ⏱</h1>
                <p>
                    Please send your MetaMask Wallet address to info@cryptogogos.com to get access
                    (if you haven’t done so already). Deadline to share your MetaMask Wallet ends in
                </p>
                <h1 className="time">
                    <Countdown date={new Date((1617734208 + 3600 * 5.5) * 1000)} />
                </h1>
            </div>
        </Wrapper>
    )
}

export default MintCountown
