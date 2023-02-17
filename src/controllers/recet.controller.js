import { pool } from "../db.js";

const actionRecetController = {
    getRecets : async (req,res) => {
        try {
            const [rows]  = (await pool.query('SELECT * FROM recet'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //get recet
    getRecet : async (req,res) => {
        try {
            const [rows]  = (await pool.query('SELECT * FROM recet WHERE idCustomer = ?',[req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createRecet: async (req, res) => {
        try {
            const { 
                sphereL,
                sphereR,
                cylinderL,
                cylinderR,
                axisL,
                axisR,
                prisL,
                prisR,
                prisAxisL,
                prisAxisR,
                addL,
                addR,
                segOutL,
                segOutR,
                axis2L,
                axis2R,
                pdFar,
                pdNear,
                idCustomer
            } = req.body;
            const [rows] = await pool.query('INSERT INTO recet ( sphereL, sphereR, cylinderL, cylinderR, axisL, axisR, prisL, prisR, prisAxisL, prisAxisR, addL, addR, segOutL, segOutR, axis2L, axis2R, pdFar, pdNear, idCustomer) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', 
            [
                sphereL,
                sphereR,
                cylinderL,
                cylinderR,
                axisL,
                axisR,
                prisL,
                prisR,
                prisAxisL,
                prisAxisR,
                addL,
                addR,
                segOutL,
                segOutR,
                axis2L,
                axis2R,
                pdFar,
                pdNear,
                idCustomer
            ]);
            res.send({ rows });
        } catch (error) {
            
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
                sphereL,
                sphereR,
                cylinderL,
                cylinderR,
                axisL,
                axisR,
                prisL,
                prisR,
                prisAxisL,
                prisAxisR,
                addL,
                addR,
                segOutL,
                segOutR,
                axis2L,
                axis2R,
                pdFar,
                pdNear,
                idCustomer
            } = req.body;
            const [result] = await pool.query('UPDATE recet SET sphereL = IFNULL(?,sphereL), sphereR = IFNULL(?,sphereR) , cylinderL = IFNULL(?,cylinderL), cylinderR = IFNULL(?,cylinderR), axisL = IFNULL(?,axisL), axisR = IFNULL(?,axisR), prisL = IFNULL(?,prisL), prisR = IFNULL(?,prisR) , prisAxisL = IFNULL(?,prisAxisL), prisAxisR = IFNULL(?,prisAxisR), addL = IFNULL(?,addL), addR = IFNULL(?,addR), segOutL = IFNULL(?,segOutL), segOutR = IFNULL(?,segOutR), axis2L = IFNULL(?,axis2L), axis2R = IFNULL(?,axis2R), pdFar = IFNULL(?,pdFar), pdNear = IFNULL(?,pdNear), idCustomer = IFNULL(?,idCustomer) WHERE id = ?', 
            [
                sphereL,
                sphereR,
                cylinderL,
                cylinderR,
                axisL,
                axisR,
                prisL,
                prisR,
                prisAxisL,
                prisAxisR,
                addL,
                addR,
                segOutL,
                segOutR,
                axis2L,
                axis2R,
                pdFar,
                pdNear,
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