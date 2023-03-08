import { pool } from "../db.js";

const actionReplacementController = {
    //metod INDEX
    getReplacements: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM replacement'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //SHOW A brand

    getOneReplacement: async (req, res) => {
        try {
            const [rows] = (await pool.query(('SELECT * FROM replacement WHERE id = ?'), [req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createReplacement: async (req, res) => {
        try {
            const { replacement } = req.body;
            const [rows] = await pool.query('INSERT INTO replacement (replacement) VALUES (?)', [replacement]);
            res.send({ rows });
        } catch (error) {

            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD UPDATE
    updateReplacement: async (req, res) => {

        try {
            const { id } = req.params;
            const { replacement } = req.body;
            const [result] = await pool.query('UPDATE replacement SET replacement = IFNULL(?,replacement) WHERE id = ?', [replacement, id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "replacement not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteReplacement: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM replacement WHERE id = ?', [req.params.id]);

            if (result.affectedRows === 0) return res.status(404).json({
                message: "replacement not found"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    }

}

export default actionReplacementController