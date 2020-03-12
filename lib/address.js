const setupDatabase = require('../lib/db')
const { QueryTypes } = require('sequelize');

module.exports = function setupAddress(AddressModel,config){
    const sequelize =setupDatabase(config)
    async function createAddress(address){
        console.log(address)
        const result = await AddressModel.create(address)
        return result.toJSON()
    }
    async function findAddresses(idClient){
        return address= await sequelize.query
        ("select * from addresses where clientId = :idClient", 
        {   replacements: 
            { 
                idClient: idClient
            },
            type: QueryTypes.SELECT 
        });
    }
    return {
        createAddress,
        findAddresses
    }
}