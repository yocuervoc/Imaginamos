module.exports = function setupClient(ClientModel){

    async function createClient(client) {
        const result = await ClientModel.create(client)
        return result.toJSON()
    }

    async function findAllClients() {
        return ClientModel.findAll()
    }
    
    async function findClientById (id){
        const result = ClientModel.findByPk(id)
        return result
    }

    

    return {
        findClientById,
        createClient,
        findAllClients
    }
}