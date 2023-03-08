import { pool } from "../db.js";

const actionColorController = {
    //metod INDEX
    getColors: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM color'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //SHOW A color

    getOneColor: async (req, res) => {
        try {
            const [rows] = (await pool.query(('SELECT * FROM color WHERE id = ?'), [req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createColor: async (req, res) => {
        try {
            const { color } = req.body;
            const [rows] = await pool.query('INSERT INTO color (color) VALUES (?)', [color]);
            res.send({ rows });
        } catch (error) {

            return res.status(500).json({
                message: 'Something wrong on server, function createColor'
            })
        }
    },
    //METOD UPDATE
    updateColor: async (req, res) => {

        try {
            const { id } = req.params;
            const { color } = req.body;
            const [result] = await pool.query('UPDATE color SET color = IFNULL(?,color) WHERE id = ?', [color, id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "color not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteColor: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM color WHERE id = ?', [req.params.id]);

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

export default actionColorController