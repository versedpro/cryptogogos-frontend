import React, { createContext, useEffect, useState, useCallback } from 'react'
import Web3 from 'web3'

import { infuraProviderURL, getContract } from '../../utils/constants'

export const AccountContext = createContext({
    contract: null,
})

const AccountProvider = ({ children }) => {
    const [contract, setContract] = useState(null)

    useEffect(() => {
        if (!contract) {
            loadAccount()
        }
    }, [contract])

    const loadAccount = async () => {
        if (infuraProviderURL) {
            const provider = new Web3.providers.HttpProvider(infuraProviderURL)
            const contract = getContract(provider)
            setContract(contract)
        }
    }

    return (
        <AccountContext.Provider
            value={{
                contract,
                loadAccount,
            }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
