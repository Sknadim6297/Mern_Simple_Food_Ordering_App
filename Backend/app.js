import express from 'express';
import cors from 'cors';
import { dbConnection } from './database/database.connection.js';
import { errorMiddleWare } from './error/error.js';
import reservationRouter from './routes/reservation.js';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['POST'],
        credentials: true
    })
);

dbConnection.then(() => {
    console.log('Database connected successfully');
}
).catch((err) => {
    console.log('Error connecting to database');
    console.log(err);
}
);
app.use(errorMiddleWare);
app.use('/api/reservation', reservationRouter);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})