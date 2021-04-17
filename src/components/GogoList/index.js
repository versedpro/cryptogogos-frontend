import React, { useContext, useEffect, useState } from 'react'
import { GogoListWrapper } from './styled'
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

    return (
        <GogoListWrapper>
            <section className="gallery-section">
                <Container>
                    <Row>
                        {tokens.map(item => (
                            <Col lg="3" key={item.tokenId}>
                                <div className="video-container">
                                    <video
                                        autoPlay
                                        playsInline
                                        muted
                                        width="200px"
                                        src={item.metaData.image}
                                        onLoadedData={onLoadedVideo(item.tokenId)}
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </GogoListWrapper>
    )
}

export default GogoList
