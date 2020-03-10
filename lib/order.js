module.exports = function setupOrder(OrderModel){
    async function createOrder(order){
        const result = OrderModel.create(order)
        return result.toJSON()
    }

    return{
        createOrder
    }
}