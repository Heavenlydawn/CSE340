const invModel = require("../models/inventory-model");
// const cartModel = require("../models/cart-model");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
const Util = {};

/* ************************
 * Build vehicle detail view
 ************************** */
Util.buildVehicleDetail = async function (data) {
    let vDescription = `

  <div class="detailsView">

    <div class="col1">
      <img src="${data.inv_image}" alt="${data.inv_make} ${data.inv_model}">
    </div>

    <ul class="col2">
      <li> <strong> ${data.inv_make} ${data.inv_model} Details </strong></li>

      <li> <strong>Price:</strong> 
          $${new Intl.NumberFormat("en-US").format(data.inv_price)}
      </li>

      <li> <strong>Description:</strong> ${data.inv_description}</li>
      <li> <strong>Color:</strong> ${data.inv_color}</li>

      <li> <strong>Miles:</strong>
          ${new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
          }).format(data.inv_miles)}
      </li>
    </ul>

  </div>
  `;
    return vDescription;
};