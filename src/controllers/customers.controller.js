import { pool } from "../db.js";

const actionCustomer = {
    getCustomer : async (req,res) => {
        try {
            const [rows]  = (await pool.query('SELECT * FROM customer'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    } 
}

export default actionCustomer