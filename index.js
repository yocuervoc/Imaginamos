const setupDatabase = require('./lib/db')
const setupClientModel = require('./model/client')
const setupOrderModel = require('./model/order')
const setupDriverModel = require('./model/driver')
const setupAddressModel = require('./model/address')
const setupClient = require('./lib/client')
const setupAddress = require('./lib/address')
const setupDriver = require('./lib/driver')
const setupOrder = require('./lib/order')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const ClientModel = setupClientModel(config)
  const OrderModel = setupOrderModel(config)
  const DriverModel = setupDriverModel(config)
  const AddressModel = setupAddressModel(config)

  ClientModel.hasMany(OrderModel)
  OrderModel.belongsTo(ClientModel)

  ClientModel.hasMany(AddressModel)
  AddressModel.belongsTo(ClientModel)
  DriverModel.hasMany(OrderModel)
  OrderModel.belongsTo(DriverModel)

  AddressModel.hasOne(OrderModel)
  OrderModel.belongsTo(AddressModel)


  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: false })
  }

  const Client = setupClient(ClientModel) 
  const Order = setupOrder(OrderModel,DriverModel, config)
  const Driver = setupDriver(DriverModel)
  const Address = setupAddress(AddressModel)


  return {
    Client,
    Order,
    Driver,
    Address
  }
}