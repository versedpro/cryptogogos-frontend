import styled from 'styled-components'

export const LeaderboardWrapper = styled.div`
    .title-section {
        h1 {
            margin-top: 5rem;
        }
    }
    .list-sort-section {
        margin-top: 4rem;
        .container .row {
            display: flex;
            align-items: center;
        }
        select {
            background: transparent;
            color: white;
            font-size: 16px;
            option {
                color: black;
            }
        }
    }
    .list-show-section {
        margin-top: 4rem;
        .list-header {
            font-size: 12px;
            margin-bottom: 1rem;
            div:nth-child(2) {
                text-align: left;
            }
        }
        .list-body {
            .list-content {
                color: black;
                background-color: rgba(255, 255, 255, 1);
                opacity: 1;
                margin-top: 5px;
                height: 4rem;
                font-size: 15px;
                border-radius: 10px;
                align-items: center;
                div:nth-child(1) {
                    font-weight: bold;
                }
                div:nth-child(2) {
                    text-align: left;
                }
                div:nth-child(3) {
                    font-weight: bold;
                }
            }
            div:nth-child(n+4) {
                color: white;
                background-color: rgba(255, 255, 255, 0.3);
            }
        }
    }
`