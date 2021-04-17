import React, { useContext } from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { MyCollectionWrapper, StyledNoMetamaskContainer } from './styled'

import { useWallet } from 'use-wallet'
import { AccountContext } from 'contexts/AccountProvider'
import GogoList from '../GogoList'
import metaMaskLogo from '../../images/svgs/metamask-logo.svg'
import noMetamask from '../../images/svgs/plannet.svg'

const MyCollection = () => {
    const { account, connect } = useWallet()
    const { web3Container, walletContract } = useContext(AccountContext)

    const handleConnect = () => {
        if (window.web3 || window.ethereum) {
            connect('injected')
        } else {
            window.open('https://metamask.io/')
        }
    }

    return (
        <div className="draw-trade">
            {account ? (
                <MyCollectionWrapper>
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
                        <GogoList ownerAddress={account} tokenCount={12}></GogoList>
                    </div>
                </MyCollectionWrapper>
            ) : (
                <StyledNoMetamaskContainer className="heading-section">
                    <Container>
                        <Row>
                            <Col style={{ paddingTop: '3rem' }}>
                                <Image src={metaMaskLogo} className="meta-logo" />
                                <h2 style={{ paddingTop: '1rem' }}>
                                    {window.web3 || window.ethereum
                                        ? 'Connect to MetaMask'
                                        : 'Install MetaMask'}
                                </h2>
                                <div className="no-meta-mas">
                                    <Image src={noMetamask}></Image>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ paddingTop: '2rem' }}>
                                <Button
                                    style={{ background: '#fe2afe', marginRight: '1rem' }}
                                    onClick={() => handleConnect()}>
                                    {window.web3 || window.ethereum
                                        ? 'Connect Wallet'
                                        : 'Install MetaMask'}
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </StyledNoMetamaskContainer>
            )}
        </div>
    )
}

export default MyCollection
