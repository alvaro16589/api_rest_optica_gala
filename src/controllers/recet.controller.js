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
    //get recet glasses with price
    getRecetWithPriceForGlasses: async (req, res) => {
        try {
            const [rows] = (await pool.query('SELECT glasses.id AS id, glasses.code AS code, glasses.idShape AS idShape, glasses.idGender AS idGender, glasses.idBrand AS idBrand, glasses.idMaterial AS idMaterial, glasses.idModel AS idModel, glasses.idColor AS idColor, glasses.idKind AS idKind, shape.shape AS shape, gender.gender AS gender, brand.brand AS brand, material.material AS material, model.model AS model, color.color AS color, kind.kind AS kind, recetglasses.price AS price FROM glasses JOIN shape ON shape.id = glasses.idShape JOIN gender ON gender.id = glasses.idGender JOIN brand ON brand.id = glasses.idBrand JOIN material ON material.id = glasses.idMaterial JOIN model ON model.id = glasses.idModel JOIN color ON color.id = glasses.idColor JOIN kind ON kind.id = glasses.idKind JOIN recetglasses ON recetglasses.idGlasses = glasses.id WHERE recetglasses.idRecet = ?', [req.params.id]));
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
                id,
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
            const [rows] = await pool.query('INSERT INTO recet (id, nearSphereL, nearSphereR, nearCylinderL, nearCylinderR, nearAxisL, nearAxisR, nearPrisL, nearPrisR, nearDIP, farSphereL, farSphereR, farCylinderL, farCylinderR, farAxisL, farAxisR, farPrisL, farPrisR, farDIP, addition, observation, idCustomer) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [
                    id,
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