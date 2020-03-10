const Sequelize = require('sequelize')
const setupDataBase = require('../lib/db')

module.exports = function setupOrderModel(config){
    const sequelize = setupDataBase(config)

    return sequelize.define('order',{
        uuid:{
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        date:{
            type: Sequelize.DATEONLY,
            allowNull: false
        }
    })
}