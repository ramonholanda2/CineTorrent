import React, { useState } from "react";
import {
  ContainerHeader,
  Head,
  IconUser,
  Logo,
  Search,
  SubHeader,
  ListCategories,
  Category,
} from "./styles";
import LogoIcon from "../../assets/images/logo.jpg";
import UserIcon from "../../assets/images/user.png";
import useWindowDimensions from "../../Hooks/GetWidthAndHeightScreen";

export const Header: React.FC<{}> = () => {
  const [currentDate, setCurrentDate] = useState(new Date().getFullYear());
  const { height, width } = useWindowDimensions();

  return (
    <ContainerHeader>
      <Head>
        <Logo alt="logo" src={LogoIcon} />
        <Search type={"search"} autoComplete={"on"} placeholder={"Pesquisar"} />
        <IconUser alt="user" src={UserIcon} />
      </Head>
      <SubHeader>
        <ListCategories>
          <Category>Todos</Category>
          <Category>Filmes</Category>
          <Category>Series</Category>
          <Category>Animações</Category>
          {width > 750 && (
            <>
              <Category>Documentários</Category>
              <Category>Lançamentos {currentDate}</Category>
            </>
          )}
        </ListCategories>
      </SubHeader>
    </ContainerHeader>
  );
};
