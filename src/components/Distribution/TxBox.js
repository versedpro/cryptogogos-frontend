import * as S from './styled'

const TxBox = props => {
    return (
        <S.RootWrapper>
            <S.BoxText>{props.text}</S.BoxText>
            <S.BoxNumber variant={props.isSmallAmmount ? 'small' : null}>
                {props.amount}
            </S.BoxNumber>
            <S.BoxLabel variant={props.isRedLabel ? 'red' : null}>{props.label}</S.BoxLabel>
        </S.RootWrapper>
    )
}

export default TxBox
