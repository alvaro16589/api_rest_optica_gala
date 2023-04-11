import { pool } from "../db.js";

const actionViewsController = {
    //metod INDEX
    getAllGlasses: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM allglasses'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod INDEX
    getAllContactLenses: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM allcontactlenses'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    

}

export default actionViewsController