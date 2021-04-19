import React, { createContext, useEffect, useState } from 'react'
import Web3 from 'web3'

import { infuraProviderURL } from 'utils/constants'
import { getNFTContract } from 'utils/contracts'

export const AccountContext = createContext({
    infuraContract: null,
    walletContract: null,
    web3: null,
    connect: () => {},
    account: null,
    chainId: 0,
})

const AccountProvider = ({ children }) => {
    const [infuraContract, setInfuraContract] = useState(null)
    const [walletContract, setWalletContract] = useState(null)
    const [web3, setWeb3] = useState(null)
    const [account, setAccount] = useState(null)
    const [chainId, setChainId] = useState(0)

    useEffect(() => {
        if (!infuraContract) {
            loadInfuraAccount()
        }
    }, [infuraContract])

    useEffect(() => {
        const { ethereum } = window
        if (ethereum) {
            loadWalletAccount(ethereum)
        }
    }, [window.ethereum])

    const loadInfuraAccount = () => {
        const provider = new Web3.providers.HttpProvider(infuraProviderURL)
        const contract = getNFTContract(provider)
        setInfuraContract(contract)
    }

    const handleAccountsChanged = accounts => {
        if (accounts.length === 0) {
            setAccount(null)
            console.log('Please connect to MetaMask.')
        } else if (accounts[0] !== account) {
            setAccount(accounts[0])
            // Do any other work!
        }
    }

    const loadWalletAccount = async provider => {
        const web3 = new Web3(provider)
        setWeb3(web3)
        const contract = getNFTContract(provider)
        setWalletContract(contract)
        const accounts = await web3.eth.getAccounts()
        if (accounts.length) setAccount(accounts[0])
        setChainId(await web3.eth.getChainId())

        // Change watchers
        provider.on('accountsChanged', handleAccountsChanged)
        provider.on('chainChanged', chainId => {
            setChainId(parseInt(chainId))
        })
    }

    return (
        <AccountContext.Provider
            value={{
                web3,
                infuraContract,
                walletContract,
                loadInfuraAccount,
                loadWalletAccount,
                account,
                chainId,
            }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
