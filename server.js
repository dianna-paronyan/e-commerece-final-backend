const express = require("express");
const cors = require("cors");
const { user_routes } = require("./routes/user");
const { category_routes } = require("./routes/category");
const { product_routes } = require("./routes/product");
const { cartItems_routes } = require("./routes/cartItems");
const { order_routes } = require("./routes/order");
require("dotenv").config();
const path = require('path');


const app = express();
const PORT = process.env.PORT;

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeSecretKey);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname + "/static")))
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
user_routes(app);
category_routes(app);
product_routes(app);
cartItems_routes(app);
order_routes(app);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});