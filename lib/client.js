module.exports= function setupClient(ClientModel){
    async function findClientById (id){
        const result = ClientModel.findByPk(id)
        console.log(result.toJSON)
        return result
    }


    async function createClient(client) {
        const result = await ClientModel.create(client)
        return result.toJSON()
    }

    return {
        findClientById,
        createClient
    }
}