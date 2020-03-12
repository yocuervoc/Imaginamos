module.exports = function setupAddress(AddressModel){
    async function createAddress(address){
        console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHh")
        console.log(address)
        const result = await AddressModel.create(address)
        return result.toJSON()
    }

    return {
        createAddress
    }
}