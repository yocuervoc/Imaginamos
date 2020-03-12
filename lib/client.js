const setupDatabase = require('../lib/db')
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt-nodejs')
module.exports = function setupClient(ClientModel, config){
    const sequelize =setupDatabase(config)

    

    async function createClient(client) {
        var salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(client.password, salt);
        client.password= hash

        const result = await ClientModel.create(client)
        return result.toJSON()
    }

    async function loggeo(client) {
        
        cliente = await sequelize.query
        ("select * from clients where email= :email ", 
        {   replacements: 
            { 
                email: client.email,
                password: client.password
            },
            type: QueryTypes.SELECT 
        });
        if((bcrypt.compareSync(client.password, cliente[0].password))){
            return cliente
        }   
    }
    
    async function findClientById (id){
        const result = ClientModel.findByPk(id)
        return result
    }

    

    return {
        findClientById,
        createClient,
        loggeo
    }
}