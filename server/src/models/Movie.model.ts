import { Table, Column, Model, HasMany, DataType } from "sequelize-typescript";
import MovieAttibutes, { MovieInput } from "../@types/Movie.interface";

@Table({
  tableName: "Movies",
  timestamps: true
})
class Movie extends Model<MovieAttibutes, MovieInput> implements MovieAttibutes {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare name: string;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

export default Movie;
