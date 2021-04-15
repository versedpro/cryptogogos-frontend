import React, { createContext, useEffect, useState } from 'react'
import Web3 from 'web3'
import { useWallet } from 'use-wallet'

import { infuraProviderURL, getContract } from '../../utils/constants'

export const AccountContext = createContext({
    infuraContract: null,
    walletContract: null,
    web3Container: null,
    connect: () => {},
})

const AccountProvider = ({ children }) => {
    const [infuraContract, setInfuraContract] = useState(null)
    const [walletContract, setWalletContract] = useState(null)
    const [web3Container, setWeb3Container] = useState(null)

    useEffect(() => {
        if (!infuraContract) {
            loadInfuraAccount()
        }
    }, [infuraContract])

    useEffect(() => {
        if (window.ethereum) {
            loadWalletAccount()
        }
    }, [window.ethereum])

    const loadInfuraAccount = () => {
        const provider = new Web3.providers.HttpProvider(infuraProviderURL)
        const contract = getContract(provider)
        setInfuraContract(contract)
    }

    const loadWalletAccount = () => {
        const web3 = new Web3(window.ethereum)
        setWeb3Container(web3)
        const contract = getContract(window.ethereum)
        setWalletContract(contract)
    }

    return (
        <AccountContext.Provider
            value={{
                web3Container,
                infuraContract,
                walletContract,
                loadInfuraAccount,
                loadWalletAccount,
            }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
