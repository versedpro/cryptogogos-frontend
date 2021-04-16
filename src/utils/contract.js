export const getBalanceOfAccount = async data => {
    const balance = await data.contract.balanceOf(data.account).call()
    return balance
}

export const getTotalSupply = async data => {
    const totalSupply = await data.contract.totalSupply().call()
    return totalSupply
}

export const getTokenIdByOwner = async data => {
    const tokenId = await data.contract.tokenOfOwnerByIndex(data.ownerAddress, data.index).call()
    return tokenId
}

export const getTokenId = async data => {
    const tokenId = await data.contract.tokenByIndex(data.index).call()
    return tokenId
}