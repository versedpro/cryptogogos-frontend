import React from 'react'
import { Container, Image } from 'react-bootstrap'
import faqImage from 'images/FAQ_header.png'
import {
    StyledHeader,
    StyledSubheader,
    StyledFaqBox,
    StyledBoldText,
    StyledNormalText,
    StyledLinkText,
} from './styled'

function Faq() {
    return (
        <Container>
            <StyledHeader>Frequently Asked Questions</StyledHeader>
            <Image className="mb-5 mt-3" fluid src={faqImage} />
            <StyledSubheader>How to get Crypto Gogos Cards?</StyledSubheader>
            <StyledFaqBox>
                <StyledBoldText>Draw</StyledBoldText>
                <StyledNormalText>
                    The first way to get a card is by drawing. In the beginning, there are zero
                    cards records. The first user to draw will trigger the mint function and the
                    first card will be drawn.
                </StyledNormalText>
                <StyledNormalText>
                    The game begins by drawing cards. You can visit the “draw” page now to draw your
                    card.
                </StyledNormalText>
                <StyledNormalText>
                    Since CryptoGogos are ERC-721 tokens, NFT marketplaces such as{' '}
                    <StyledLinkText target="_blank" href="https://opensea.io/">
                        OpenSea
                    </StyledLinkText>{' '}
                    are fully supported to sell your cards.
                </StyledNormalText>
            </StyledFaqBox>
            <StyledSubheader>Does my Wallet support NFT assets?</StyledSubheader>
            <StyledFaqBox>
                <StyledNormalText>
                    Any actual ethereum wallet supports ERC-721 NFT assets like CryptoGogos. For
                    example you can use a Metamask Wallet which can be directly connected to{' '}
                    <StyledLinkText target="_blank" href="https://cryptogogos.com">
                        cryptogogos.com
                    </StyledLinkText>
                    . Another very safe alternative would be trust wallet.
                </StyledNormalText>
                <StyledNormalText>
                    The reason why you should use a wallet like metamask or trust wallet is because
                    you can't receive NFTs to a exchange wallet such as Coinbase. They are like a
                    bank account; a platform which stores the value for you and offers transaction
                    services. Furthermore, they run no other Crypto-Assets besides cryptocurrencies.
                    Those are not actual ethereum wallets and won't recognise or accept any ethereum
                    Asset like ERC-721 NFTs.
                </StyledNormalText>
            </StyledFaqBox>
            <StyledSubheader>How do I use Metamask?</StyledSubheader>
            <StyledFaqBox>
                <StyledNormalText>Please take a look into this Metamask-Guide:</StyledNormalText>
                <StyledNormalText>
                    <StyledLinkText
                        target="_blank"
                        href="https://drive.google.com/file/d/1LrRBUMqip-N8z6Fvc9YEt9jTMeC_0RY5/view">
                        https://drive.google.com/file/d/1LrRBUMqip-N8z6Fvc9YEt9jTMeC_0RY5/view
                    </StyledLinkText>{' '}
                    (please insert YT link instead)
                </StyledNormalText>
            </StyledFaqBox>
            <StyledSubheader>How do I know which CryptoGogo I am buying?</StyledSubheader>
            <StyledFaqBox>
                <StyledNormalText>
                    There is no way of knowing. The CryptoGogo will first be revealed after it got
                    minted. We feel it keeps some of the fun in the process to explore the project
                    further after the reveal. Therefore, which CryptoGogo you will buy is up to
                    chance. We want to keep the distribution of the different rarity levels as
                    randomized as possible.
                </StyledNormalText>
            </StyledFaqBox>
            <StyledSubheader>Can I trade my CryptoGogos after the sale?</StyledSubheader>
            <StyledFaqBox>
                <StyledNormalText>
                    Yes, you can! CryptoGogos adhere to the ERC-721 standard, so they can be traded
                    publicly on platforms such as{' '}
                    <StyledLinkText target="_blank" href="https://opensea.io/">
                        opensea.io
                    </StyledLinkText>
                    . Do make sure you're buying only CryptoGogos that are contained within the
                    verified collection! These are the only verifiably legitimate CryptoGogos.
                </StyledNormalText>
            </StyledFaqBox>
            <StyledSubheader>What am I licensed to do with my CryptoGogos?</StyledSubheader>
            <StyledFaqBox>
                <StyledNormalText>
                    You own your CryptoGogo digitally, but are free to do with them as you please.
                    This includes, but is not limited to e.g. printing them for displaying them in
                    the physical world. If you do decide to do something cool with it, don't
                    hesitate to reach out to us on Twitter to show off your handywork!
                </StyledNormalText>
            </StyledFaqBox>
        </Container>
    )
}

export default Faq
