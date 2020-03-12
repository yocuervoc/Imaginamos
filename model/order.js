const Sequelize = require('sequelize')
const setupDataBase = require('../lib/db')

module.exports = function setupOrderModel(config){
    const sequelize = setupDataBase(config)

    return sequelize.define('order',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        date:{
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        startAt: {
            type:Sequelize.TIME,
            allowNull: false
        },
        endAt: {
            type:Sequelize.TIME,
            allowNull: false
        }
    })
}