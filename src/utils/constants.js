import Web3 from 'web3'
import ABI from './contract.abi.json'

require('dotenv').config()
export const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
export const infuraProviderURL = process.env.REACT_APP_INFURA_RPC_URL

export const getContract = (provider, address = contractAddress) => {
    const web3 = new Web3(provider)
    const contract = new web3.eth.Contract(ABI, address)
    return contract
}
