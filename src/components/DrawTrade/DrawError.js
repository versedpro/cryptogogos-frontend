import React from 'react'
import { DrawErrorFullScreenWrapper, StyledParticles } from './styled'

const DrawError = ({ error }) => {
    return (
        <DrawErrorFullScreenWrapper>
            <StyledParticles />
            <div className="error" style={{ zIndex: 6000 }}>
                <div>
                    <h1>{error}</h1>
                    <p></p>
                </div>
            </div>
        </DrawErrorFullScreenWrapper>
    )
}

export default DrawError
