import React from "react";
import { MovieDetail } from "../../components/MovieDetail/MovieDetail";
import {
  InformationContent,
  InformationDescription,
  InformationTitle,
} from "../../components/MovieInfo/stlyles";
import { Recommendation } from "../../components/Recomendation/Recomendation";
import useWindowDimensions from "../../Hooks/GetWidthAndHeightScreen";
import { WindowDimensions } from "../../types/WindowDimensions";
import {
  DownloadHere,
  DownloadsContainer,
  DownloadsDublado,
  DownloadsDubladoTitle,
  DownloadsLegendado,
  DownloadsLegendadoTitle,
  MovieDetailsContainer,
  Synapse,
  SynapseContent,
  SynapseTitle,
  TrailerContainer,
  TrailerTitle,
  TrailerVideo,
} from "./styles";

export const MovieDetails = () => {
  const { width, height }: WindowDimensions = useWindowDimensions();
  

  return (
    <MovieDetailsContainer>
      <div>
        <MovieDetail />
        <Synapse>
          <div>
            <SynapseTitle>Sinapse: </SynapseTitle>
            <SynapseContent>
              Rick é um velho mentalmente desequilibrado, mas cientificamente
              talentoso que se reconectou recentemente com sua família. Ele
              passa a maior parte do tempo envolvendo o jovem neto Morty em
              aventuras perigosas e estranhas no espaço e em universos
              alternativos. Compostos à vida familiar já instável de Morty,
              esses eventos causam muito sofrimento a Morty em casa e na escola.
            </SynapseContent>
          </div>
        </Synapse>

        <TrailerContainer>
          <TrailerTitle>TRAILER</TrailerTitle>
          <TrailerVideo
            src="https://www.youtube.com/embed/94bGzWyHbu0"
            width={width > 600 ? 520 : 320}
            height="300"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"
            allowFullScreen
          />
        </TrailerContainer>

        <DownloadsContainer>
          <DownloadsDublado>
            <DownloadsDubladoTitle>Dublado</DownloadsDubladoTitle>
            <InformationContent>
              <InformationTitle>Tamanho:&nbsp;</InformationTitle>
              <InformationDescription>1.78 GB</InformationDescription>
            </InformationContent>
            <DownloadHere>Download 1080p</DownloadHere>
          </DownloadsDublado>
          <DownloadsLegendado>
            <DownloadsLegendadoTitle>Legendado</DownloadsLegendadoTitle>
            <InformationContent>
              <InformationTitle>Tamanho:&nbsp;</InformationTitle>
              <InformationDescription>1.78 GB</InformationDescription>
            </InformationContent>
            <DownloadHere>Download 1080p</DownloadHere>
          </DownloadsLegendado>
        </DownloadsContainer>
      </div>
      <Recommendation />
    </MovieDetailsContainer>
  );
};
