import axios from 'axios'

export const createMintRequest = (user_address) => axios.post(`${process.env.REACT_APP_API_BASE}/v1/cards/startMint`, {
    user_address,
})

export const confirmMint = (user_address, token_id, signature) => axios.post(`${process.env.REACT_APP_API_BASE}/v1/cards/draw`, {
    user_address, token_id, signature,
})

export const getTokenMetadata = (tokenId) => axios.get(`${process.env.REACT_APP_API_BASE}/metadata/${tokenId}`)

export const getLeaderboardList = () => axios.get(`${process.env.REACT_APP_API_BASE}/v1/leaderboard`)