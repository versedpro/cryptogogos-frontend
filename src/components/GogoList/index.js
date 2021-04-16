import React, { useContext, useEffect } from 'react'
import * as S from './styled'
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'
import Web3 from 'web3'
import ABI from '../../utils/contract.abi.json'
import { getTokenList } from '../../utils/api'
import { getBalanceOfAccount, getTotalSupply } from '../../utils/contract'
import LoadingMask from 'react-loadingmask'
import 'react-loadingmask/dist/react-loadingmask.css'
import { useWallet } from 'use-wallet'
import { AccountContext } from 'contexts/AccountProvider'

const GogoList = props => {
    const { tokenNumber = 16 } = props
    const { walletContract } = useContext(AccountContext)
    const [ownerAddress, setOwnerAddress] = React.useState(null)
    const [balance, setBalance] = React.useState()
    const [tokens, setTokens] = React.useState([])

    useEffect(() => {
        if (props.ownerAddress) {
            setOwnerAddress(props.ownerAddress)
        }
    }, [])

    useEffect(() => {
        if (ownerAddress !== undefined) {
            getBalance()
        }
    }, [ownerAddress])

    useEffect(() => {
        if (balance !== undefined) {
            getTokens()
        }
    }, [balance])

    const getBalance = async () => {
        let balance = -1
        if (props.ownerAddress) {
            balance = await getBalanceOfAccount({
                account: props.ownerAddress,
                contract: walletContract.methods,
            })
        } else {
            balance = await getTotalSupply({
                contract: walletContract.methods,
            })
        }

        setBalance(balance)
    }

    const getTokens = async () => {
        const tokenList = await getTokenList({
            balance: balance,
            tokenNumber: tokenNumber,
            ownerAddress: props.ownerAddress,
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
        <S.GogoListWrapper>
            <section className="gallery-section">
                <Container>
                    <Row>
                        {tokens.map(item => (
                            <Col lg="3" key={item.tokenId}>
                                <div className="video-container">
                                    <LoadingMask loading={item.isLoading} text={'loading...'}>
                                        {item.metaData.image ? (
                                            <video
                                                autoPlay
                                                playsInline
                                                muted
                                                width="200px"
                                                src={item.metaData.image}
                                                onLoadedData={onLoadedVideo(item.tokenId)}
                                            />
                                        ) : (
                                            <div style={{ width: '200px', height: '200px' }}></div>
                                        )}
                                    </LoadingMask>
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
