import { pool } from "../db.js";

const actionModelController = {
    //metod INDEX
    getModels: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM model'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //SHOW A brand

    getOneModel: async (req, res) => {
        try {
            const [rows] = (await pool.query(('SELECT * FROM model WHERE id = ?'), [req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createModel: async (req, res) => {
        try {
            const { model } = req.body;
            const [rows] = await pool.query('INSERT INTO model (model) VALUES (?)', [model]);
            res.send({ rows });
        } catch (error) {

            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD UPDATE
    updateModel: async (req, res) => {

        try {
            const { id } = req.params;
            const { model } = req.body;
            const [result] = await pool.query('UPDATE model SET model = IFNULL(?,model) WHERE id = ?', [model, id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "material not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteModel: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM model WHERE id = ?', [req.params.id]);

            if (result.affectedRows === 0) return res.status(404).json({
                message: "Customer not found"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    }

}

export default actionModelController