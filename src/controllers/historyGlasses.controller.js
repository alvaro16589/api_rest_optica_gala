import { pool } from "../db.js";

const actionHistoryGlassesController = {
    //metod INDEX
    getHistoryOfGlassesQuantity : async (req,res) => {
        try {
            const [rows]  = (await pool.query('SELECT * FROM historyglasses'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //SHOW A HistoryOfGlassesQuantity
     
     getOneHistoryOfGlassesQuantityByIDGlasses : async (req,res) => {
        try {
            const [rows]  = (await pool.query(('SELECT * FROM historyglasses WHERE idGlasses = ?'),[req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createHistoryOfGlassesQuantity: async (req, res) => {
        try {
            const { idGlasses,quantity } = req.body;
            const [rows] = await pool.query('INSERT INTO historyglasses (idGlasses, quantity) VALUES (?,?)', [idGlasses,quantity]);
            res.send({ rows });
        } catch (error) {
            
            return res.status(500).json({
                message: 'Something wrong on server, function createHistoryOfGlassesQuantity'
            })
        }
    },
    //METOD UPDATE
    updateHistoryOfGlassesQuantity: async (req, res) => {

        try {
            const { id } = req.params;
            const { idGlasses, quantity } = req.body;
            const [result] = await pool.query('UPDATE historyglasses SET idGlasses = IFNULL(?,idGlasses), quantity = IFNULL(?,quantity)  WHERE id = ?', [idGlasses, quantity, id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "HistoryOfGlassesQuantity not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteHistoryOfGlassesQuantity: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM historyglasses WHERE id = ?', [req.params.id]);

            if (result.affectedRows === 0) return res.status(404).json({
                message: "HistoryOfGlassesQuantity not found"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    } 

}

export default actionHistoryGlassesController