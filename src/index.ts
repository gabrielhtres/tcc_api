import express from 'express';
import rootRoute from './Routes/index';
import morgan from 'morgan';
import dotenv from 'dotenv';
import logging from './Middlewares/logging';

dotenv.config();

const app = express();
const port = 3030;

app.use(morgan('dev'));
app.use(express.json());
app.use(logging);
app.use('/', rootRoute);

app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`);
});
