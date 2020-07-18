import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
import { notFoundHandler, errorHandler } from './middlewares';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// API
app.use('/api/v1', routes);

// Middlewares
app.use(notFoundHandler)
app.use(errorHandler);

export default app;
