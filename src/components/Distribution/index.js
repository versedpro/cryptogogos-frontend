import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Button } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css'
import ProgressBar from './ProgressBar'
import { AccountContext } from '../../contexts/AccountProvider'
import Signup from './Signup'
import Gallery from './Gallery'
import TxBox from './TxBox'

const Distribution = () => {
    const { infuraContract } = useContext(AccountContext)
    const [totalSupply, setTotalSupply] = useState()
    const [totalAmount, setTotalAmount] = useState()

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

    return (
        <DistributionWrapper>
            <Section>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="12" lg="1">
                            <Header>
                                <LightButton variant="outline-light">
                                    {' '}
                                    <Span></Span> Live
                                </LightButton>
                            </Header>
                        </Col>
                        <Col xs="12" lg="7">
                            <Header>Distribution of CryptoGOGOs</Header>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="3">
                            <TxBox
                                text="Amount of CryptoGOGOs"
                                amount={totalAmount + '%'}
                                label="Sold"
                                isRedLabel
                            />
                        </Col>
                        <Col xs="12" lg="3">
                            <TxBox text="Max amount per tx" amount={2} label="Tier 1" />
                        </Col>
                        <Col xs="12" lg="3">
                            <TxBox text="Max amount per tx" amount={2} label="Tier 2" />
                        </Col>
                        <Col xs="12" lg="3">
                            <TxBox
                                text="Max amount per tx"
                                amount={<small>Unlimited</small>}
                                isSmallAmmount
                                label="Tier 3-6"
                            />
                        </Col>
                    </Row>
                    <ProgressBar totalSupply={totalSupply} />
                </Container>
                <RecentMintedContainer>
                    <Gallery />
                    <Signup />
                </RecentMintedContainer>
            </Section>
        </DistributionWrapper>
    )
}

export default Distribution

const DistributionWrapper = styled.div`
    .first,
    .second,
    .third,
    .fourth,
    .fifth,
    .sixth {
        display: block !important;
    }
    .milestone-end {
        position: absolute;
        top: -81px;
        display: none;
    }
    .milestone-display {
        display: block !important;
    }
    .in-progress .milestone.progressed {
        top: -81px !important;
        display: block !important;
    }
    .in-progress .milestone {
        display: none;
    }
    .in-progress .milestone.first {
        display: block !important;
    }
    .nft-distribute .progressed-bar {
        height: 15px;
        width: calc(100% - 62%);
        display: block;
        background-color: #ecfff4;
        box-shadow: 0px 0px 20px #3cc071;
        position: absolute;
        margin-left: -2px;
    }
    .nft-distribute.in-progress .distribute-bar {
        height: 15px !important;
        width: calc(100% - 33px) !important;
        display: block;
        background-color: #964d85 !important;
    }
    .nft-distribute .progressed-bar {
        display: none !important;
    }
    .nft-distribute.in-progress .progressed-bar {
        display: block !important;
    }
    .nft-distribute .milestone.progressed {
        display: none !important;
    }
    .nft-distribute.in-progress .milestone.progressed {
        display: block !important;
    }
`
const Section = styled.section`
    margin-top: 50px;
    margin-bottom: 50px !important;
`

const Span = styled.span`
    width: 10px;
    height: 10px;
    background: greenyellow;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
`

const LightButton = styled(Button)`
    padding: 5px 25px;
    border-radius: 12px;
    border: 1px solid #9c4d83;
    margin-right: 30px;
    text-transform: uppercase;

    background: transparent;
    &:hover {
        color: #fff;
        background-color: #3108ed;
        border-color: #f8f9fa;
        border: 1px solid #3108ed;
    }
`

const Header = styled.h2`
    margin-bottom: 50px;

    @media (max-width: 600px) {
        margin-bottom: 28px;
        font-size: 1.3rem;
    }
`

const RecentMintedContainer = styled(Container)`
    margin-top: 150px;
    h4 {
        text-align: center;
        margin-bottom: 30px;
    }
    @media (min-width: 1601px) {
        margin-top: 13rem;
        margin-bottom: 12rem;
    }
`
