import { pool } from "../db.js";

const actionShapeController = {
    //metod INDEX
    getShapes: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM shape'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //SHOW A brand

    getOneShape: async (req, res) => {
        try {
            const [rows] = (await pool.query(('SELECT * FROM shape WHERE id = ?'), [req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createShape: async (req, res) => {
        try {
            const { shape } = req.body;
            const [rows] = await pool.query('INSERT INTO shape (shape) VALUES (?)', [shape]);
            res.send({ rows });
        } catch (error) {

            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD UPDATE
    updateShape: async (req, res) => {

        try {
            const { id } = req.params;
            const { shape } = req.body;
            const [result] = await pool.query('UPDATE shape SET shape = IFNULL(?,shape) WHERE id = ?', [shape, id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "shape not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteShape: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM shape WHERE id = ?', [req.params.id]);

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

export default actionShapeController