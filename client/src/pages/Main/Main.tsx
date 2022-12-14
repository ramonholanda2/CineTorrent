import React from "react";

import { MainContainer, Movies } from "./style";
import Movie from "../../components/Movie/Movie";
import { Recommendation } from "../../components/Recomendation/Recomendation";
import { Pagination } from "../../components/Pagination/Pagination";
import { Line, LiveHorizontal } from "../../components/Line/LineStyled";

export const Main: React.FC<{}> = () => {
  return (
    <MainContainer>
      <Movies>
        <Movie />
        <Movie /> 
        <Movie />
        <LiveHorizontal />

        <Pagination />
      </Movies>
      <Line />
      <Recommendation />
    </MainContainer>
  );
};
