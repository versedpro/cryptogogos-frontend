import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import SpaceTravel from './SpaceTravel'
import * as S from './styled'
import { srcery } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const DrawError = ({ error, errorObject }) => {
    const [copyText, setCopyText] = useState('📋 Copy Error')
    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(errorObject, null, 4))
        setCopyText('Copied!')
    }
    return (
        <S.FullScreen>
            <SpaceTravel />
            <div className="error" style={{ zIndex: 6000 }}>
                <div className="error-wrapper">
                    <h1>{error}</h1>
                    <SyntaxHighlighter language="json" style={srcery}>
                        {JSON.stringify(errorObject, null, 4)}
                    </SyntaxHighlighter>
                    <div className="copy-wrapper">
                        <a onClick={handleCopy}>{copyText}</a>
                    </div>
                </div>
            </div>
        </S.FullScreen>
    )
}

export default DrawError
