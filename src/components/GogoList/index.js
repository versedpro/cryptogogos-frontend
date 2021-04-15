import React, { useContext, useEffect } from 'react'
import * as S from './styled'
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'
import Web3 from 'web3'
import ABI from '../../utils/contract.abi.json'
import { getTokenMetadata } from '../../utils/api'
import LoadingMask from 'react-loadingmask'
import 'react-loadingmask/dist/react-loadingmask.css'
import { useWallet } from 'use-wallet'
import { AccountContext } from 'contexts/AccountProvider'

const loadWeb3 = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
    } else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }

    window.web3.eth.getGasPrice((err, curPrice) => {
        window.gasPrice = curPrice
    })
}

const loadContract = () => {
    // return new window.web3.eth.Contract(ABI, '0x2118E79aBEf1D49d6ff9B38F104A166A00633420') //mainnet
    return new window.web3.eth.Contract(ABI, process.env.REACT_APP_CONTRACT_ADDRESS) //testnet
}

const GogoList = props => {
    const { tokenNumber = 16 } = props
    const { account, connect, ethereum, status } = useWallet()
    const { walletContract } = useContext(AccountContext)
    // const [account, setAccount] = React.useState()
    const [ownerAddress, setOwnerAddress] = React.useState()
    const [balance, setBalance] = React.useState()
    const [tokens, setTokens] = React.useState([])

    // const loadAccount = async () => {
    //     const web3 = window.web3

    //     const accounts = await web3.eth.getAccounts()
    //     setAccount(accounts[0])
    //     const networkId = await web3.eth.net.getId()
    //     console.log('networkId', networkId)
    // }

    useEffect(async () => {
        // await loadWeb3()
        // await loadContract()

        if (props.ownerAddress) {
            setOwnerAddress(props.ownerAddress)
        } else {
            // await loadAccount()
            setOwnerAddress(null)
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
        window.contract = await loadContract()
        if (props.ownerAddress) {
            console.log('account address: ', props.ownerAddress)

            const balance = await window.contract.methods.balanceOf(props.ownerAddress).call()
            setBalance(balance)
        } else {
            const totalSupply = await window.contract.methods.totalSupply().call()
            setBalance(totalSupply)
        }
    }

    const getTokens = async () => {
        const tokenList = []
        for (let i = balance - 1; i >= 0 && i >= balance - tokenNumber; i--) {
            tokenList.push(i)
        }

        console.log(account, tokenList)

        if (props.ownerAddress) {
            let _tokenList = []
            await Promise.all(
                tokenList.map(async index => {
                    const tokenId = await window.contract.methods
                        .tokenOfOwnerByIndex(account, index)
                        .call()
                    const { data: metadata } = await getTokenMetadata(tokenId)
                    _tokenList.push({ index: index, tokenId: tokenId, metaData: metadata })
                }),
            )
            _tokenList.sort(function (a, b) {
                if (a.tokenId < b.tokenId) return -1
                if (a.tokenId > b.tokenId) return 1
                return 0
            })
            setTokens([..._tokenList])
        } else {
            let _tokenList = []

            await Promise.all(
                tokenList.map(async index => {
                    const tokenId = await window.contract.methods.tokenByIndex(index).call()
                    const { data: metadata } = await getTokenMetadata(tokenId)
                    _tokenList.push({
                        index: index,
                        tokenId: tokenId,
                        metaData: metadata,
                        isLoading: true,
                    })
                }),
            )
            _tokenList.sort(function (a, b) {
                if (a.tokenId < b.tokenId) return -1
                if (a.tokenId > b.tokenId) return 1
                return 0
            })
            setTokens([..._tokenList])
        }
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
                                                onLoadEnd={onLoadedVideo(item.tokenId)}
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
