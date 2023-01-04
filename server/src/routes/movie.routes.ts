import express from 'express';
import IRoutes from './IRoutes';
import MovieController from '../controllers/MovieController';

class MovieRouterImpl implements IRoutes  {
    public readonly router: express.Router;
  
    constructor() {
      this.router = express.Router();
      this.createRoutes();
    }
   
    public createRoutes() {
      this.router.post("/", MovieController.createMovie);
    }

    public getAllRoutes() {
        return this.router;

    }
  }
  
  export default new MovieRouterImpl().getAllRoutes();