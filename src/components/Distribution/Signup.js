import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { StyledSubscribeBox, StyledSubscribeHeader, StyledSubscribeInput } from './styled'

const Signup = () => {
    return (
        <Row>
            <Col>
                <StyledSubscribeBox>
                    <StyledSubscribeHeader>
                        Sign-up NOW for our <br />
                        pre-sale this weekend! 🚀
                    </StyledSubscribeHeader>

                    <div className="subscribe-form">
                        <form action="">
                            <div className="form-group">
                                <StyledSubscribeInput
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
                </StyledSubscribeBox>
            </Col>
        </Row>
    )
}

export default Signup
