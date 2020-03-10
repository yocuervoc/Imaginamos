const db = require('./')

async function run (){

    const config = {
        database: process.env.DB_NAME || 'delivery',
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'password',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql'
      }

    const {Client} = await db(config).catch(handleFatalError)
    const {Address} = await db(config).catch(handleFatalError)
    const {Driver} = await db(config).catch(handleFatalError)
    const {Order} = await db(config).catch(handleFatalError)

    let cliente1= {
        uuid: "300",
        name: "jorge",
        emial: "jorge@unal.edu.co",
        phone: "33333"
    }
    let addres1 ={
        uuid: "1",
        address: "crare 12 #123b-12"
    }

    let driver1 = {
        uuid: "500",
        name: "raul",
        email: "raul@gmail.com"
    }
    let driver2 = {
        uuid: "700",
        name: "Jaime",
        email: "jaime@gmail.com"
    }

    let order1 = {
        uuid: "primera",
        date: '2020-01-01',
        clientUuid: "300",
        driverUuid: "700",
        addressUuid: "1"
    }
    let user2 = await Client.createClient(cliente1).catch(handleFatalError)
    console.log(user2)

    let direccion = await Address.createAddress(addres1).catch(handleFatalError)
    console.log(direccion)
    let user = await Client.findClientById('100').catch(handleFatalError)

    let driver = await Driver.createDriver(driver1).catch(handleFatalError)
    driver = await Driver.createDriver(driver2).catch(handleFatalError)

    console.log(await Driver.getAlldrivers())

    let orden = await Order.createOrder(order1).catch(handleFatalError)

    
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()