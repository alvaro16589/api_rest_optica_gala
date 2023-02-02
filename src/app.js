import express from "express";
import customerRoutes from './routes/customers.routes.js';
//import routes

//import routes
const app = express();
const pref = '/api';

//connect to routes
app.use(pref, customerRoutes);

//middlewere
app.unsubscribe((req,res,next)=>{
    res.status(400).json({
        message : 'Route not found'
    })
})

export default app