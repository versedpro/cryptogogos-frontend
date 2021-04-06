import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-top: 150px;
    position: relative;

    .particles {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        @media(max-width: 850px) {
        display: none;
        }
    }

    h1 {
        padding: 0;
    }

    .teaser {
        font-size: 45px;
        line-height: 60px;
    }

    .time {
        font-size: 60px;
        line-height: 90px;
        span {
            color: #ff4ba6;
        }
    }

    @media (max-width: 600px) {
        .teaser {
            font-size: 25px;
            line-height: 40px;
        }

        .time {
            font-size: 40px;
            line-height: 60px;
            span {
                color: #ff4ba6;
                font-size: 40px;
                line-height: 60px;
            }
        }
    }
`
