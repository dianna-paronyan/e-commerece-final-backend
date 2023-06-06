const category_controller = require('../controllers/category_controller');

function category_routes(app){
    
    app.get('/categories', category_controller.allCategories);
    app.get('/category/:id', category_controller.getCategory);
    app.post('/createCategory', category_controller.createCategory);
    app.put('/updateCategory/:id', category_controller.updateCategory);
    app.delete('/deleteCategory/:id', category_controller.deleteCategory);
}

module.exports = {
    category_routes
}