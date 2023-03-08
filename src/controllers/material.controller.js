import { pool } from "../db.js";

const actionMaterialController = {
    //metod INDEX
    getMaterials: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM material'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //SHOW A brand

    getOneMaterial: async (req, res) => {
        try {
            const [rows] = (await pool.query(('SELECT * FROM material WHERE id = ?'), [req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createMaterial: async (req, res) => {
        try {
            const { material } = req.body;
            const [rows] = await pool.query('INSERT INTO material (material) VALUES (?)', [material]);
            res.send({ rows });
        } catch (error) {

            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD UPDATE
    updateMaterial: async (req, res) => {

        try {
            const { id } = req.params;
            const { material } = req.body;
            const [result] = await pool.query('UPDATE material SET material = IFNULL(?,material) WHERE id = ?', [material, id]);
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
    deleteMaterial: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM material WHERE id = ?', [req.params.id]);

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

export default actionMaterialController