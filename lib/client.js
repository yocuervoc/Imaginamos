const setupDatabase = require('../lib/db')
const { QueryTypes } = require('sequelize');
module.exports = function setupClient(ClientModel, config){
    const sequelize =setupDatabase(config)
    async function createClient(client) {
        const result = await ClientModel.create(client)
        return result.toJSON()
    }

    async function loggeo(client) {
        
        return client = await sequelize.query
        ("select * from clients where email= :email", 
        {   replacements: 
            { 
                email: client.email,
                password: client.password
            },
            type: QueryTypes.SELECT 
        });
    }
    
    async function findClientById (id){
        const result = ClientModel.findByPk(id)
        return result
    }

    function singIn(){

    }

    function singUp(){

    }

    

    return {
        findClientById,
        createClient,
        loggeo,
        singIn,
        singUp
    }
}