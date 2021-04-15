import React, { useState, useEffect, useContext } from 'react'
import { useWallet } from 'use-wallet'
import { AccountContext } from '../../contexts/AccountProvider'
import { Container, Row, Col, FormControl, Form } from 'react-bootstrap'
import {
    addPurchase,
    addTransaction,
    confirmMint,
    createMintRequest,
    getDrawCard,
    getTokenMetadata,
    registerUser,
} from '../../utils/api'
import * as S from './styled'

const Leaderboard = () => {
    const { account, connect, ethereum, status } = useWallet()
    const { walletContract, infuraContract } = useContext(AccountContext)
    const [totalSupply, setTotalSupply] = React.useState()
    const [totalAmount, setTotalAmount] = React.useState()
    const [sortBy, setSortBy] = useState('highest')

    const getTotalSupply = async () => {
        try {
            const totalSupply = await infuraContract.methods.totalSupply().call()
            setTotalSupply(totalSupply)
            console.log('totalSupply: ', totalSupply)

            const TotalAmount = (totalSupply / 7777) * 100
            setTotalAmount(TotalAmount.toFixed(2))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (infuraContract) {
            getTotalSupply()
        }
    }, [infuraContract])
    
    useEffect(() => {
        connect('injected')
    }, [])


return(
    <S.LeaderboardWrapper>
        <section className="title-section">
            <h1>Leaderboard</h1>
        </section>
        <section className="list-show-section">
            <Container>
                <Row>
                    <Col lg="6" xs="6" className="text-left">
                        <h4>Top Holders</h4>
                    </Col>
                    <Col lg="6" xs="6" className="text-right">
                        <Form.Group as={Row} controlId="sortSelection">
                            <Form.Label column lg="6" className="d-none d-lg-block">Sort By: </Form.Label>
                            <Col lg="6">
                                <Form.Control as="select" size="lg">
                                    <option>Highest Sale</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </section>
    </S.LeaderboardWrapper>
);
}

export default Leaderboard
