import { NextFunction, Request, Response } from "express";
import MovieService from "../services/Movie.service";
import { MovieInput } from '../interfaces/Movie.interface';

class MovieController {
  public async createMovie(req: Request, res: Response, next: NextFunction) {
    const payload = req.body as MovieInput ;
    res.send(await MovieService.createMovie(payload));
  }
}

export default new MovieController();
