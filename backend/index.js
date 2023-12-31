const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const cartRoute = require("./routes/cart")
const productRoute = require("./routes/product")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const cors = require("cors")
const rateLimit = require("express-rate-limit")
const app = express();

dotenv.config();

const limiter = rateLimit({
  windowMs : 1000,
  max: 5
})

mongoose.connect(
  process.env.MONGO_URL
).then(()=> console.log("Db connected"))
.catch((err) => {
  console.log(err);
});


var corsOptions = {
  origin: process.env.CLIENT ||'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(limiter);
app.use(cors(corsOptions));
app.use(express.json())
app.use("/api/auth" , authRoute);
app.use("/api/users" , userRoute);
app.use("/api/products" , productRoute);
app.use("/api/carts" , cartRoute);
app.use("/api/orders" , orderRoute);
app.use("/api/checkout" , stripeRoute);



app.listen( 5000 , () => {
  console.log("Backend Server Is Running!")
})