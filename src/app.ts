import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { routes } from './routes';

export const app: Application = express();

app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use('/file', express.static('public'));
app.use(express.json());
routes(app);
