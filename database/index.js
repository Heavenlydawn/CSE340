const { Pool } = require("pg");
require("dotenv").config();

/* ****************************************
 * Connection pool
 *  • Always enable SSL for Render (rejectUnauthorized:false)
 *  • Log queries only in development
 **************************************** */

let pool;

if (process.env.NODE_ENV === "development") {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        // ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false
        ssl: { rejectUnauthorized: false }
    });

    // Added for troubleshooting queries during development
    module.exports = {
        async query(text, params) {
            try {
                const res = await pool.query(text, params);
                console.log("executed query", { text });
                return res;
            } catch (error) {
                console.error("error in query", { text });
                throw error;
            }
        },
    };
} else {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });

    module.exports = pool;
}