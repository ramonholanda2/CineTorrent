import styled from "styled-components";
import { Themes } from "../../globalThemeColor";

export const ContainerHeader = styled.div`
  background: rgb(0, 32, 114);
  background: linear-gradient(
    180deg,
    rgba(0, 32, 114, 1) 0%,
    rgba(142, 31, 150, 1) 100%
  );
`;

export const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 5rem;
`;
export const Search = styled.input`
  width: 28rem;
  height: 2.6rem;
  border-radius: 5px;
  max-width: 30rem;
  margin: 0 2rem;
  padding: 8px 11px 6px 6px;

  &:focus {
    border: solid 4px #a0bed9;
    outline: none;
  }
`;

export const SubHeader = styled.div`
  display: flex;
  height: 3rem;
`;
export const ListCategories = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-family: "Fira Sans", sans-serif;
  font-weight: 500;
`;
export const Category = styled.li`
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffff;

  &:first-child {
    font-weight: 600;

    &:hover {
      font-weight: 800;
    }
  }

  &:hover {
    font-weight: 600;
  }
`;

export const Logo = styled.img`
  border-radius: 80%;
  height: 40px;
`;

export const IconUser = styled.img`
  border-radius: 80%;
  height: 40px;
`;
