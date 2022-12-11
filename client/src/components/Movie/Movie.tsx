import React from "react";
import backgroundImage from "../../assets/images/background-home.jpg";
import { Informatiom, InformatiomTitle, InformationDescription, Informations, InformationsTitle, MovieContainer, MovieDetails, MovieImage, MovieTitle } from "./styles";

function Movie() {
  return (
    <MovieContainer>
      <MovieTitle href="https://www.google.com">
        Em busca da verdade Dual Áudio 5.1 / Dublado WEB-DL 720p | 1080p –
        Download
      </MovieTitle>
      <MovieDetails>
        <MovieImage src={backgroundImage} />
        <Informations>
          <InformationsTitle>Informações</InformationsTitle>
          <Informatiom>
            <InformatiomTitle>Título original: &nbsp;</InformatiomTitle>
            <InformationDescription>Emancipation</InformationDescription>
          </Informatiom>
          <Informatiom>
            <InformatiomTitle>Título Traduzido: &nbsp;</InformatiomTitle>
            <InformationDescription>
              {" "}
              Emancipação – Uma História de Liberdade
            </InformationDescription>
          </Informatiom>
          <Informatiom>
            <InformatiomTitle>Gênero: &nbsp;</InformatiomTitle>
            <InformationDescription>
              Drama | História | Suspense
            </InformationDescription>
          </Informatiom>
          <Informatiom>
            <InformatiomTitle>Duração: &nbsp;</InformatiomTitle>
            <InformationDescription>2h 05min</InformationDescription>
          </Informatiom>
          <Informatiom>
            <InformatiomTitle>IMDB: &nbsp;</InformatiomTitle>
            <InformationDescription>9</InformationDescription>
          </Informatiom>
          <Informatiom>
            <InformatiomTitle>Formato: &nbsp;</InformatiomTitle>
            <InformationDescription>MKV</InformationDescription>
          </Informatiom>
          <Informatiom>
            <InformatiomTitle>Áudio: &nbsp;</InformatiomTitle>
            <InformationDescription>Portugês | Inglês</InformationDescription>
          </Informatiom>
          <Informatiom>
            <InformatiomTitle>Legenda: &nbsp;</InformatiomTitle>
            <InformationDescription>Português</InformationDescription>
          </Informatiom>
          <Informatiom>
            <InformatiomTitle>Qualidade de Áudio: &nbsp;</InformatiomTitle>
            <InformationDescription>10</InformationDescription>
          </Informatiom>
          <Informatiom>
            <InformatiomTitle>Qualidade de Vídeo: &nbsp;</InformatiomTitle>
            <InformationDescription>10</InformationDescription>
          </Informatiom>
          <Informatiom>
            <InformatiomTitle>Servidor: &nbsp;</InformatiomTitle>
            <InformationDescription>Torrent</InformationDescription>
          </Informatiom>
        </Informations>
      </MovieDetails>
    </MovieContainer>
  );
}

export default Movie;
