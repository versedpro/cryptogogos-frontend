import { useEffect, useState, useContext } from 'react'
import { AccountContext } from 'contexts/AccountProvider'
import { requiredChainId } from 'utils/constants'

const useAccount = () => {
    const { account, chainId } = useContext(AccountContext)
    return { account, chainId, isCorrectChain: chainId === requiredChainId }
}
export default useAccount
