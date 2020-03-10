const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupClientModel(config){
    const sequelize =setupDatabase(config)


    return sequelize.define('client',{
        uuid: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        emial: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}