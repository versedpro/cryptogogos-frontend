import styled from 'styled-components'
import bg from '../../images/rocket-body-path.png'

const tribeColors = {
    Orange: 'darkorange',
    Red: 'tomato',
    Purple: 'blueviolet',
    Green: '#3cc071',
}

export const MyCollectionWrapper = styled.div`
    .heading-section h2 {
        font-size: 4rem;
    }
`

export const NoMetamaskContainer = styled.section`
    h2 {
        font-size: 4rem;
    }
    img {
        height: 300px;
    }
    @media (max-width: 900px) {
        h2 {
            font-size: 2.5rem;
        }
        img {
            height: 10rem;
        }
    }
`
