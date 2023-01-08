import express from "express";
import IRoutes from "./IRoutes";
import MovieController from "../controllers/Movie.controller";

class MovieRouterImpl implements IRoutes {
  public readonly router: express.Router;

  constructor() {
    this.router = express.Router();
    this.createRoutes();
  }

  public createRoutes() {
    this.router.post("/", MovieController.createMovie);
    this.router.get("/", MovieController.findAllMovies);
    this.router.get("/:movieUUID", MovieController.findMovieById);
    this.router.delete("/:movieUUID", MovieController.deleteMovieById);
    this.router.put("/:movieUUID", MovieController.updateMovieById);
  }

  public getAllRoutes() {
    return this.router;
  }
}

export default new MovieRouterImpl().getAllRoutes();
