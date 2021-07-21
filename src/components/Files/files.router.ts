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
router.get('/create', async (req: Request, res: Response) => {
  const path: any = req.query.p;
  const data: any = req.body.p;
  const document = await file.createFile(path, data);
  res.send(document);
});

// Update a File ->
router.get('/save', async (req: Request, res: Response) => {
  const path: any = req.query.p;
  const data: any = req.body.data;

  const document = await file.updateFile(path, data);

  res.send(document);
});

// Delete a file ->
router.get('/delete', async (req: Request, res: Response) => {
  const path: any = req.query.p;
  const deleted = await file.deleteFile(path);
  res.send(deleted);
});

export = router;
