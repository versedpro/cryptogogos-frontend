import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const Signup = () => {
    return (
        <Row>
            <Col>
                <SubscribeBox>
                    <SubscribeHeader>
                        Sign-up NOW for our <br />
                        pre-sale this weekend! 🚀
                    </SubscribeHeader>

                    <div className="subscribe-form">
                        <form action="">
                            <div className="form-group">
                                <SubscribeInput
                                    type="email"
                                    name=""
                                    className="subscribe-email form-control form-control-lg"
                                    placeholder="Your Email"
                                />{' '}
                                <br />
                                <button type="submit" className="btn btn-primary btn-lg">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </SubscribeBox>
            </Col>
        </Row>
    )
}

export default Signup

const Header = styled.h2`
    margin-bottom: 50px;

    @media (max-width: 600px) {
        margin-bottom: 28px;
        font-size: 1.3rem;
    }
`

const SubscribeHeader = styled(Header)`
    @media (max-width: 370px) {
        font-size: 40px !important;
        line-height: 60px !important;
    }
    @media (max-width: 600px) {
        font-size: 28px !important;
        line-height: 1.5 !important;
    }
`

const SubscribeBox = styled.div`
    margin-top: 250px;
    @media (max-width: 991px) {
        margin-top: 80px;
    }
`

const SubscribeInput = styled.input`
    @media (max-width: 600px) {
        width: 90% !important;
        margin: 0 auto;
        border-radius: 10px;
        font-size: 0.9rem !important;
        padding-top: 8px !important;
    }
`
