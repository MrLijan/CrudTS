import { Router, Request, Response } from 'express';
import File from './files.class';

//Init Router
const router = Router();

const basePath: string = '/home/mrlijan/Dev/crudts/dist/userland/';

router.get('/read/home', (req: Request, res: Response) => {
  const file = new File(basePath);
  res.send(file.readStructure(basePath));
});

export = router;
