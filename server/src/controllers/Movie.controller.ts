import { NextFunction, Request, Response } from "express";
import { MovieInput, MovieOuput } from '../interfaces/Movie.interface';
import MovieService from "../services/Movie.service";

class MovieController {
  public async createMovie(req: Request, res: Response, next: NextFunction) {
    const payload = req.body as MovieInput;
    res.send(await MovieService.createMovie(payload));
  }

  public async findAllMovies(req: Request, res: Response, next: NextFunction) {
    const allMovies = await MovieService.findAllMovies(); 
    res.send(allMovies);
  }

  public async findMovieById(req: Request, res: Response, next: NextFunction) {
    res.send(await MovieService.findMovieById(req.params.movieUUID));
  }

  public async deleteMovieById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    await MovieService.deleteMovieById(req.params.movieUUID);
    res.status(204).send();
  }
  public async updateMovieById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const moviePayload = req.body as MovieInput; 
    await MovieService.updateMovieById(req.params.movieUUID, moviePayload);
    res.sendStatus(204);
  }
}
export default new MovieController();
