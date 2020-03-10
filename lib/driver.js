module.exports =function setupDriver(DriverModel){
    async function createDrivers(driver){
        const result = await DriverModel.createDrivers(driver)
        return result.toJSON()
    }

    async function getAlldrivers(){
        const result = await DriverModel.findAll()
        return result.toJSON()
    }

    return{
        createDrivers,
        getAlldrivers
    }
}