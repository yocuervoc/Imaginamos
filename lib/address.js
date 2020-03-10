module.exports = function setupAddress(AddressModel){
    async function createAddress(address){
        const result = await AddressModel.create(address)
        return result.toJSON()
    }

    return {
        createAddress
    }
}