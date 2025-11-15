const pool = require("../database/");

/** 
 * **************************
 * Get all inventory items by inventory_id
 * *************************** 
 **/
async function getAllInventoryVehicleById(inventory_id) {
    try {
        const data = await pool.query(
            "SELECT * FROM public.inventory AS i WHERE inv_id = $1",
            [inventory_id]
        );
        return data.rows[0];
    } catch (error) {
        console.error("getInventoryId error" + error);
    }
}