const invModel = require("../models/inventory-model");
const utilities = require("../utilities/");
const invCont = {};

/* ***************************
 *  Build vehicle description
 * ************************** */
invCont.vehicleDetail = async function (req, res, next) {
    const vehicle_id = req.params.vehicleId;
    const data = await invModel.getAllInventoryVehicleById(vehicle_id);

    if (!data) {
        return res.status(404).send({ message: "Vehicle not found" });
    }

    const vDescription = await utilities.buildVehicleDetail(data);
    const nav = await utilities.getNav();

    res.render("./inventory/vehicleDetail", {
        title: `${data.inv_year} ${data.inv_make} ${data.inv_model}`,
        nav,
        vDescription,
    });
};
