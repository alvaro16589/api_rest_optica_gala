import { pool } from "../db.js";

const actionTypologyController = {
    getTypologys: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM typology'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //find telephones from one Typology
    getSomeoneTypology: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM typology WHERE id = ?', [req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createTypology: async (req, res) => {
        try {
            const { typology } = req.body;
            const [rows] = await pool.query('INSERT INTO typology (typology) VALUES (?)', [typology]);
            res.send({ rows });
        } catch (error) {

            return res.status(500).json({
                message: 'Something wrong on server, function createTypology'
            })
        }
    },
    //METOD UPDATE
    updateTypology: async (req, res) => {

        try {
            const { id } = req.params;
            const { typology } = req.body;
            const [result] = await pool.query('UPDATE typology SET typology = IFNULL(?,typology) WHERE id = ?', [typology, id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "typology not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteTypology: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM typology WHERE id = ?', [req.params.id]);

            if (result.affectedRows === 0) return res.status(404).json({
                message: "typology not found"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    }
}

export default actionTypologyController