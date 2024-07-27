const router = require("express").Router();
const Order = require("../models/Order");
const bcrypt = require("bcrypt");

// create new order

router.post("/create", async (req, res) => {
  console.log("Request Object:", req);
  try {
    const products = req.body.products.map((product) => ({
      productId: product.productId,
      quantity: product.quantity,
    }));
    const newOrder = new Order({
      userId: req.body.userId,
      products,
      amount: req.body.amount,
      address: req.body.address,
    });

    const order = await newOrder.save();
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
