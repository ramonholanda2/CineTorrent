import { Optional } from "sequelize";

export default interface MovieAttibutes {
  uuid: string;
  name: string;
  imageURL: string;
  originalTitle: string;
  translatedTitle: string;
  generos: string;
  duration: string;
  scoreIMDB: number;
  formatMovie: string;
  audioLanguages: string;
  qualityAudio: number;
  qualityVideo: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MovieInput extends Optional<MovieAttibutes, "uuid"> {}
export interface MovieOuput extends Required<MovieAttibutes> {}
