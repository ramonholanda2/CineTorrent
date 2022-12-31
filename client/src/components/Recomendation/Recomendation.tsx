import React from "react";
import backgroundImage from "../../assets/images/background-home.jpg";
import {
  MoviedRecomendedImg,
  MoviedRecomendedName,
  MovieRecomended,
  RecomendationsContainer,
  RecomendationTitle,
} from "./styles";

export const Recommendation: React.FC<{}> = () => {
  return (
    <RecomendationsContainer>
      <RecomendationTitle>Recomendações</RecomendationTitle>
      <MovieRecomended>
        <MoviedRecomendedImg src={backgroundImage} />
        <MoviedRecomendedName href="https://google.com">
          Em busca da verdade Dual Áudio 5.1 / Dublado WEB-DL 720p | 1080p –
          Download
        </MoviedRecomendedName>
      </MovieRecomended>
      <MovieRecomended>
        <MoviedRecomendedImg src={backgroundImage} />
        <MoviedRecomendedName href="https://google.com">
          Em busca da verdade Dual Áudio 5.1 / Dublado WEB-DL 720p | 1080p –
          Download
        </MoviedRecomendedName>
      </MovieRecomended>
      <MovieRecomended>
        <MoviedRecomendedImg src={backgroundImage} />
        <MoviedRecomendedName href="https://google.com">
          Em busca da verdade Dual Áudio 5.1 / Dublado WEB-DL 720p | 1080p –
          Download
        </MoviedRecomendedName>
      </MovieRecomended>
      <MovieRecomended>
        <MoviedRecomendedImg src={backgroundImage} />
        <MoviedRecomendedName href="https://google.com">
          Em busca da verdade Dual Áudio 5.1 / Dublado WEB-DL 720p | 1080p –
          Download
        </MoviedRecomendedName>
      </MovieRecomended>
      <MovieRecomended>
        <MoviedRecomendedImg src={backgroundImage} />
        <MoviedRecomendedName href="https://google.com">
          Em busca da verdade Dual Áudio 5.1 / Dublado WEB-DL 720p | 1080p –
          Download
        </MoviedRecomendedName>
      </MovieRecomended>
      
   
    </RecomendationsContainer>
  );
};
