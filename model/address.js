const Sequelize = require('sequelize')
const setupDataBase = require('../lib/db')

module.exports = function setupAddressModel(config){
    const sequelize = setupDataBase(config)

    return sequelize.define('address',{
        uuid:{
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    })
}
