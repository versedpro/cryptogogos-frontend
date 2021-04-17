import Web3 from 'web3'
import ABI from './contract.abi.json'
import { contractAddress } from './constants'

export const getNFTContract = (provider, address = contractAddress) => {
    const web3 = new Web3(provider)
    const contract = new web3.eth.Contract(ABI, address)
    return contract
}
