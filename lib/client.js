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
        console.log(bcrypt.compareSync(client.password, '$2a$10$c5n2Ik3oZwj4Jo7OiiTu1.wDDOaKsAHswwhHLyX0jzRqsfbgp9u7q'))
        return client = await sequelize.query
        ("select * from clients where email= :email ", 
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

    

    return {
        findClientById,
        createClient,
        loggeo
    }
}