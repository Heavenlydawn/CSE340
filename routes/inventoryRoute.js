const express = require("express");
const router = new express.Router();
const invController = require("../controllers/invController");
const invValidate = require('../utilities/inventory-validation')
const utilities = require("../utilities");

// Route to build vehicle description
router.get(
    "/detail/:vehicleId", 
    utilities.handleErrors(invController.vehicleDetail)
);