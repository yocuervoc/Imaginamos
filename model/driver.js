const Sequelize = require('sequelize')
const setupDataBase = require('../lib/db')

module.exports = function setupDriverModel(config){
    const sequelize = setupDataBase(config)

    return sequelize.define('driver', {
        uuid:{
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false   
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}