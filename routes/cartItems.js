const cartItems_controller = require("../controllers/cartItems_conroller");

function cartItems_routes(app) {
  app.get("/cartItems", cartItems_controller.allCartItems);
  app.get("/cartItem/:id", cartItems_controller.getCartItem);
  app.put("/updateCartItem/:id", cartItems_controller.updateCartItem);
  app.delete("/deleteCartItem/:id", cartItems_controller.deleteCartItem);
  app.post("/cartCartItem", cartItems_controller.createCartAndCartItem);
  app.put("/cartItem/increment/:id", cartItems_controller.incrementCartItem);
  app.put("/cartItem/decrement/:id", cartItems_controller.decrementCartItem);
}

module.exports = {
  cartItems_routes,
};
