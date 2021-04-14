import React, { createContext, useEffect, useState } from 'react'
import Web3 from 'web3'
import { useWallet } from 'use-wallet'

import { infuraProviderURL, getContract } from '../../utils/constants'

export const AccountContext = createContext({
    infuraContract: null,
    walletContract: null,
    connect: () => {},
})

const AccountProvider = ({ children }) => {
    const { ethereum,  status, connect } = useWallet()
    const [infuraContract, setInfuraContract] = useState(null)
    const [walletContract, setWalletContract] = useState(null)

    useEffect(() => {
        if (!infuraContract) {
            loadInfuraAccount()
        }
    }, [infuraContract])

    useEffect(() => {
        if (status === 'connected') {
            loadWalletAccount()
        }
    }, [status])

    const connectToAccount = () => {
        if (status !== 'connected') {
            connect('injected')
        }
    }

    const loadInfuraAccount = async () => {
        const provider = new Web3.providers.HttpProvider(infuraProviderURL)
        const contract = getContract(provider)
        setInfuraContract(contract)
    }

    const loadWalletAccount = async () => {
        if (ethereum) {
            const contract = getContract(ethereum)
            setWalletContract(contract)
        }
    }

    return (
        <AccountContext.Provider
            value={{
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
