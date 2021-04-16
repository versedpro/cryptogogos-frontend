import React, { useEffect, useContext } from 'react'
import Web3 from 'web3'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import * as S from './styled'

import { useWallet } from 'use-wallet'
import { AccountContext } from 'contexts/AccountProvider'
import GogoList from '../GogoList'
import WalletConnection from '../WalletConnection/index'

const MyCollection = () => {
    const { account, connect } = useWallet()
    const { web3Container, walletContract } = useContext(AccountContext)

    return (
        <div className="draw-trade">
            {account ? (
                <S.MyCollectionWrapper>
                    <div>
                        <section className="heading-section">
                            <Container>
                                <Row>
                                    <Col>
                                        <h2 style={{ paddingTop: '5rem' }}>My Collections</h2>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        <GogoList ownerAddress={account}></GogoList>
                    </div>
                </S.MyCollectionWrapper>
            ) : (
                <WalletConnection></WalletConnection>
            )}
        </div>
    )
}

export default MyCollection
