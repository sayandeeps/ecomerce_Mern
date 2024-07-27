const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const orderRoute = require("./routes/orders");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Ecommerce Backend");
});

app.use("/api/auth", authRoute);
app.use("/api/orders", orderRoute);

app.listen(8800, () => {
  console.log("Backend Server is running on port 8800");
});
