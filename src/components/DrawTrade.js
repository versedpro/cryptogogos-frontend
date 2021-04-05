import React from 'react';
import Web3 from 'web3';
import drawBtn from '../images/button-draw.png';
import packet from '../images/gogos_card_small.png'
import axios from 'axios';

require('dotenv').config();

let abi = require("../contracts/cryptogogo/abi.json")


export default class DrawTrade extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            price: null,
            cardImg: null
        }
        this.loadWeb3();
        this.loadAccount();
        this.getPackPrice();
    }
    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()

        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)

        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')

        }
    }

    async loadAccount() {
        const web3 = window.web3

        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        const networkId = await web3.eth.net.getId()
        console.log('networkId', networkId)

    }
    async loadContract() {
        return await new window.web3.eth.Contract([
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "metadata",
                        "type": "string"
                    }
                ],
                "name": "getCard",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "baseURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getApproved",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "ownerOf",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "name": "tokenByIndex",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "name": "tokenOfOwnerByIndex",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "tokenURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "tokenURIS",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ], '0x0F029615ccC1623a419279d6ed089061A81a1Ede');
    }

    async drawCard() {
        const web3 = window.web3
        console.log('clicked');
        const price = await this.getPackPrice();
        const amount = JSON.stringify(price.data);
        console.log('price', amount)
        const transactionParameters = {
            nonce: '0x00', // ignored by MetaMask
            //   gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
            gas: '0x2710', // customizable by user during MetaMask confirmation.
            to: '0x0e9E923BB5F8fcE78f8a1577C0f965258e1C85Cf', // Required except during contract publications.
            from: window.ethereum.selectedAddress, // must match user's active address.
            value: parseInt(Web3.utils.toWei(amount, 'ether')).toString(16), // Only required to send ether to the recipient from the initiating external account.
            //   data:
            //     '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
            chainId: '1', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
        };

        // txHash is a hex string
        // As with any RPC call, it may throw an error
        const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],

        });

        if (txHash) {
            ;
            console.log(txHash)
            const obj = {
                eth_address: this.state.account,
                quantity: 1,
                value: amount,
                status: "success",
                txHash: txHash
            }
            this.addPurchase(obj);
        }

        let cards = await this.getDrawCard();

        if (cards.data.length === 0) {
            cards = await this.getDrawCard()
        }
        this.setState({ cardImage: cards.data[0].image })
        let file = await this.getFileHash(JSON.stringify(cards.data[0].id));
        window.contract = await this.loadContract();

        const supply = await window.contract.methods.totalSupply().call();
        if (file) {

            const result = await window.contract.methods.getCard(this.state.account, `https://gateway.pinata.cloud/ipfs/${file.IpfsHash}`).send({ from: this.state.account });
            console.log('result', result)

        }


    }

    // For now, 'eth_accounts' will continue to always return an array
    handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
            this.setState({ account: false })
            console.log(this.state.account)
            // MetaMask is locked or the user has not connected any accounts
            console.log('Please connect to MetaMask.');
        } else if (accounts[0] !== this.state.account) {
            this.setState({ account: accounts[0] })
            this.registerUser(accounts[0])
            // Do any other work!
        }
    }

    async registerUser(address) {
        if (address) {
            const request = axios.post('https://api.cryptogogos.com/api/v1/users/register', {
                address: address
            }).catch(e => {
                alert(e)
            })

            this.setState({ user: request })
        }

    }


    async getPackPrice() {
        const request = axios.get('https://api.cryptogogos.com/api/v1/users/pack-price').catch(e => {
            alert(e)
        })
        this.setState({ price: request.data })
        return request;
    }


    addPurchase(txDetails) {
        const request = axios.post('https://api.cryptogogos.com/api/v1/users/purchases', {
            txDetails
        }).catch(e => {
            alert(e)
        })

        this.setState({ user: request })
    }

    addTransactoin() {

    }

    async getDrawCard() {

        const request = await axios.post('https://api.cryptogogos.com/api/v1/cards/draw', { addresss: '' });

        return request;
    }

    async getFileHash(id) {
        const request = await axios.post('https://api.cryptogogos.com/api/v1/cards/get-file', {
            id
        })

        return request.data;
    }

    render() {

        window.ethereum.on('accountsChanged', this.handleAccountsChanged);
        return (
            <div className="draw-trade">
                {
                    this.state.account ?
                        <div>

                            <div className="space-ship">
                                <h2>
                                    CryptoGogo Spaceship
                </h2>
                                {
                                    !this.state.cardImg ? <div className="card-draw">
                                        <img src={packet} />

                                    </div> : <div className="video-bar">
                                        <video width="320" height="240" controls="false" autoplay>
                                            <source src={this.state.cardImg} type="video/mp4" />
                                        </video>
                                    </div>
                                }

                                <div className="actions">
                                    <button onClick={this.drawCard.bind(this)} className="drawButton" ><img src={drawBtn} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        : <div className="no-meta-mask text-center">
                            <h1>
                                Connect to metamask
                </h1>
                            <div className="no-meta-mas">
                                <svg width="94" height="80" viewBox="0 0 94 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M67.81 47.1C68.01 46.5 68.21 45.8 68.41 45.1C69.81 39.5 68.91 33.6 65.81 28.6C62.81 23.6 58.01 20.1 52.41 18.8C50.71 18.4 49.01 18.2 47.31 18.2C42.31 18.2 37.71 19.9 34.01 22.7C32.81 21.9 31.61 21.2 30.41 20.5C30.61 20.1 30.71 19.7 30.81 19.3C31.21 17.6 30.91 15.8 30.01 14.3C29.11 12.8 27.61 11.7 25.91 11.3C25.41 11.2 24.91 11.1 24.31 11.1C22.01 11.1 19.91 12.3 18.71 14.2C11.81 11 10.11 11.6 9.31004 12.6C7.11004 15.6 17.01 24.8 26.61 32.7C26.41 33.4 26.11 34.1 26.01 34.8C23.21 46.5 30.41 58.2 42.01 61.1C43.71 61.5 45.41 61.7 47.11 61.7C52.01 61.7 56.71 60 60.41 57.2C61.31 57.7 62.11 58.3 62.91 58.8C62.71 59.2 62.61 59.5 62.51 59.9C61.61 63.7 63.91 67.5 67.71 68.4C68.21 68.5 68.81 68.6 69.41 68.6C71.81 68.6 73.91 67.4 75.21 65.5C79.31 67.4 81.61 68.1 83.01 68.1C84.11 68.1 84.61 67.7 84.91 67.3C87.31 64.2 75.41 53.5 67.81 47.1ZM51.81 20.8C56.91 22 61.31 25.2 64.01 29.7C66.71 34.2 67.61 39.5 66.31 44.6C66.01 45.6 65.71 46.6 65.31 47.6C64.11 50.4 62.41 52.8 60.21 54.7C55.11 51.5 49.71 47.8 44.21 43.8C38.31 39.6 33.21 35.6 28.91 32.1C32.11 25 39.21 20.3 47.21 20.3C48.71 20.3 50.31 20.5 51.81 20.8ZM19.81 16.7C20.31 14.6 22.11 13.2 24.31 13.2C24.71 13.2 25.01 13.2 25.41 13.3C26.61 13.6 27.61 14.3 28.21 15.4C28.81 16.4 29.01 17.7 28.71 18.9C28.21 21 26.41 22.4 24.21 22.4C23.81 22.4 23.51 22.4 23.11 22.3C20.71 21.6 19.21 19.2 19.81 16.7ZM11.01 13.9C11.31 13.8 12.81 13.7 17.91 16.1V16.2C17.01 19.7 19.21 23.3 22.71 24.2C23.21 24.3 23.71 24.4 24.31 24.4C26.21 24.4 27.91 23.6 29.21 22.3C30.21 22.9 31.31 23.6 32.31 24.2C30.31 26.1 28.71 28.4 27.51 30.9C16.61 21.9 10.91 15.6 11.01 13.9ZM47.21 59.8C45.61 59.8 44.11 59.6 42.51 59.2C31.91 56.7 25.41 46 28.01 35.4C28.11 35 28.21 34.6 28.31 34.2C35.71 40.2 42.51 45.1 43.21 45.6C48.51 49.4 53.71 53 58.71 56.1C55.41 58.5 51.41 59.8 47.21 59.8ZM69.51 66.7C69.11 66.7 68.71 66.7 68.31 66.6C65.61 65.9 63.91 63.2 64.61 60.5C65.11 58.2 67.21 56.7 69.51 56.7C69.91 56.7 70.31 56.7 70.71 56.8C72.01 57.1 73.11 57.9 73.81 59.1C74.51 60.2 74.71 61.6 74.41 62.9C73.91 65.1 71.81 66.7 69.51 66.7ZM76.21 63.8C76.31 63.6 76.31 63.5 76.41 63.3C76.81 61.5 76.51 59.6 75.61 58C74.61 56.4 73.11 55.3 71.31 54.8C70.81 54.7 70.21 54.6 69.61 54.6C67.51 54.6 65.51 55.6 64.21 57.1C63.51 56.7 62.91 56.3 62.21 55.9C64.21 54 65.91 51.7 67.11 49.1C78.21 58.5 83.21 64.6 83.41 66.2C83.01 66.2 81.41 66.3 76.21 63.8Z" fill="url(#paint0_linear)" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="31.8176" y1="55.4126" x2="62.5907" y2="24.6395" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFA7FB" />
                                            <stop offset="1" stop-color="#C657B1" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                }


            </div>
        );
    }

}

