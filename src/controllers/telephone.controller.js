import { pool } from "../db.js";

const actionTelephoneController = {
    getTelephones : async (req,res) => {
        try {
            const [rows]  = (await pool.query('SELECT * FROM telephone'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createTelephone: async (req, res) => {
        try {
            const { number, idCustomer } = req.body;
            const [rows] = await pool.query('INSERT INTO telephone (number, idCustomer) VALUES (?,?)', [number, idCustomer]);
            res.send({ rows });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'Something wrong on server, function createTelephone'
            })
        }
    },
    //METOD UPDATE
    updateTelephone: async (req, res) => {

        try {
            const { id } = req.params;
            const { number, idCustomer } = req.body;
            const [result] = await pool.query('UPDATE telephone SET number = IFNULL(?,number), idCustomer = IFNULL(?,idCustomer) WHERE id = ?', [number, idCustomer,id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "Telephone not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteTelephone: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM telephone WHERE id = ?', [req.params.id]);

            if (result.affectedRows === 0) return res.status(404).json({
                message: "Telephone not found"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    } 
}

export default actionTelephoneController