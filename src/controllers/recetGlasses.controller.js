import { pool } from "../db.js";

const actionRecetGlassesController = {
    getAllRecetGlasses: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM recetglasses'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //get RecetGlasses
    getRecetGlasses: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM recetglasses WHERE id = ?', [req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createRecetGlasses: async (req, res) => {
        try {
            const {
                idRecet,
                idGlasses,
                price
            } = req.body;
            const [rows] = await pool.query('INSERT INTO recetglasses (idRecet, idGlasses, price) VALUES (?,?,?)',
                [
                    idRecet,
                    idGlasses,
                    price
                ]);
            res.send({ rows });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'Something wrong on server, function createRecetGlasses'
            })
        }
    },
    //METOD UPDATE
    updateRecetGlasses: async (req, res) => {

        try {
            const { id } = req.params;
            const {
                idRecet,
                idGlasses,
                price
            } = req.body;
            const [result] = await pool.query('UPDATE recetglasses SET idRecet = IFNULL(?,idRecet), idGlasses = IFNULL(?,idGlasses) , price = IFNULL(?,price) WHERE id = ?',
                [
                    idRecet,
                    idGlasses,
                    price,
                    id
                ]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "RecetGlasses not updated"
            }); res.sendStatus(204);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteRecetGlasses: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM recetglasses WHERE id = ?', [req.params.id]);

            if (result.affectedRows === 0) return res.status(404).json({
                message: "RecetGlasses not found"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    }
}

export default actionRecetGlassesController