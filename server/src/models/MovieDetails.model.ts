import { Table, Column, Model, DataType, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import MovieDetailsAttibutes from '../interfaces/MovieDetails.interface';
import { MovieDetailsInput } from '../interfaces/MovieDetails.interface';
import MovieDownload from './MovieDownload.model';
import Movie from "./Movie.model";

@Table({
  tableName: "MovieDetails",
  timestamps: true
})
class MovieDetails extends Model<MovieDetailsAttibutes, MovieDetailsInput> implements MovieDetailsAttibutes {

  @ForeignKey(() => MovieDownload)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false
  })
  declare uuid: string;
  
  @ForeignKey(() => Movie)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  declare movieUUID: string;

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
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  declare quantityVisits: number; 
  
  @HasOne(() => MovieDownload)
  declare movie: Movie;
  
  @BelongsTo(() => MovieDownload)
  declare movieDownload: MovieDownload[];
  
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

export default MovieDetails;
