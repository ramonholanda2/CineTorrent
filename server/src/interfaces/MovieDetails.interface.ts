import { Optional } from "sequelize";
import MovieDownload from './MovieDownload.interface';

export default interface MovieDetailsAttibutes {
  uuid: string;
  parentUUID: string;
  sinopse: string;
  trailer: string;
  downloads: MovieDownload[];
}

export interface MovieDetailsInput extends Optional<MovieDetailsAttibutes, "uuid"> {}
export interface MovieDetailsOutput extends Required<MovieDetailsAttibutes> {}
