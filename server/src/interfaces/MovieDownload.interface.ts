import { Optional } from 'sequelize';
export default interface MovieDownloadAttibutes {
    uuid: string;
    language: string;
    resolution: string;
    downloadLink: string;
}

export interface MovieDownloadInput extends Optional<MovieDownloadAttibutes, "uuid"> {}
export interface MovieDownloadOutput extends Required<MovieDownloadAttibutes> {}
