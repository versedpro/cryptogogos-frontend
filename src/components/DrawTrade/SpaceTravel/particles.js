import React from 'react'
import * as S  from './styled'

function SpaceParticles (props) {
    return (
        <S.StyledParticles
            params={{
                particles: {
                    number: {
                        value: 20,
                    },
                    size: {
                        value: 1,
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse',
                        },
                    },
                },
            }}
            style={{

            }}
        />
    )
}

export default SpaceParticles
