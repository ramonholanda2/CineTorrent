import React from "react";
import {
  Information,
  InformationTitle,
  InformationDescription,
  Informations,
  InformationsTitle,
  MovieDetailContainer,
  MovieDetails,
  MovieImage,
  MovieTitle,
  InformationContent,
} from "../MovieInfo/stlyles";
import backgroundImage from "../../assets/images/background-home.jpg";
import { WindowDimensions } from "../../types/WindowDimensions";
import useWindowDimensions from "../../Hooks/GetWidthAndHeightScreen";

export const MovieDetail: React.FC<{}> = () => {
  const { width }: WindowDimensions = useWindowDimensions();

  return (
    <MovieDetailContainer>
      <MovieTitle href="https://www.google.com">
        Em busca da verdade Dual Áudio 5.1 / Dublado WEB-DL 720p | 1080p –
        Download
      </MovieTitle>
      <MovieDetails>
        <MovieImage src={backgroundImage} />
        <Informations>
          <InformationsTitle>Informações</InformationsTitle>
          {width > 550 && (
            <Information>
              <InformationContent>
                <InformationTitle>Título original: &nbsp;</InformationTitle>
                <InformationDescription>Emancipation</InformationDescription>
              </InformationContent>
            </Information>
          )}
          <Information>
            <InformationContent>
              <InformationTitle>Título Traduzido: &nbsp;</InformationTitle>
              <InformationDescription>
                Emancipação – Uma História de Liberdade
              </InformationDescription>
            </InformationContent>
          </Information>
          <Information>
            <InformationContent>
              <InformationTitle>Gênero: &nbsp;</InformationTitle>
              <InformationDescription>
                Drama | História | Suspense
              </InformationDescription>
            </InformationContent>
          </Information>
          <Information>
            <InformationContent>
              <InformationTitle>Duração: &nbsp;</InformationTitle>
              <InformationDescription>2h 05min</InformationDescription>
            </InformationContent>
          </Information>
          {width > 550 && (
            <Information>
              <InformationContent>
                <InformationTitle>IMDB: &nbsp;</InformationTitle>
                <InformationDescription>9</InformationDescription>
              </InformationContent>
            </Information>
          )}
          <Information>
            <InformationContent>
              <InformationTitle>Formato: &nbsp;</InformationTitle>
              <InformationDescription>MKV</InformationDescription>
            </InformationContent>
          </Information>
          <Information>
            <InformationContent>
              <InformationTitle>Áudio: &nbsp;</InformationTitle>
              <InformationDescription>Portugês | Inglês</InformationDescription>
            </InformationContent>
          </Information>
          <Information>
            <InformationContent>
              <InformationTitle>Legenda: &nbsp;</InformationTitle>
              <InformationDescription>Português</InformationDescription>
            </InformationContent>
          </Information>
          <Information>
            <InformationContent>
              <InformationTitle>Qualidade de Áudio: &nbsp;</InformationTitle>
              <InformationDescription>10</InformationDescription>
            </InformationContent>
          </Information>
          <Information>
            <InformationContent>
              <InformationTitle>Qualidade de Vídeo: &nbsp;</InformationTitle>
              <InformationDescription>10</InformationDescription>
            </InformationContent>
          </Information>
          {width > 550 && (
            <Information>
              <InformationContent>
                <InformationTitle>Servidor: &nbsp;</InformationTitle>
                <InformationDescription>Torrent</InformationDescription>
              </InformationContent>
            </Information>
          )}
        </Informations>
      </MovieDetails>
    </MovieDetailContainer>
  );
};
