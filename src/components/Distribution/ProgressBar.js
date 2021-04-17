import { useState, useEffect } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css'
import milestoneImg from '../../images/svgs/distribute-milestone.svg'
import milestonProgressImg from '../../images/svgs/mileston-progress.svg'
import styled from 'styled-components'
import distributeImage from '../../images/distribute.png'

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
        <DistributionRow>
            <Col xs="12" lg="2">
                <NftDistribute
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
                    <NftPrice isWhite isActive>
                        0.05 ETH
                    </NftPrice>
                    <NftNumbers isWhite>150 NFTs</NftNumbers>
                </NftDistribute>
            </Col>
            <Col xs="12" lg="2">
                <NftDistribute
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
                    <NftPrice>0.07 ETH</NftPrice>
                    <NftNumbers>150 NFTs</NftNumbers>
                </NftDistribute>
            </Col>
            <Col xs="12" lg="2">
                <NftDistribute
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
                    <NftPrice>0.1 ETH</NftPrice>
                    <NftNumbers>850 NFTs</NftNumbers>
                </NftDistribute>
            </Col>
            <Col xs="12" lg="2">
                <NftDistribute
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
                    <NftPrice>0.15 ETH</NftPrice>
                    <NftNumbers>2000 NFTs</NftNumbers>
                </NftDistribute>
            </Col>
            <Col xs="12" lg="2">
                <NftDistribute
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
                    <NftPrice>0.2 ETH</NftPrice>
                    <NftNumbers>4000 NFTs</NftNumbers>
                </NftDistribute>
            </Col>
            <Col xs="12" lg="2">
                <NftDistribute
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
                    <NftPrice>1 ETH</NftPrice>
                    <NftNumbers>627 NFTs</NftNumbers>
                </NftDistribute>
            </Col>
        </DistributionRow>
    )
}

export default ProgressBar

const DistributionRow = styled(Row)`
    .col-lg-2.col-12 {
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
`

const NftDistribute = styled.div`
    background-image: url(${distributeImage});
    background-repeat: no-repeat;
    background-position: right;
    background-repeat: no-repeat;
    min-height: 142px;
    margin-top: 50px;
    z-index: 1999;
    padding-top: 8px;
    position: relative;
    .distribute-bar {
        height: 15px;
        width: calc(100% - 33px);
        display: block;
        background-color: #964d85;
    }
    &.active .distribute-bar {
        height: 15px;
        width: calc(100% - 27px);
        display: block;
        background-color: #ecfff4;
        box-shadow: 0px 0px 20px #3cc071;
        position: absolute;
        margin-left: -2px;
    }
    &.active .milestone {
        width: 101px;
        top: -81px;
        position: absolute;
        right: 31px;
        z-index: 99999;
        display: block;
    }
    & .milestone {
        display: none;
    }
    .milestone.first {
        left: -131px;
        display: block;
    }
    &.first-distribute {
        background-image: url(${distributeImage});
        background-repeat: no-repeat;
        background-position: right;
        position: relative;
    }

    @media (max-width: 991px) {
        min-height: 142px;
        margin-top: 0;
        z-index: 1999;
        padding-top: 8px;
        position: relative;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        &.first-distribute {
            margin-top: 50px;
        }
        & .progressed-bar {
            margin-left: 8px !important;
        }
        .milestone.first {
            left: -121px;
            display: block;
        }
    }
`

const NftNumbers = styled.div`
    color: ${p => (p.isWhite ? 'white' : '#98568d')};
    font-family: 'HelveticaNeueCyr Black';
    font-size: 20px;
`

const NftPrice = styled.div`
    color: ${p => (p.isWhite ? 'white' : '#98568d')};
    font-family: 'HelveticaNeueCyr Black';
    font-size: 18px;
    padding-top: ${p => (p.isActive ? '39px' : '20px')};
`
