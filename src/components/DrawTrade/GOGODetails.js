import React from 'react'
import styled from 'styled-components'

const tribeColors = {
    Orange: 'darkorange',
    Red: 'tomato',
    Purple: 'blueviolet',
    Green: '#3cc071',
}

const GOGODetails = ({ metadata, tokenId }) => {
    const getTribe = ({ attributes }) => attributes.filter(t => t.trait_type === 'Tribe')[0].value

    const tribe = getTribe(metadata)

    const [showText, setShowText] = React.useState(false)

    setTimeout(() => setShowText(true), 5000)
    return (
        <GOGODetailsWrapper tribe={tribe}>
            <video width="600px" playsInline muted loop controls={false} autoPlay={true}>
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

const GOGODetailsWrapper = styled.div`
    h1 {
        font-size: 40px;
    }

    .opensea-link {
        h1 {
            .label {
                opacity: 0.5;
                margin-bottom: 8px;
            }
            font-size: 14px;
        }
    }

    .tribe {
        color: ${props => tribeColors[props.tribe]};
        line-height: 20px;
        font-size: 29px;
    }

    .tribe-wrapper {
        margin: 0 auto;

        max-width: 300px;
        margin-top: 40px;
        span {
            font-weight: bold;
            display: inline-block;
            font-size: 12px;
            letter-spacing: 2px;
            opacity: 0.6;
            text-transform: uppercase;
        }
    }

    zindex: 5000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
