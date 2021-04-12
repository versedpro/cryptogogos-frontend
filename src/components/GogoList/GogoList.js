import React from 'react'
import * as S from './styled'
import Web3 from 'web3'
import ABI from '../../utils/contract.abi.json'

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

const GogoList = () => {
}