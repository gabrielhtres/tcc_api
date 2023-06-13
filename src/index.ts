import express from 'express';
import rootRoute from './Routes/index';
import morgan from 'morgan';

const app = express();
const port = 3030;

app.use(morgan('dev'));
app.use(express.json());
app.use('/', rootRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
