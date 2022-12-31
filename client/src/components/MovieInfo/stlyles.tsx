import styled from "styled-components";
import globalThemeColor from "../../globalThemeColor";

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 3px solid ${() => globalThemeColor.ThemeLight.primary};
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  background-color: #f0efef;
  margin: 0.5rem 0;
`;

export const MovieDetailContainer = styled(MovieContainer)`
  margin-top: 2rem;
`;

export const MovieDetails = styled.div`
  display: flex;
`;

export const MovieImage = styled.img`
  height: 20rem;
  width: 15rem;
  border-radius: 3px;
  padding: 2px;
  object-fit: fill;

  &:hover {
    box-shadow: 0 0 3px 2px ${() => globalThemeColor.ThemeLight.secondary};
  }

  @media (max-width: 750px) {
    height: 18rem;
    width: 14rem;
  }

  @media (max-width: 550px) {
    height: 15rem;
    width: 10rem;
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-left: 0.6rem;
`;
export const InformationsTitle = styled.div`
  font-size: 1.1rem;
  color: ${() => globalThemeColor.ThemeLight.secondary};
  font-weight: 600;
  padding: 1px;
  font-family: "Fira Sans", sans-serif;
`;

export const Information = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  font-size: 0.9rem;
`;

export const InformationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InformationTitle = styled.span`
  font-family: "Fira Sans", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  word-break: normal;

  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`;

export const InformationDescription = styled.span`
  font-size: 0.8rem;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  @media (max-width: 550px) {
    font-size: 0.78rem;
  }
`;

export const MovieTitle = styled.a`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: black;
  text-decoration: none;
  margin-bottom: 1rem;

  &:visited {
    color: green;
  }

  &:hover {
    color: #d70202ed;
  }

  @media (max-width: 750px) {
    font-size: 1.3rem;
  }
`;
