import { Optional } from "sequelize";
import MovieDownload from './MovieDownload.interface';

export default interface MovieDetailsAttibutes {
  uuid: string;
  movieUUID: string;
  sinopse: string;
  trailer: string;
  quantityVisits: number;
  movieDownload: MovieDownload[];
}

export interface MovieDetailsInput extends Optional<MovieDetailsAttibutes, "uuid"> {}
export interface MovieDetailsOutput extends Required<MovieDetailsAttibutes> {}
