import { pool } from "../db.js";

const actionContactLensesController = {
    //metod INDEX
    getContactLenses : async (req,res) => {
        try {
            const [rows]  = (await pool.query('SELECT * FROM contactlenses'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //SHOW A ContactLenses
     
     getOneContactLenses : async (req,res) => {
        try {
            const [rows]  = (await pool.query(('SELECT * FROM contactlenses WHERE id = ?'),[req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createContactLenses : async (req, res) => {
        try {
            const { code, idMaterial2, idTypology, idReplacement, idBrand2, idColor, quantity } = req.body;
            const [rows] = await pool.query('INSERT INTO contactlenses ( code, idMaterial2, idTypology, idReplacement, idBrand2, idColor, quantity ) VALUES (?,?,?,?,?,?,?)', 
            [ code, idMaterial2, idTypology, idReplacement, idBrand2, idColor, quantity ]);
            res.send({ rows });
        } catch (error) {
            
            return res.status(500).json({
                message: 'Something wrong on server, function createContactLenses'
            })
        }
    },
    //METOD UPDATE
    updateContactLenses: async (req, res) => {

        try {
            const { id } = req.params;
            const { code, idMaterial2, idTypology, idReplacement, idBrand2, idColor, quantity } = req.body;
            const [result] = await pool.query('UPDATE contactlenses SET code = IFNULL(?,code), idMaterial2 = IFNULL(?,idMaterial2) , idTypology = IFNULL(?,idTypology), idReplacement = IFNULL(?,idReplacement), idBrand2 = IFNULL(?,idBrand2), idColor = IFNULL(?,idColor), quantity = IFNULL(?,quantity) WHERE id = ?', 
            [ code, idMaterial2, idTypology, idReplacement, idBrand2, idColor, quantity, id ]);
            //console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: "contactlenses not updated"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    },
    //metod DELETE
    deleteContactLenses: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM contactlenses WHERE id = ?', [req.params.id]);

            if (result.affectedRows === 0) return res.status(404).json({
                message: "contactlenses not found"
            }); res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({
                message: 'Something wrong on server'
            })
        }
    } 

}

export default actionContactLensesController