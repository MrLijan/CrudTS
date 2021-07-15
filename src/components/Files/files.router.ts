import { Router, Request, Response } from 'express';
import File from './files.class';

//Init Router
const router = Router();

const basePath: string = '/home/mrlijan/Dev/crudts/dist/userland/';
const file = new File(basePath);

// Fetching the full dir of userland ->
router.get('/read/home', async (req: Request, res: Response) => {
  res.send(file.readStructure(basePath));
});

// Fetching a specific file ->
router.get('/read', async (req: Request, res: Response) => {
  const params: any = req.query.p;
  try {
    const document = await file.readFile(params);
    res.send(document);
  } catch (err) {
    res.send(err);
  }
});

// Creating a File ->
router.get('/create', async (req: Request, res: Response) => {
  const path: any = req.query.p;
  const document = await file.createFile(path);
  res.send(document);
});

// Delete a file ->
router.get('/delete', async (req: Request, res: Response) => {
  const path: any = req.query.p;
  const deleted = await file.deleteFile(path);
  res.send(deleted);
});

export = router;
