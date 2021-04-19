import React, { useContext, useEffect, useState } from 'react'
import SpaceParticles from '../DrawTrade/SpaceTravel/particles'
import * as S from './styled'
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'
import { getTokenList } from '../../utils/api'
import { getBalanceOfAccount, getTotalSupply } from '../../utils/contract'
import { AccountContext } from 'contexts/AccountProvider'

const GogoList = ({ ownerAddress, tokenCount }) => {
    const { walletContract } = useContext(AccountContext)
    const [count, setCount] = useState()
    const [tokens, setTokens] = useState([])

    useEffect(() => {
        getGogosCount()
    }, [])

    useEffect(() => {
        if (count) {
            getTokens()
        }
    }, [count])

    const getGogosCount = async () => {
        let count = -1
        if (ownerAddress) {
            count = await getBalanceOfAccount({
                account: ownerAddress,
                contract: walletContract.methods,
            })
        } else {
            count = await getTotalSupply(walletContract.methods)
        }

        setCount(count)
    }

    const getTokens = async () => {
        const tokenList = await getTokenList({
            balance: count,
            tokenCount: tokenCount ? tokenCount : 12,
            ownerAddress: ownerAddress,
            contract: walletContract.methods,
        })

        setTokens([...tokenList])
    }

    const onLoadedVideo = tokenId => {
        tokens.map(item => {
            if (item.tokenId === tokenId) item.isLoading = false
        })
    }

    const handleVideoClick = (tokenId) => () => {
        window.open(`${process.env.REACT_APP_OPENSEA}/assets/${process.env.REACT_APP_CONTRACT_ADDRESS}/${tokenId}`)
    }

    return (
        <S.GogoListWrapper>
            <section className="gallery-section">
                <Container>
                    <Row>
                        {tokens.map(item => (
                            <Col lg="3" key={item.tokenId}>
                                <div className="video-container">
                                    <video
                                        onClick={handleVideoClick(item.tokenId)}
                                        autoPlay
                                        playsInline
                                        loop
                                        muted
                                        src={item.metaData.image}
                                        onLoadedData={onLoadedVideo(item.tokenId)}
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </S.GogoListWrapper>
    )
}

export default GogoList
