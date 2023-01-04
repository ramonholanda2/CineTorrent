import { Table, Column, Model, HasMany, DataType } from "sequelize-typescript";
import MovieAttibutes, { MovieInput } from "../interfaces/Movie.interface";

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

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare imageURL : string;

  @Column({
    type: DataType.STRING,
  })
  declare originalTitle : string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare translatedTitle : string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare generos : string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare duration : string;
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  declare scoreIMDB : number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare formatMovie : string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare audioLanguages: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  declare qualityAudio : number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  declare qualityVideo : number;


  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

export default Movie;
