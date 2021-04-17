import { RootWrapper, StyledBoxText, StyledBoxNumber, StyledBoxLabel } from './styled'

const TxBox = props => {
    return (
        <RootWrapper>
            <StyledBoxText>{props.text}</StyledBoxText>
            <StyledBoxNumber variant={props.isSmallAmmount ? 'small' : null}>
                {props.amount}
            </StyledBoxNumber>
            <StyledBoxLabel variant={props.isRedLabel ? 'red' : null}>{props.label}</StyledBoxLabel>
        </RootWrapper>
    )
}

export default TxBox
