import React from "react";
import GlobalThemeColor from "../../globalThemeColor";
import backgroundImage from "../../assets/images/background-home.jpg";

import { MainContainer, Movies } from "./style";
import Movie from "../../components/Movie/Movie";
import Recomendatiom from "../../components/Recomendatiom/Recomendatiom";

export const Main: React.FC<{}> = () => {
  return (
    <MainContainer>
      <Movies>
        <Movie />
      </Movies>
      <Recomendatiom />
    </MainContainer>
  );
};
