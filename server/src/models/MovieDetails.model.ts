import { Table, Column, Model, DataType } from "sequelize-typescript";
import MovieDetailsAttibutes from '../interfaces/MovieDetails.interface';
import { MovieDetailsInput } from '../interfaces/MovieDetails.interface';
import MovieDownloadAttibutes from '../interfaces/MovieDownload.interface';

@Table({
  tableName: "MovieDownload",
  timestamps: true
})
class MovieDetails extends Model<MovieDetailsAttibutes, MovieDetailsInput> implements MovieDetailsAttibutes {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false
  })
  declare uuid: string;

  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  declare parentUUID: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  declare sinopse: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  declare trailer: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  declare downloads: MovieDownloadAttibutes[];

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

export default MovieDetails;
