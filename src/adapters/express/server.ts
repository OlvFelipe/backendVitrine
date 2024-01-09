import express from 'express';
import dotenv from 'dotenv'
import UserRouter from '../routes/userRoute'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', UserRouter)


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})