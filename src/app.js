import express from "express";
import customerRoutes from './routes/customers.routes.js';
import telephoneRoutes from './routes/telephone.routes.js';
import recetRoutes from './routes/recet.routes.js';

//import routes
const app = express();
app.use(express.json())//convert  body to jSon sentence
const pref = '/api';
app.use((req, res, next) => {//permisos cors para los request de angular
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
//connect to routes
app.use(pref, customerRoutes);
app.use(pref, telephoneRoutes);
app.use(pref, recetRoutes);
//middlewere

app.unsubscribe((req,res,next)=>{
    res.status(400).json({
        message : 'Route not found'
    })
})

export default app