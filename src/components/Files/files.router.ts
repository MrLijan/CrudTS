import { Router, Request, Response } from 'express';
import File from './files.class';
import path from 'path';
import { encode, decode } from '../helpers/dencode';

//Init Router
const router = Router();

// const base: string = '/home/mrlijan/Dev/crudts/dist/userland/';

const basePath: string = path.join(__dirname, '../../../dist/userland');
console.log(basePath);
const file = new File(basePath);

// Fetching the full dir of userland ->
router.get('/read/home', async (req: Request, res: Response) => {
  res.send(file.readStructure(basePath, { attributes: ['mtime'] }));
});

// Fetching a specific file ->
router.get('/read', async (req: Request, res: Response) => {
  const params: any = req.query.p;
  try {
    const document = await file.readFile(decode(params));
    res.send(document);
  } catch (err) {
    res.send(err);
  }
});

// Creating a File ->
router.post('/create', async (req: Request, res: Response) => {
  const path: any = req.body.p;
  const data: any = req.body.p;

  const document = await file.createFile(decode(path), decode(data));

  // -> If error, send 405
  if (document.status === 'error') {
    res.status(405).send(document);
  } else {
    res.sendStatus(200);
  }
});

// Update a File ->
router.post('/save', async (req: Request, res: Response) => {
  const path: any = req.body.p;
  const data: any = req.body.data;

  const document = await file.updateFile(decode(path), decode(data));
  res.status(201);
  res.send(document);
});

// Delete a file ->
router.get('/delete', async (req: Request, res: Response) => {
  const path: any = req.query.p;
  const deleted = await file.deleteFile(path);
  res.send(deleted);
});

export = router;
