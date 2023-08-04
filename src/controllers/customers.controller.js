import { pool } from "../db.js";

const actionCustomerController = {
    //metod INDEX
    getCustomers : async (req,res) => {
        try {
            const [rows]  = (await pool.query('SELECT * FROM customer ORDER BY id DESC'));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //SHOW A CUSTOMER
     
     getOneCustomer : async (req,res) => {
        try {
            const [rows]  = (await pool.query(('SELECT * FROM customer WHERE id = ?'),[req.params.id]));
            res.send(rows);
        } catch (error) {
            return res.status(500).json({
                message : 'Something wrong on server'
            })
        }
    },
    //METOD STORE
    createCustomer: async (req, res) => {
        try {
            const { name,lastName,ci,born,sex } = req.body;
            const [rows] = await pool.query('INSERT INTO customer (name, lastName, ci, born, sex) VALUES (?,?,?,?,?)', [name,lastName,ci,born,sex]);
            res.send({ rows });
        } catch (error) {
            
            return res.status(500).json({
                message: 'Something wrong on server, function createCustomer'
            })
        }
    },
    //METOD UPDATE
    updateCustomer: async (req, res) => {

        try {
            const { id } = req.params;
            const { name, lastName, ci, born, sex } = req.body;
            const [result] = await pool.query('UPDATE customer SET name = IFNULL(?,name), lastName = IFNULL(?,lastName) , ci = IFNULL(?,ci), born = IFNULL(?,born), sex = IFNULL(?,sex) WHERE id = ?', [name, lastName, ci, born, sex, id]);
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
    deleteCustomer: async (req, res) => {

        try {
            const [result] = await pool.query('DELETE FROM customer WHERE id = ?', [req.params.id]);

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

export default actionCustomerController