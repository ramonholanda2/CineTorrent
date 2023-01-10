import { MovieInput, MovieOuput } from "../interfaces/Movie.interface";
import Movie from "../models/Movie.model";
import MovieDetails from "../models/MovieDetails.model";
class MovieService {
  async createMovie(movie: MovieInput): Promise<MovieOuput> {
    const movieCreated = await Movie.create(movie);
    if(movie.movieDetails) {
      movie.movieDetails.movieUUID = movieCreated.uuid;
      await MovieDetails.create(movie.movieDetails);
    }
    return movieCreated;
  }

  async findAllMovies(): Promise<Movie[]> {
    return await Movie.findAll({ include: [MovieDetails] });
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
    return await Movie.update(movie, { where: { uuid: movieUUID } });
  }
}

export default new MovieService();
