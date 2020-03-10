const setupDatabase = require('./lib/db')
const setupClientModel = require('./model/client')
const setupOrderModel = require('./model/order')
const setupDriverModel = require('./model/driver')
const setupAddressModel = require('./model/address')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const ClientModel = setupClientModel(config)
  const OrderModel = setupOrderModel(config)
  const DriverModel = setupDriverModel(config)
  const AddressModel = setupAddressModel(config)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Client = {} 
  const Order = {}
  const Driver = {}
  const Address = {}

  return {
    Client,
    Order,
    Driver,
    Address
  }
}

