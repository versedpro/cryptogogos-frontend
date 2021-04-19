import React from 'react'
import * as S from './styled'

const DrawError = ({ error }) => {
    return (
        <S.DrawErrorFullScreenWrapper>
            <S.StyledParticles />
            <div className="error" style={{ zIndex: 6000 }}>
                <div>
                    <h1>{error}</h1>
                    <p></p>
                </div>
            </div>
        </S.DrawErrorFullScreenWrapper>
    )
}

export default DrawError
