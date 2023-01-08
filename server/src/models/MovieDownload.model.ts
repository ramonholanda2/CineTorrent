import MovieDownloadAttibutes from "../interfaces/MovieDownload.interface";
import { MovieDownloadInput } from "../interfaces/MovieDownload.interface";
import { Model, Column, DataType, Table, HasMany, ForeignKey } from 'sequelize-typescript';
import MovieDetails from './MovieDetails.model';

@Table({
  tableName: "MovieDownload",
  timestamps: true,
})
export class MovieDownload
  extends Model<MovieDownloadAttibutes, MovieDownloadInput>
  implements MovieDownloadAttibutes
{

  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  declare uuid: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare language: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare resolution: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare downloadLink: string;

  @HasMany(() => MovieDetails)
  declare movieDetails: MovieDetails;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}
export default MovieDownload