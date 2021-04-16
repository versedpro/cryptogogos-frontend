import React, { useState, useEffect, Fragment } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import * as S from './styled'
import { GuardSpinner } from 'react-spinners-kit'
import TextTruncate from 'react-text-truncate'
import {
    getLeaderboardList
} from 'utils/api'

const Leaderboard = () => {
    const [ownersList, setOwnersList] = React.useState([])
    const [sortBy, setSortBy] = useState('highest sale')
    const [loading, setLoading] = useState(false)

    const getLeaderboard = async () => {
        setLoading(true)
        try {
            const leaderboard = await getLeaderboardList()
            setOwnersList(leaderboard.data.slice(0, 10))
            setLoading(false)
       } catch(e) {
            console.log(e)
            setLoading(false)
       }
    }
    useEffect(() => {
        getLeaderboard()
    }, [])

    const sortByOwnedCount = () => {
        setOwnersList(ownersList.sort((a, b) => a[1] - b[1]))
    }

    function onChangeSort(event){
        setSortBy(event.target.value)
    }


return(
    <S.LeaderboardWrapper>
        <section className="title-section">
            <h2>Leaderboard</h2>
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
                            <Col lg="6" className="sort-container">
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
                            <Col lg="1" sm="1" xs="1">
                                GOGOs
                            </Col>
                        </Row>
                        <div className="list-body">
                            {ownersList.map((owner, index) => (
                                <Row className="list-content">
                                    <Col lg="1" md="1" sm="1" xs="1">
                                        {index+1}
                                    </Col>
                                    <Col lg="10" md="10" sm="10" xs="9">
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={`${process.env.REACT_APP_OPENSEA}/accounts/${owner.owner_address}`}>
                                            <TextTruncate
                                                line={1}
                                                element="div"
                                                truncateText="..."
                                                text={owner.owner_address}
                                            />
                                        </a>
                                    </Col>
                                    <Col lg="1" md="1" sm="1" xs="1">
                                        {owner.balance}
                                    </Col>
                                </Row>
                            ))}
                        </div>
                    </Fragment>
                ) : (
                    <div class="list-loading">
                        <GuardSpinner size={50} frontColor="rgba(255, 255, 255, 1)" backColor="rgba(255, 255, 255, 0.3)" loading={loading} />
                    </div>
                )}
            </Container>
        </section>
    </S.LeaderboardWrapper>
);
}

export default Leaderboard
