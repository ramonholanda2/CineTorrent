import { Optional } from "sequelize";

export default interface MovieAttibutes {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface MovieInput extends Optional<MovieAttibutes, 'id'> {}
export interface MovieOuput extends Required<MovieAttibutes> {}