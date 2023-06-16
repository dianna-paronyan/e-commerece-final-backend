const order_controller = require('../controllers/order_controller');

function order_routes(app){  
    app.get('/orders', order_controller.getAllOrders);
    app.get('/order/:id', order_controller.getOrderById);
    app.post('/createOrderPayment', order_controller.orederPayment);
}

module.exports = {order_routes}