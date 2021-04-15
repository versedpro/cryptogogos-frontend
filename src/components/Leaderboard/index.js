import React, { useState, useEffect, useContext } from 'react'
import { useWallet } from 'use-wallet'
import { AccountContext } from '../../contexts/AccountProvider'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {
    addPurchase,
    addTransaction,
    confirmMint,
    createMintRequest,
    getDrawCard,
    getTokenMetadata,
    registerUser,
} from '../../utils/api'
import * as S from './stayled'

const Leaderboard = () => {
    const { account, connect, ethereum, status } = useWallet()
    const { walletContract } = useContext(AccountContext)

    const [sortBy, setSortBy] = useState('highest')

    console.log(status)
    
    useEffect(() => {
        connect('injected')
    }, [])


return(
    <div>Leaderboard</div>
);
}

export default Leaderboard
