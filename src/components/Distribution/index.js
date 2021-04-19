import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css'
import ProgressBar from './ProgressBar'
import { AccountContext } from '../../contexts/AccountProvider'
import Signup from './Signup'
import Gallery from './Gallery'
import TxBox from './TxBox'
import * as S from './styled'

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
        <S.DistributionWrapper>
            <S.Section>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="12" lg="1">
                            <S.Header>
                                <S.LightButton variant="outline-light">
                                    {' '}
                                    <S.StyledSpan></S.StyledSpan> Live
                                </S.LightButton>
                            </S.Header>
                        </Col>
                        <Col xs="12" lg="7">
                            <S.Header>Distribution of CryptoGOGOs</S.Header>
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
                <S.RecentMintedContainer>
                    <Gallery totalSupply={totalSupply} />
                    <Signup />
                </S.RecentMintedContainer>
            </S.Section>
        </S.DistributionWrapper>
    )
}

export default Distribution
