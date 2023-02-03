import { pool } from "../db.js";

const actionRecetController = {
    getRecets : async (req,res) => {
        try {
            const [rows]  = (await pool.query('SELECT * FROM recet'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    } 
}

export default actionRecetController