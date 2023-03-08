import express from "express";
import customerRoutes from './routes/customers.routes.js';
import telephoneRoutes from './routes/telephone.routes.js';
import recetRoutes from './routes/recet.routes.js';
import brandRoutes from './routes/brand.routes.js';
import genderRoutes from './routes/gender.routes.js';
import materialRoutes from './routes/material.routes.js';
import modelRoutes from './routes/model.routes.js';
import shapeRoutes from './routes/shape.routes.js';
import brand2Routes from './routes/brand2.routes.js';
import colorRoutes from './routes/color.routes.js';
import contactlensesRoutes from './routes/contactLenses.routes.js';
import material2Routes from './routes/material2.routes.js';
import replacementRoutes from './routes/replacement.routes.js';
import glassesRoutes from './routes/glasses.routes.js';
import typologyRoutes from './routes/typology.routes.js';
//import routes
const app = express();
app.use(express.json())//convert  body to jSon sentence
const pref = '/api';
app.use((req, res, next) => {//permisos cors para los request de angular
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
//connect to routes
app.use(pref, brandRoutes);
app.use(pref, brand2Routes);
app.use(pref, colorRoutes);
app.use(pref, contactlensesRoutes);
app.use(pref, customerRoutes);
app.use(pref, genderRoutes);
app.use(pref, glassesRoutes);
app.use(pref, materialRoutes);
app.use(pref, material2Routes);
app.use(pref, modelRoutes);
app.use(pref, recetRoutes);
app.use(pref, replacementRoutes);
app.use(pref, shapeRoutes);
app.use(pref, telephoneRoutes);
app.use(pref, typologyRoutes);
//middlewere

app.unsubscribe((req,res,next)=>{
    res.status(400).json({
        message : 'Route not found'
    })
})

export default app