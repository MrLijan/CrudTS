import { Router, Request, Response } from 'express';

const file = Router();

file.get('/read', (req: Request, res: Response) => {
  res.send('/read');
});

export default file;
