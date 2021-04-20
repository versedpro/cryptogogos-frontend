import React from 'react'
import { GOGODetailsWrapper } from './styled'

const GOGODetails = ({ metadata, tokenId }) => {
    const getTribe = ({ attributes }) => attributes.filter(t => t.trait_type === 'Tribe')[0].value

    const tribe = getTribe(metadata)

    const [showText, setShowText] = React.useState(false)

    setTimeout(() => setShowText(true), 5000)
    return (
        <GOGODetailsWrapper tribe={tribe}>
            <video playsInline muted loop controls={false} autoPlay={true}>
                <source src={metadata.image} type={'video/mp4'} />
            </video>
            {showText ? (
                <p>
                    <h1>{metadata.name}</h1>
                    <div className="tribe-wrapper">
                        <span>Tribe</span>
                        <h2 className="tribe">{tribe}</h2>
                        <div className="opensea-link">
                            <h1>
                                <div className="label">View your GOGO on </div>
                                <b>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href={`${process.env.REACT_APP_OPENSEA}/assets/${process.env.REACT_APP_CONTRACT_ADDRESS}/${tokenId}`}>
                                        OpenSea →{' '}
                                    </a>
                                </b>
                            </h1>
                        </div>
                    </div>
                </p>
            ) : (
                <h1 className="Loading">Finalizing...</h1>
            )}
        </GOGODetailsWrapper>
    )
}

export default GOGODetails
