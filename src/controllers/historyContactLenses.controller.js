import { pool } from "../db.js";

const actionHistoryContactLensesController = {
    //metod INDEX
    getHistoryOfContactLensesQuantity : async (req,res) => {
        try {
            const [rows]  = (await pool.query('SELECT * FROM historycontactlenses'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //SHOW A HistoryOfContactLensesQuantity
     
     getOneHistoryOfContactLensesQuantityByidContactLenses : async (req,res) => {
        try {
            const [rows]  = (await pool.query(('SELECT * FROM historycontactlenses WHERE idContactLenses = ?'),[req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createHistoryOfContactLensesQuantity: async (req, res) => {
        try {
            const { idContactLenses,quantity } = req.body;
            const [rows] = await pool.query('INSERT INTO historycontactlenses (idContactLenses, quantity) VALUES (?,?)', [idContactLenses,quantity]);
            res.send({ rows });
        } catch (error) {
            
            return res.status(500).json({
                message: 'Something wrong on server, function createHistoryOfContactLensesQuantity'
            })
        }
    },
    //METOD UPDATE
    updateHistoryOfContactLensesQuantity: async (req, res) => {

        try {
            const { id } = req.params;
            const { idContactLenses, quantity } = req.body;
            const [result] = await pool.query('UPDATE historycontactlenses SET idContactLenses = IFNULL(?,idContactLenses), quantity = IFNULL(?,quantity)  WHERE id = ?', [idContactLenses, quantity, id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "HistoryOfContactLensesQuantity not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteHistoryOfContactLensesQuantity: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM historycontactlenses WHERE id = ?', [req.params.id]);

            if (result.affectedRows === 0) return res.status(404).json({
                message: "HistoryOfContactLensesQuantity not found"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    } 

}

export default actionHistoryContactLensesController