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
    //await Client.updatePassword(4, "asdf").catch(handleFatalError)
    //await User.updateCreditCard(5, "visa").catch(handleFatalError)
    //await User.updatePassword(4, "asdf").catch(handleFatalError)

    //const user = await Client.findClientById('100').catch(handleFatalError)
    //console.log(user)
    /*
    let cliente2= {
        uuid: "300",
        name: "jorge",
        emial: "jorge@unal.edu.co",
        phone: "33333"
    }
    const user2 = await Client.createClient(cliente2).catch(handleFatalError)
    console.log(user2)
*/
    const user = await Client.findClientById('100').catch(handleFatalError)
    /*
    let newuser2= {
        id: 3,
        name: "Camilo1",
        lastName: "Cuervo",
        username: "cacuervoc",
        password: "new pass",
        creditCard: "123456XXX"
    }
    
    
    const update = await User.updateUserPassword(newuser2, "secreto")
    console.log(user2)
    */
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()