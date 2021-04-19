import styled from 'styled-components'
import variables from '../../theme/variables'

export const MyCollectionWrapper = styled.div`
    .heading-section h2 {
        font-size: 4rem;
    }

    @media (max-width: ${variables.breakpoints.mobile.value}px) {
        h2 {
            font-size: 2.5rem !important;
        }
    }
`
export const StyledNoMetamaskContainer = styled.section`
    h2 {
        font-size: 4rem;
    }
    img {
        height: 300px;
    }

    .no-meta-mas img {
        height: 100px;
    }

    @media (max-width: 900px) {
        h2 {
            font-size: 2.5rem;
        }
        img {
            height: 10rem;
        }
        .meta-logo {
            width: 70%;
        }

        .no-meta-mas img {
            width: 70px;
        }
    }
`
