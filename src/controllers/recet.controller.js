import { pool } from "../db.js";

const actionRecetController = {
    getRecets: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM recet'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //get recet
    getRecet: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT * FROM recet WHERE idCustomer = ?', [req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createRecet: async (req, res) => {
        try {
            const {
                nearSphereL,
                nearSphereR,
                nearCylinderL,
                nearCylinderR,
                nearAxisL,
                nearAxisR,
                nearPrisL,
                nearPrisR,
                nearDIP,
                farSphereL,
                farSphereR,
                farCylinderL,
                farCylinderR,
                farAxisL,
                farAxisR,
                farPrisL,
                farPrisR,
                farDIP,
                add,
                observation,
                idCustomer
            } = req.body;
            const [rows] = await pool.query('INSERT INTO recet (nearSphereL, nearSphereR, nearCylinderL, nearCylinderR, nearAxisL, nearAxisR, nearPrisL, nearPrisR, nearDIP, farSphereL, farSphereR, farCylinderL, farCylinderR, farAxisL, farAxisR, farPrisL, farPrisR, farDIP, addition, observation, idCustomer) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [
                    nearSphereL,
                    nearSphereR,
                    nearCylinderL,
                    nearCylinderR,
                    nearAxisL,
                    nearAxisR,
                    nearPrisL,
                    nearPrisR,
                    nearDIP,
                    farSphereL,
                    farSphereR,
                    farCylinderL,
                    farCylinderR,
                    farAxisL,
                    farAxisR,
                    farPrisL,
                    farPrisR,
                    farDIP,
                    add,
                    observation,
                    idCustomer
                ]);
            res.send({ rows });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'Something wrong on server, function createRecet'
            })
        }
    },
    //METOD UPDATE
    updateRecet: async (req, res) => {

        try {
            const { id } = req.params;
            const {
                nearSphereL,
                nearSphereR,
                nearCylinderL,
                nearCylinderR,
                nearAxisL,
                nearAxisR,
                nearPrisL,
                nearPrisR,
                nearDIP,
                farSphereL,
                farSphereR,
                farCylinderL,
                farCylinderR,
                farAxisL,
                farAxisR,
                farPrisL,
                farPrisR,
                farDIP,
                addition,
                observation,
                idCustomer
            } = req.body;
            const [result] = await pool.query('UPDATE recet SET nearSphereL = IFNULL(?,nearSphereL), nearSphereR = IFNULL(?,nearSphereR) , nearCylinderL = IFNULL(?,nearCylinderL), nearCylinderR = IFNULL(?,nearCylinderR), nearAxisL = IFNULL(?,nearAxisL), nearAxisR = IFNULL(?,nearAxisR), nearPrisL = IFNULL(?,nearPrisL), nearPrisR = IFNULL(?,nearPrisR) , nearDIP = IFNULL(?,nearDIP), farSphereL = IFNULL(?,farSphereL), farSphereR = IFNULL(?,farSphereR), farCylinderL = IFNULL(?,farCylinderL), farCylinderR = IFNULL(?,farCylinderR), farAxisL = IFNULL(?,farAxisL), farAxisR = IFNULL(?,farAxisR), farPrisL = IFNULL(?,farPrisL), farPrisR = IFNULL(?,farPrisR), farDIP = IFNULL(?,farDIP),  addition = IFNULL(?,addition), observation = IFNULL(?,observation), idCustomer = IFNULL(?,idCustomer) WHERE id = ?',
                [
                    nearSphereL,
                    nearSphereR,
                    nearCylinderL,
                    nearCylinderR,
                    nearAxisL,
                    nearAxisR,
                    nearPrisL,
                    nearPrisR,
                    nearDIP,
                    farSphereL,
                    farSphereR,
                    farCylinderL,
                    farCylinderR,
                    farAxisL,
                    farAxisR,
                    farPrisL,
                    farPrisR,
                    farDIP,
                    addition,
                    observation,
                    idCustomer,
                    id
                ]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "Recet not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteRecet: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM recet WHERE id = ?', [req.params.id]);

            if (result.affectedRows === 0) return res.status(404).json({
                message: "Recet not found"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    }
}

export default actionRecetController