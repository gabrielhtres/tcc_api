import express from 'express';
import rootRoute from './Routes/index';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/', rootRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
