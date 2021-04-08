import React from 'react'
import Particles from 'react-particles-js'
import * as S from './DrawTrade.styled'

const DrawError = (error) => <S.Fullscreen style={{ zIndex: 5000 }}>
    <Particles style={{position: 'absolute', top: 0, left:0, right:0, bottom: 0, zIndex: 1}}></Particles>
    <div className="error" style={{ zIndex: 6000 }}>
        <div><h1>An unexpected error has happened. Please refresh the page</h1><p>
        </p></div>
    </div>
</S.Fullscreen>

export default DrawError
