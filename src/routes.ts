import { Application, Router } from 'express';
import { indexController } from './controllers/indexController';
import { treeController } from './controllers/treeController';

const _routes: [string, Router][] = [
  ['/', indexController],
  ['/tree', treeController]
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
