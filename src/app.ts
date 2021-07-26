// Imports:
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import filesRouter from './components/Files/files.router';
import bodyParser from 'body-parser';

// Controllers (Route handlers) placed here
// API keys and Passport configuration placed here

// Initiate Express server:
const app: Application = express();

// DB connector will be placed here

// Express Configurations
app.set('port', process.env.PORT || 5000);

app.use(express.json());

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: false,
};
app.use(cors(options));

// Primary app routes
app.get('/', (req: Request, res: Response) => {
  res.send('CrudTS Home Page');
});

app.use('/files', filesRouter);

export default app;
