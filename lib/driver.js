module.exports =function setupDriver(DriverModel){
    async function createDriver(driver){
        const result = await DriverModel.create(driver)
        return result.toJSON()
    }

    async function getAlldrivers(){
        const result = await DriverModel.findAll()
        return result
    }

    return{
        createDriver,
        getAlldrivers
    }
}