module.exports = function setupDriver(DriverModel){
    
    async function createDriver(driver){
        const result = await DriverModel.create(driver)
        return result.toJSON()
    }

    async function getAllDrivers(){
        return DriverModel.findAll()
    }

    return{
        createDriver,
        getAllDrivers
    }
}