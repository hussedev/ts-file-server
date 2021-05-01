import { NextFunction, Request, Response, Router } from 'express';
import { dirTree } from '../utils/fileTree';
export const treeController: Router = Router();

treeController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await dirTree();
    if (data) res.status(200).send(data);
    else throw Error('path unreachable');
  } catch (err) {
    next(err);
  }
});
