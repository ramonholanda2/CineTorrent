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

export const Header: React.FC<{}> = () => {
  const [currentDate, setCurrentDate] = useState(new Date().getFullYear());

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
          <Category>Documentários</Category>
          <Category>Lançamentos {currentDate}</Category>
        </ListCategories>
      </SubHeader>
    </ContainerHeader>
  );
};
