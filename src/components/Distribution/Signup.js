import React from 'react'
import { Col, Row } from 'react-bootstrap'
import * as S from './styled'

const Signup = () => {
    return (
        <Row>
            <Col>
                <S.SubscribeBox>
                    <S.SubscribeHeader>
                        Sign-up NOW for our <br />
                        pre-sale this weekend! 🚀
                    </S.SubscribeHeader>

                    <div className="subscribe-form">
                        <form action="">
                            <div className="form-group">
                                <S.SubscribeInput
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
                </S.SubscribeBox>
            </Col>
        </Row>
    )
}

export default Signup
