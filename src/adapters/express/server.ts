import express from 'express';
import dotenv from 'dotenv'
import UserRouter from '../routes/userRoute'
import VehicleRouter from '../routes/vehicleRoute';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const api = process.env.API

app.use(express.json());
app.use(`${api}`, UserRouter)
app.use(`${api}`, VehicleRouter)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})