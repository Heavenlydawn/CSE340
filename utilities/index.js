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

    <div class="col2">
      <h2>${data.inv_year} ${data.inv_make} ${data.inv_model}</h2>

      <p><strong>Price:</strong> $${new Intl.NumberFormat("en-US").format(
        data.inv_price
      )}</p>

      <p><strong>Description:</strong> ${data.inv_description}</p>

      <p><strong>Color:</strong> ${data.inv_color}</p>

      <p><strong>Miles:</strong> ${new Intl.NumberFormat("en-US").format(
        data.inv_miles
      )}</p>

      <p><strong>Year:</strong> ${data.inv_year}</p>

      <p><strong>Make:</strong> ${data.inv_make}</p>

      <p><strong>Model:</strong> ${data.inv_model}</p>
    </div>

  </div>
  `;
  return vDescription;
};

/* *****************************
 * Build the navigation bar
 ***************************** */
Util.getNav = async function () {
  try {
    let data = await invModel.getClassifications();
    if (!data) {
      throw new Error("No classifications found");
    }
    let list = "<ul>";
    list += '<li><a href="/" title="Home page">Home</a></li>';
    data.forEach((row) => {
      list += "<li>";
      list +=
        '<a href="/inv/type/' +
        row.classification_id +
        '" title="See our inventory of ' +
        row.classification_name +
        ' vehicles">' +
        row.classification_name +
        "</a>";
      list += "</li>";
    });
    list += "</ul>";
    return list;
  } catch (error) {
    console.error("getNav error: " + error);
    return "<ul><li><a href='/' title='Home page'>Home</a></li></ul>";
  }
};

/* **************************************
 * Middleware For Handling Errors
 * Wrap other function in this for
 * General Error Handling
 ****************************************
 */
Util.handleErrors = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = Util;
