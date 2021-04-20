export const getBalanceOfAccount = async ({ account, contract }) => {
    const balance = await contract.balanceOf(account).call()
    return balance
}

export const getTotalSupply = async contract => {
    const totalSupply = await contract.totalSupply().call()
    return totalSupply
}

export const getTokenIdByOwner = async ({ contract, ownerAddress, index }) => {
    const tokenId = await contract.tokenOfOwnerByIndex(ownerAddress, index).call()
    return tokenId
}

export const getTokenId = async ({ contract, index }) => {
    const tokenId = await contract.tokenByIndex(index).call()
    return tokenId
}
