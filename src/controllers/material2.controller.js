import { pool } from "../db.js";

const actionMaterial2Controller = {
    //metod INDEX
    getMaterials2: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM material2'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //SHOW A brand

    getOneMaterial2: async (req, res) => {
        try {
            const [rows] = (await pool.query(('SELECT * FROM material2 WHERE id = ?'), [req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createMaterial2: async (req, res) => {
        try {
            const { material } = req.body;
            const [rows] = await pool.query('INSERT INTO material2 (material) VALUES (?)', [material]);
            res.send({ rows });
        } catch (error) {

            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD UPDATE
    updateMaterial2: async (req, res) => {

        try {
            const { id } = req.params;
            const { material } = req.body;
            const [result] = await pool.query('UPDATE material2 SET material = IFNULL(?,material) WHERE id = ?', [material, id]);
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
    deleteMaterial2: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM material2 WHERE id = ?', [req.params.id]);

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

export default actionMaterial2Controller