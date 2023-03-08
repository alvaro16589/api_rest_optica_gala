import { pool } from "../db.js";

const actionItemController = {
    //metod INDEX
    getItems : async (req,res) => {
        try {
            const [rows]  = (await pool.query('SELECT * FROM item'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //SHOW A item
     
     getOneItem : async (req,res) => {
        try {
            const [rows]  = (await pool.query(('SELECT * FROM item WHERE id = ?'),[req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createItem : async (req, res) => {
        try {
            const { code, idShape, idGender, idBrand, idMaterial, idModel, quantity } = req.body;
            const [rows] = await pool.query('INSERT INTO item ( code, idShape, idGender, idBrand, idMaterial, idModel, quantity ) VALUES (?,?,?,?,?,?,?)', 
            [ code, idShape, idGender, idBrand, idMaterial, idModel, quantity ]);
            res.send({ rows });
        } catch (error) {
            
            return res.status(500).json({
                message: 'Something wrong on server, function createCustomer'
            })
        }
    },
    //METOD UPDATE
    updateItem: async (req, res) => {

        try {
            const { id } = req.params;
            const { code, idShape, idGender, idBrand, idMaterial, idModel, quantity } = req.body;
            const [result] = await pool.query('UPDATE item SET code = IFNULL(?,code), idShape = IFNULL(?,idShape) , idGender = IFNULL(?,idGender), idBrand = IFNULL(?,idBrand), idMaterial = IFNULL(?,idMaterial), idModel = IFNULL(?,idModel), quantity = IFNULL(?,quantity) WHERE id = ?', [code, idShape, idGender, idBrand, idMaterial, idModel, quantity, id]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "Customer not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteItem: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM item WHERE id = ?', [req.params.id]);

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

export default actionItemController