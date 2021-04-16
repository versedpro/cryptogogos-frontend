import axios from 'axios'
import { getTokenIdByOwner, getTokenId } from './contract'

export const createMintRequest = user_address =>
    axios.post(`${process.env.REACT_APP_API_BASE}/v1/cards/startMint`, {
        user_address,
    })

export const confirmMint = (user_address, token_id, signature) =>
    axios.post(`${process.env.REACT_APP_API_BASE}/v1/cards/draw`, {
        user_address,
        token_id,
        signature,
    })

export const getTokenMetadata = tokenId =>
    axios.get(`${process.env.REACT_APP_API_BASE}/metadata/${tokenId}`)

export const getTokenList = async ({ balance, contract, tokenCount, ownerAddress }) => {
    const tokenList = []
    for (let i = balance - 1; i >= 0 && i >= balance - tokenCount; i--) {
        tokenList.push(i)
    }

    if (ownerAddress) {
        let _tokenList = []
        await Promise.all(
            tokenList.map(async index => {
                const tokenId = await getTokenIdByOwner({
                    contract: contract,
                    ownerAddress: ownerAddress,
                    index: index,
                })
                const { data: metadata } = await getTokenMetadata(tokenId)
                _tokenList.push({
                    index: index,
                    tokenId: tokenId,
                    metaData: metadata,
                    isLoading: true,
                })
            }),
        )
        _tokenList.sort(function (a, b) {
            if (a.tokenId < b.tokenId) return -1
            if (a.tokenId > b.tokenId) return 1
            return 0
        })
        return [..._tokenList]
    } else {
        let _tokenList = []

        await Promise.all(
            tokenList.map(async index => {
                const tokenId = await getTokenId({
                    contract: contract,
                    index: index,
                })
                const { data: metadata } = await getTokenMetadata(tokenId)
                _tokenList.push({
                    index: index,
                    tokenId: tokenId,
                    metaData: metadata,
                    isLoading: true,
                })
            }),
        )
        _tokenList.sort(function (a, b) {
            if (a.tokenId < b.tokenId) return -1
            if (a.tokenId > b.tokenId) return 1
            return 0
        })
        return [..._tokenList]
    }
}

export const getLeaderboardList = () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/v1/leaderboard`)
