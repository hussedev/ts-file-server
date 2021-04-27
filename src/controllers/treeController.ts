import { NextFunction, Request, Response, Router } from 'express';
export const treeController: Router = Router();

treeController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'Tree!' });
  } catch (e) {
    next(e);
  }
});
