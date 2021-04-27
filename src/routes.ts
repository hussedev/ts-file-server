import { Application, Router } from 'express';
import { indexController } from './controllers/indexController';

const _routes: [string, Router][] = [['/', indexController]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
