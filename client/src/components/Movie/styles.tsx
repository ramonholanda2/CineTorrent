import styled from "styled-components";
import globalThemeColor from "../../globalThemeColor";

export const MovieContainer = styled.div`
  border: 3px solid yellow;
  display: flex;
  flex-direction: column;
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
`;

export const Informations = styled.div`
  border: 3px solid pink;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-left: 1rem;
  `;
export const InformationsTitle = styled.div`
    font-size: 1.1rem;
    color: ${() => globalThemeColor.ThemeLight.secondary}; 
    font-weight: 600;
    padding: 1px;
    `;

export const Informatiom = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  `;

export const InformatiomTitle = styled.span`
  font-family: "Fira Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  `;

export const InformationDescription = styled.span`
  font-size: 0.9rem;
  
  `;

export const MovieTitle = styled.a`
  font-size: 1.6rem;
  font-weight: 600;
  color: black;
  text-decoration: none;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  
  &:visited {
      color: green;
  }
  
  &:hover {
      color: #d70202ed;
    }
    `;