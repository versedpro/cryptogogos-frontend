import axios from 'axios'

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

export const getTokensList = async data => {
    const tokenList = []
    for (let i = data.balance - 1; i >= 0 && i >= data.balance - data.tokenNumber; i--) {
        tokenList.push(i)
    }

    if (data.ownerAddress) {
        let _tokenList = []
        await Promise.all(
            tokenList.map(async index => {
                const tokenId = await data.contract
                    .tokenOfOwnerByIndex(data.ownerAddress, index)
                    .call()
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
                const tokenId = await data.contract.tokenByIndex(index).call()
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
