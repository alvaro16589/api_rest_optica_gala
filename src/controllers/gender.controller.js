import { pool } from "../db.js";

const actionGenderController = {
    //metod INDEX
    getGenders: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM gender'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //SHOW A brand

    getOneGender: async (req, res) => {
        try {
            const [rows] = (await pool.query(('SELECT * FROM gender WHERE id = ?'), [req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createGender: async (req, res) => {
        try {
            const { gender } = req.body;
            const [rows] = await pool.query('INSERT INTO gender (gender) VALUES (?)', [gender]);
            res.send({ rows });
        } catch (error) {

            return res.status(500).json({
                message: 'Something wrong on server, function createBrand'
            })
        }
    },
    //METOD UPDATE
    updateGender: async (req, res) => {

        try {
            const { id } = req.params;
            const { gender } = req.body;
            const [result] = await pool.query('UPDATE gender SET gender = IFNULL(?,gender) WHERE id = ?', [gender, id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "gender not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteGender: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM gender WHERE id = ?', [req.params.id]);

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

export default actionGenderController