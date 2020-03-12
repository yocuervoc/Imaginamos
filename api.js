const express = require('express')
const asyncify = require('express-asyncify')
const db = require('./')
const config = require('./config')
const api = asyncify(express.Router())
const auth = require('express-jwt')

let service, Client, Order, Address, Driver

api.use(express.json())
api.use(express.urlencoded({ extended: false }))



api.use('*', async (req, res, next) => {
    console.log("si configura")
    if (!service) {
        try {
            service = await db(config.db)
            res.json({
                success: true
            })
        } catch (e) {
            return next(e)
        }
        Client = service.Client
        Order = service.Order
        Address = service.Address
        Driver = service.Driver
    }
    next()
})

api.post('/singIn', async (req, res, next)=>{
    let clientes = []
    try{
        clientes = await Client.loggeo(req.body)
    }catch(e){
        res.status(401).send({message: 'Error, password o email invalidos'})
        return next(e)
    }
    res.send({clientes})
})


api.get('/drivers', async (req, res, next) =>{
    let drivers = []
    try {
        drivers = await Driver.getAllDrivers()
    } catch (error) {
        return next(error)
    }
    res.send(drivers)
})

api.get('/orders/:id/:date', async (req, res, next) =>{
    const { id, date } = req.params
    let orders = []
    try {
        orders = await Order.getOrders(id, date)
    } catch (error) {
        return next(error)
    }
    res.send(orders)
})

api.post('/createOrder',  async (req, res, next) => {
    try{
    let answer = await Order.createOrder(req.body)
    res.send({ success: true })
    }
    catch(error) {
        return next(error)
    }
})
api.post('/singUp',async (req, res, next) =>{
    try{
        let answer = await Client.createClient(req.body)
        return res.status(200).send({ message: 'ususario creado exitosamente' })
    }
    catch(error) {
        res.status(500).send({message: 'Error al crear usuario'})
        return next(error)
    }
})

api.post('/address', auth(config.auth),async (req, res) =>{
    const {client} = req.params
        if(!client || !client.id ){
            return next(new Error('Usuario no autorizado'))
        }
    try{
        let answer = await Address.createAddress(req.body)
        res.send({ success: true })
    }
    catch(error) {
        return next(error)
    }
})

module.exports = api