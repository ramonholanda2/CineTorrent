import styled from "styled-components";
import backgroundImage from "../../assets/images/background-home.jpg";

export const ContainerHeader = styled.div`
  background: rgb(0, 32, 114);
  background: linear-gradient(180deg, #002072 0%, #8e1f96 100%); 
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 5rem;
`;
export const Search = styled.input`
  width: 35rem;
  height: 2.6rem;
  border-radius: 5px;
  max-width: 35rem;
  margin: 0 2rem;
  padding: 8px 11px 6px 6px;

  &:focus {
    border: solid 4px #a0bed9;
    outline: none;
  }

  @media (max-width: 960px) {
    height: 2.2rem;
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

  @media (max-width: 960px) {
    font-size: 1.1rem;
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
