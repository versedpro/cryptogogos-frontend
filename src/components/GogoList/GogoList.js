import React, { useEffect } from 'react'
import * as S from './styled'
import Web3 from 'web3'
import ABI from '../../utils/contract.abi.json'
import {
    addPurchase,
    addTransaction, confirmMint,
    createMintRequest,
    getDrawCard, getTokenMetadata,
    registerUser,
} from '../../utils/api'

require('dotenv').config()

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

const GogoList = (props) => {
    const [account, setAccount] = React.useState()
    const [balance, setBalance] = React.useState()
    const [tokens, setTokens] = React.useState([])

    const loadAccount = async () => {
        const web3 = window.web3

        const accounts = await web3.eth.getAccounts()
        setAccount(accounts[0])
        const networkId = await web3.eth.net.getId()
        console.log('networkId', networkId)
    }

    useEffect(async () => {
        await loadWeb3()
        await loadContract()
        console.log('owner address: ', props.ownerAddress)
        if (props.ownerAddress === undefined) {
            await loadAccount()
        } else {
            setAccount(props.ownerAddress)
        }
    }, [])

    useEffect(() => {
        if (account !== undefined) {
            getBalance()
        }
    }, [account])

    useEffect(() => {
        if (balance !== undefined) {
            getTokens()
        }
    }, [balance])

    const getBalance = async () => {
        window.contract = await loadContract()
        if (props.ownerAddress) {
            setAccount(props.ownerAddress)
        }
        
        const balance = await window.contract.methods.balanceOf(account).call()

        setBalance(balance)
    }

    const getTokens = async () => {
        const tokenList = []
        for (let i = 0; i < balance; i++) {
            tokenList.push(i)
        }

        await Promise.all(tokenList.map(async index => {
            const tokenId = await window.contract.methods.tokenOfOwnerByIndex(account, index).call()
            const {data: metadata } = await getTokenMetadata(tokenId)
            tokens.push({ index: index, tokenId: tokenId, metaData: metadata })
        }))
    }

    return (
        <div>GogoList</div>
    )
}

export default GogoList