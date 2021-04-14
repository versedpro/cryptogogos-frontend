import { useState, useEffect } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css'
import milestoneImg from '../../images/svgs/distribute-milestone.svg'
import milestonProgressImg from '../../images/svgs/mileston-progress.svg'

const ProgressBar = ({ totalSupply }) => {
    const [milestoneAmount, setMilestoneAmount] = useState(0)
    const [milestone, setMilestone] = useState(0)

    useEffect(() => {
        if (totalSupply >= 7150) {
            setMilestone(6)
            setMilestoneAmount((((totalSupply - 7150) / 627) * 100).toFixed(2))
        } else if (totalSupply >= 3150) {
            setMilestone(5)
            setMilestoneAmount((((totalSupply - 3150) / 4000) * 100).toFixed(2))
        } else if (totalSupply >= 1150) {
            setMilestone(4)
            setMilestoneAmount((((totalSupply - 1150) / 2000) * 100).toFixed(2))
        } else if (totalSupply >= 300) {
            setMilestone(3)
            setMilestoneAmount((((totalSupply - 300) / 850) * 100).toFixed(2))
        } else if (totalSupply >= 150) {
            setMilestone(2)
            setMilestoneAmount((((totalSupply - 150) / 150) * 100).toFixed(2))
        } else {
            setMilestone(1)
            setMilestoneAmount(((totalSupply / 150) * 100).toFixed(2))
        }
    }, [totalSupply])

    return (
        <Row className="distribution-row">
            <Col xs="12" lg="2">
                <div
                    className={`nft-distribute ${
                        milestone >= 1 ? 'active  in-progress first-distribute' : ''
                    } ${milestone == 1 && 'extra-white'}`}>
                    <div className="distribute-bar"></div>
                    <div
                        className="progressed-bar"
                        style={{
                            width: `calc(${
                                milestone >= 1
                                    ? milestone === 1
                                        ? milestoneAmount + '%'
                                        : '100% - 27px'
                                    : '0%'
                            })`,
                        }}></div>
                    <div className={`milestone ${milestone >= 1 ? 'first' : ''}`}>
                        <Image src={milestoneImg} />
                    </div>
                    <div
                        className={`milestone-end ${milestone === 1 ? 'milestone-display' : ''}`}
                        style={{ left: `calc(${milestoneAmount}% - 121px)` }}>
                        <Image src={milestonProgressImg} />
                    </div>
                    <div className="nft-price">0.05 ETH</div>
                    <div className="nft-numbers">150 NFTs</div>
                </div>
            </Col>
            <Col xs="12" lg="2">
                <div
                    className={`nft-distribute ${
                        milestone >= 2 ? 'active  in-progress first-distribute' : ''
                    } ${milestone == 2 && 'extra-white'}`}>
                    <div className="distribute-bar"></div>
                    <div
                        className="progressed-bar"
                        style={{
                            width: `calc(${
                                milestone >= 2
                                    ? milestone === 2
                                        ? milestoneAmount + '%'
                                        : '100% - 27px'
                                    : '0%'
                            })`,
                        }}></div>
                    <div className={`milestone ${milestone >= 2 ? 'first' : ''}`}>
                        <Image src={milestoneImg} />
                    </div>
                    <div
                        className={`milestone-end ${milestone === 2 ? 'milestone-display' : ''}`}
                        style={{ left: `calc(${milestoneAmount}% - 121px)` }}>
                        <Image src={milestonProgressImg} />
                    </div>
                    <div className="nft-price">0.07 ETH</div>
                    <div className="nft-numbers">150 NFTs</div>
                </div>
            </Col>
            <Col xs="12" lg="2">
                <div
                    className={`nft-distribute ${
                        milestone >= 3 ? 'active  in-progress first-distribute' : ''
                    } ${milestone == 3 && 'extra-white'}`}>
                    <div className="distribute-bar"></div>
                    <div
                        className="progressed-bar"
                        style={{
                            width: `calc(${
                                milestone >= 3
                                    ? milestone === 3
                                        ? milestoneAmount + '%'
                                        : '100% - 27px'
                                    : '0%'
                            })`,
                        }}></div>
                    <div className={`milestone ${milestone >= 3 ? 'first' : ''}`}>
                        <Image src={milestoneImg} />
                    </div>
                    <div
                        className={`milestone-end ${milestone === 3 ? 'milestone-display' : ''}`}
                        style={{ left: `calc(${milestoneAmount}% - 121px)` }}>
                        <Image src={milestonProgressImg} />
                    </div>
                    <div className="nft-price">0.1 ETH</div>
                    <div className="nft-numbers">850 NFTs</div>
                </div>
            </Col>
            <Col xs="12" lg="2">
                <div
                    className={`nft-distribute ${
                        milestone >= 4 ? 'active  in-progress first-distribute' : ''
                    } ${milestone == 4 && 'extra-white'}`}>
                    <div className="distribute-bar"></div>
                    <div
                        className="progressed-bar"
                        style={{
                            width: `calc(${
                                milestone >= 4
                                    ? milestone === 4
                                        ? milestoneAmount + '%'
                                        : '100% - 27px'
                                    : '0%'
                            })`,
                        }}></div>
                    <div className={`milestone ${milestone >= 4 ? 'first' : ''}`}>
                        <Image src={milestoneImg} />
                    </div>
                    <div
                        className={`milestone-end ${milestone === 4 ? 'milestone-display' : ''}`}
                        style={{ left: `calc(${milestoneAmount}% - 121px)` }}>
                        <Image src={milestonProgressImg} />
                    </div>
                    <div className="nft-price">0.15 ETH</div>
                    <div className="nft-numbers">2000 NFTs</div>
                </div>
            </Col>
            <Col xs="12" lg="2">
                <div
                    className={`nft-distribute ${
                        milestone >= 5 ? 'active  in-progress first-distribute extra-white' : ''
                    }`}>
                    <div className="distribute-bar"></div>
                    <div
                        className="progressed-bar"
                        style={{
                            width: `calc(${
                                milestone >= 5
                                    ? milestone === 5
                                        ? milestoneAmount + '%'
                                        : '100% - 27px'
                                    : '0%'
                            })`,
                        }}></div>
                    <div className={`milestone ${milestone >= 5 ? 'first' : ''}`}>
                        <Image src={milestoneImg} />
                    </div>
                    <div
                        className={`milestone-end ${milestone === 5 ? 'milestone-display' : ''}`}
                        style={{ left: `calc(${milestoneAmount}% - 121px)` }}>
                        <Image src={milestonProgressImg} />
                    </div>
                    <div className="nft-price">0.2 ETH</div>
                    <div className="nft-numbers">4000 NFTs</div>
                </div>
            </Col>
            <Col xs="12" lg="2">
                <div
                    className={`nft-distribute ${
                        milestone >= 6 ? 'active  in-progress first-distribute extra-white' : ''
                    }`}>
                    <div className="distribute-bar"></div>
                    <div
                        className="progressed-bar"
                        style={{
                            width: `calc(${
                                milestone >= 6
                                    ? milestone === 6
                                        ? milestoneAmount + '%'
                                        : '100% - 27px'
                                    : '0%'
                            })`,
                        }}></div>
                    <div className={`milestone ${milestone >= 6 ? 'first' : ''}`}>
                        <Image src={milestoneImg} />
                    </div>
                    <div
                        className={`milestone-end ${milestone === 6 ? 'milestone-display' : ''}`}
                        style={{ left: `calc(${milestoneAmount}% - 121px)` }}>
                        <Image src={milestonProgressImg} />
                    </div>
                    <div className="nft-price">1 ETH</div>
                    <div className="nft-numbers">627 NFTs</div>
                </div>
            </Col>
        </Row>
    )
}

export default ProgressBar
