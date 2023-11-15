import express from 'express';
import rootRoute from './Routes/index';
import morgan from 'morgan';
import dotenv from 'dotenv';
import logging from './Middlewares/logging';
import fileRoutes from './Routes/FileRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3030;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/file', fileRoutes);
app.use(logging);

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	// res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	next();
});

app.use('/', rootRoute);

app.listen(port, () => {
	console.log(`Servidor funcionando na porta ${port}`);
});
