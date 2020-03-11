const setupDatabase = require('../lib/db')
const { QueryTypes } = require('sequelize');

module.exports = function setupOrder(OrderModel, DriverModel, config){
    const sequelize =setupDatabase(config)

    async function createOrder(order){
        const result = OrderModel.create(order)
        return result.toJSON()
    }

    async function getOrders(idDriver, date){
        return orders= await sequelize.query
        ("select clients.name, clients.lastName, clients.email, clients.phone, addresses.address from orders join clients on orders.clientid = clients.id join addresses on addresses.clientid = clients.id where driverid = :idDriver and date = :date", 
        {   replacements: 
            { 
                idDriver: idDriver,
                date: date
            },
            type: QueryTypes.SELECT 
        });
    }

    return{
        createOrder,
        getOrders
    }
}

