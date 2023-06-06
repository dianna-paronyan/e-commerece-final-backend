const order_controller = require('../controllers/order_controller');

function order_routes(app){  
    app.post('/createOrder', order_controller.createOrder);
    app.post('/createOrderPayment', order_controller.orederPayment);
}

module.exports = {order_routes}