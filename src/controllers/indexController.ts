import { NextFunction, Request, Response, Router } from 'express';
export const indexController: Router = Router();

indexController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'Hey, my name is FileServer' });
  } catch (err) {
    next(err);
  }
});
