const express = require("express");
const router = new express.Router();
const invController = require("../controllers/invController");
// const invValidate = require('../utilities/inventory-validation')
const utilities = require("../utilities");

// Route to build inventory by classification view
router.get(
  "/type/:classificationId",
  utilities.handleErrors(invController.buildByClassificationId)
);

// Route to build vehicle description
router.get(
  "/detail/:vehicleId",
  utilities.handleErrors(invController.vehicleDetail)
);

// Route to trigger intentional error
router.get("/error", utilities.handleErrors(invController.triggerError));

module.exports = router;
