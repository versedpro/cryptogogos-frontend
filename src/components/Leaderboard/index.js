import React, { useState, useEffect, useContext, Fragment } from 'react'
import { AccountContext } from '../../contexts/AccountProvider'
import { Container, Row, Col, Form } from 'react-bootstrap'
import * as S from './styled'

const Leaderboard = () => {
    const { walletContract, infuraContract } = useContext(AccountContext)
    const [totalSupply, setTotalSupply] = React.useState(0)
    const [ownersList, setOwnersList] = React.useState([])
    const [sortBy, setSortBy] = useState('highest sale')
    const [loading, setLoading] = useState(false)

    const getTokensList = async () => {
        try {
            setLoading(true)
            const totalSupply = await infuraContract.methods.totalSupply().call()
            setTotalSupply(totalSupply)
            console.log('totalSupply: ', totalSupply)
            let owner
            let ownersObj = {}
            let ownersArray = []
            for(let _tokenId = 1; _tokenId <= totalSupply; _tokenId++) {
                try{
                    owner = await infuraContract.methods.ownerOf(_tokenId).call()
                    if(!ownersObj[owner]) {
                        ownersObj[owner] = 1;
                        ownersArray.push([owner, 1]);
                    }
                    else
                        ownersObj[owner]++;
                } catch (e) {
                    console.log(e)
                }
            }
            setOwnersList(Object.entries(ownersObj).sort((a, b) => b[1] - a[1]))
            console.log(ownersList)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }
    useEffect(() => {
        if (infuraContract) {
            getTokensList()
        }
    }, [infuraContract])

    const sortByOwnedCount = () => {
        setOwnersList(ownersList.sort((a, b) => b[1] - a[1]))
    }

    function onChangeSort(event){
        setSortBy(event.target.value)
    }


return(
    <S.LeaderboardWrapper>
        <section className="title-section">
            <h1>Leaderboard</h1>
        </section>
        <section className="list-sort-section">
            <Container>
                <Row>
                    <Col lg="6" xs="6" className="text-left">
                        <h4>Top Holders</h4>
                    </Col>
                    <Col lg="6" xs="6" className="text-right">
                        <Form.Group as={Row} controlId="sortSelection">
                            <Form.Label column lg="6" className="d-none d-lg-block">Sort By: </Form.Label>
                            <Col lg="6">
                                <Form.Control as="select" size="lg" onChange={onChangeSort}>
                                    <option>Highest Sale</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="list-show-section">
            <Container>
                {loading === false ? (
                    <Fragment>
                        <Row className="list-header">
                            <Col lg="1" sm="1" xs="1">
                                No.
                            </Col>
                            <Col lg="10" sm="10" xs="9">
                                Owner
                            </Col>
                            <Col lg="1" sm="1" xs="2">
                                GOGOs
                            </Col>
                        </Row>
                        <div className="list-body">
                            {ownersList.map((owner, index) => (
                                <Row className="list-content">
                                    <Col lg="1" md="1" sm="1" xs="1">
                                        {index}
                                    </Col>
                                    <Col lg="10" md="10" sm="10" xs="10">
                                        {owner[0]}
                                    </Col>
                                    <Col lg="1" md="1" sm="1" xs="1">
                                        {owner[1]}
                                    </Col>
                                </Row>
                            ))}
                        </div>
                    </Fragment>
                ) : (
                <div>Loading the Leaderboard...</div>
                )}
            </Container>
        </section>
    </S.LeaderboardWrapper>
);
}

export default Leaderboard
