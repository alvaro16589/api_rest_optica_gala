import { pool } from "../db.js";

const actionGlassesController = {
    //metod INDEX
    getGlasses : async (req,res) => {
        try {
            const [rows]  = (await pool.query('SELECT * FROM glasses'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //SHOW A Glasses
     
     getOneGlasses : async (req,res) => {
        try {
            const [rows]  = (await pool.query(('SELECT * FROM glasses WHERE id = ?'),[req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createGlasses : async (req, res) => {
        try {
            const { code, idShape, idGender, idBrand, idMaterial, idModel, idColor, idKind, quantity } = req.body;
            const [rows] = await pool.query('INSERT INTO glasses ( code, idShape, idGender, idBrand, idMaterial, idModel, idColor, idKind, quantity ) VALUES (?,?,?,?,?,?,?,?,?)', 
            [ code, idShape, idGender, idBrand, idMaterial, idModel, idColor, idKind, quantity ]);
            res.send({ rows });
        } catch (error) {
            
            return res.status(500).json({
                message: 'Something wrong on server, function createGlasses'
            })
        }
    },
    //METOD UPDATE
    updateGlasses: async (req, res) => {

        try {
            const { id } = req.params;
            const { code, idShape, idGender, idBrand, idMaterial, idModel, idColor, idKind, quantity } = req.body;
            const [result] = await pool.query('UPDATE glasses SET code = IFNULL(?,code), idShape = IFNULL(?,idShape) , idGender = IFNULL(?,idGender), idBrand = IFNULL(?,idBrand), idMaterial = IFNULL(?,idMaterial), idModel = IFNULL(?,idModel), idColor = IFNULL(?,idColor), idKind = IFNULL(?,idKind), quantity = IFNULL(?,quantity) WHERE id = ?', 
            [code, idShape, idGender, idBrand, idMaterial, idModel, idColor, idKind, quantity, id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "Glasses not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteGlasses: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM glasses WHERE id = ?', [req.params.id]);

            if (result.affectedRows === 0) return res.status(404).json({
                message: "Glasses not found"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    } 

}

export default actionGlassesController