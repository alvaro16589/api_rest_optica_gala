import { pool } from "../db.js";

const actionBrand2Controller = {
    //metod INDEX
    getBrands2: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM brand2'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //SHOW A brand

    getOneBrand2: async (req, res) => {
        try {
            const [rows] = (await pool.query(('SELECT * FROM brand2 WHERE id = ?'), [req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createBrand2: async (req, res) => {
        try {
            const { brand } = req.body;
            const [rows] = await pool.query('INSERT INTO brand2 (brand) VALUES (?)', [brand]);
            res.send({ rows });
        } catch (error) {

            return res.status(500).json({
                message: 'Something wrong on server, function createBrand'
            })
        }
    },
    //METOD UPDATE
    updateBrand2: async (req, res) => {

        try {
            const { id } = req.params;
            const { brand } = req.body;
            const [result] = await pool.query('UPDATE brand2 SET brand = IFNULL(?,brand) WHERE id = ?', [brand, id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "brand not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteBrand2: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM brand WHERE id = ?', [req.params.id]);

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

export default actionBrand2Controller