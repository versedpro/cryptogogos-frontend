import styled from 'styled-components'

export const LeaderboardWrapper = styled.div`
    .title-section {
        margin-top: 5rem;
        h2 {
            font-size: 3rem;
        }
    }
    .list-sort-section {
        margin-top: 4rem;
        .container .row {
            display: flex;
            align-items: center;
        }
        .sort-container {
            position: relative;
            select::-ms-expand {
                display: none;
            }
            select {
                background: transparent;
                color: white;
                font-size: 16px;
                option {
                    color: black;
                }
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                display: block;
                -ms-word-break: normal;
                word-break: normal;
            }
            .form-control:focus {
                box-shadow: none;
                border-color: white;
            }
        }
        .sort-container:after {
            content: '\\25BC';
            right: 25px;
            top: 15px;
            position: absolute;
            pointer-events: none;
        }
        
        
    }
    .list-show-section {
        margin-top: 4rem;
        width: 90%;
        margin: auto;
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
                div:nth-child(2) {
                    text-align: left;
                }
                div:nth-child(3) {
                    text-align: center;
                }
                a {
                    color: black;
                }
            }
            div:nth-child(n+4) {
                color: white;
                background-color: rgba(255, 255, 255, 0.3);
                a {
                    color: white;
                }
            }
        }
        .list-loading {
            display: flex;
            justify-content: center;
        }
    }
`