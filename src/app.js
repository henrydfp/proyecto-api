import express, {json} from "express";
import morgan from "morgan";

import clinicaRoutes from "./routes/clinicas";
import sucursalRoutes from "./routes/sucursales";
import doctorRoutes from "./routes/doctores";

const app = express();
//middlewares
app.use(morgan('dev'));
app.use(json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","HEAD, PUT, POST, GET, DELETE, OPTIONS");
    next();
});
//Routes
app.use('/api/clinicas',clinicaRoutes);
app.use('/api/sucursales',sucursalRoutes);
app.use('/api/doctores',doctorRoutes);

export default app;
