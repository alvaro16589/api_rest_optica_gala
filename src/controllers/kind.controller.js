import { pool } from "../db.js";

const actionKindController = {
    //metod INDEX
    getKinds: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM kind'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //SHOW A kind

    getOneKind: async (req, res) => {
        try {
            const [rows] = (await pool.query(('SELECT * FROM kind WHERE id = ?'), [req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createKind: async (req, res) => {
        try {
            const { kind } = req.body;
            const [rows] = await pool.query('INSERT INTO kind (kind) VALUES (?)', [kind]);
            res.send({ rows });
        } catch (error) {

            return res.status(500).json({
                message: 'Something wrong on server, function createkind'
            })
        }
    },
    //METOD UPDATE
    updateKind: async (req, res) => {

        try {
            const { id } = req.params;
            const { kind } = req.body;
            const [result] = await pool.query('UPDATE kind SET kind = IFNULL(?,kind) WHERE id = ?', [kind, id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "kind not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteKind: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM kind WHERE id = ?', [req.params.id]);

            if (result.affectedRows === 0) return res.status(404).json({
                message: "kind not found"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    }

}

export default actionKindController