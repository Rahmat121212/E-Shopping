const { Router } = require("express");
const Orders = require("../controllers/Orders");
const Authorization = require("../services/Authorization");
const ratingValidations = require("../validations/ratingValidations");
const router = Router();
router.get("/orders", Orders.getOrders);
router.get("/order-details/:id",  Orders.orderDetails);
router.put("/order-update",  Orders.updateOrder);
router.post(
  "/add-review",
   ratingValidations,
  Orders.createRating
);
module.exports = router;
