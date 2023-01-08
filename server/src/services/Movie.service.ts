import { MovieInput, MovieOuput } from '../interfaces/Movie.interface';
import Movie from "../models/Movie.model";
class MovieService {
  async createMovie(movie: MovieInput): Promise<MovieOuput> {
    return (await Movie.create(movie)) as MovieOuput;
  }

  async findAllMovies(): Promise<Movie[]> {
    return await Movie.findAll();
  }

  async findMovieById(movieUUID: string) {
    return await Movie.findByPk(movieUUID);
  }

  async deleteMovieById(movieUUID: string) {
    return await Movie.destroy({
      where: {
        uuid: movieUUID,
      },
    });
  }
  async updateMovieById(movieUUID: string, movie: MovieInput) {
    return await Movie.update(movie, {where: { uuid: movieUUID }});
  }
}

export default new MovieService();
