import express from 'express';
// import routes from './routes';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
// app.use(routes);

app.get('/', (req, res) => {
  res.send(`Ambiente: ${process.env.NODE_ENV}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});