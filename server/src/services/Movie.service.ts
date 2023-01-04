import { MovieInput } from "../interfaces/Movie.interface";
import Movie from "../models/Movie.model";
class MovieService {
  async createMovie(movie: MovieInput): Promise<Movie> {
    return await Movie.create(movie);
  }
}

export default new MovieService();
