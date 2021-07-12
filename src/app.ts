// Imports:
import express, { Application, Request, Response, NextFunction } from 'express';
import files from './components/Files/files.router';

// Controllers (Route handlers) placed here
// API keys and Passport configuration placed here

// Initiate Express server:
const app = express();

// DB connector will be placed here

// Express Configurations
app.set('port', process.env.PORT || 5000);

// Primary app routes
app.get('/', (req: Request, res: Response) => {
  res.send('CrudTS Home Page');
});

app.use(files);

export default app;
