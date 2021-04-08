import React from 'react'
import * as S from './DrawTrade.styled'
const GOGODetails = ({metadata, tokenId}) => {

    const getTribe = ({ attributes }) => attributes.filter((t) => t.trait_type === 'Tribe')[0].value

    const tribe = getTribe(metadata)
    return (
        <S.GOGODetailsWrapper tribe={tribe}>
            <video
                width="600px"
                playsInline
                muted
                loop
                controls={false}
                autoPlay={true}>
                <source src={metadata.image} type={'video/mp4'} />
            </video>
            <p>
                <h1>{metadata.name}</h1>
                <div className="tribe-wrapper">
                    <span>Tribe</span>
                <h2 className="tribe">{tribe}</h2>
                    <div className="opensea-link">
                        <h1><div className="label">View your GOGO on </div><b><a target="_blank"  rel="noopener" href={`https://opensea.io/assets/${process.env.REACT_APP_CONTRACT_ADDRESS}/${tokenId}`}>OpenSea → </a></b></h1>
                    </div>
                </div>
            </p>
        </S.GOGODetailsWrapper>
    )

}

export default GOGODetails
