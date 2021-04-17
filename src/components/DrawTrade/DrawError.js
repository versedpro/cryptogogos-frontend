import React from 'react'
import Particles from 'react-particles-js'
import { Fullscreen } from './styled'

const DrawError = ({ error }) => {
    return (
        <Fullscreen style={{ zIndex: 5000 }}>
            <Particles
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                }}></Particles>
            <div className="error" style={{ zIndex: 6000 }}>
                <div>
                    <h1>{error}</h1>
                    <p></p>
                </div>
            </div>
        </Fullscreen>
    )
}

export default DrawError
