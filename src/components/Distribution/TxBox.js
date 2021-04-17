import styled from 'styled-components'

const TxBox = props => {
    return (
        <Root>
            <BoxText>{props.text}</BoxText>
            <BoxNumber variant={props.isSmallAmmount ? 'small' : null}>{props.amount}</BoxNumber>
            <BoxLabel variant={props.isRedLabel ? 'red' : null}>{props.label}</BoxLabel>
        </Root>
    )
}

export default TxBox

const Root = styled.div`
    background: rgba(255, 255, 255, 0.6);
    padding: 10px 20px 0;
    color: #000 !important;
    border-radius: 20px;
    text-align: left !important;
    position: relative;
    @media (max-width: 991px) {
        margin-bottom: 20px;
    }
`

const BoxText = styled.div`
    font-family: 'HelveticaNeueCyr Bold';
`

const BoxNumber = styled.div`
    font-family: 'HelveticaNeueCyr Black';
    font-size: ${p => (p.variant === 'small' ? '30px' : '2.5rem')};
    line-height: 58px;
`

const BoxLabel = styled.div`
    position: absolute;
    right: 10px;
    bottom: 18px;
    background: ${p => (p.variant === 'red' ? '#D12F4D' : '#3FD27F')};
    padding: 3px 10px;
    border-radius: 6px;
    color: #fff;
    font-family: 'HelveticaNeueCyr Bold';
    font-size: 12px;
`
