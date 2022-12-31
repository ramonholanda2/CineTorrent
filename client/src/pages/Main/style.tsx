import styled from "styled-components";
import globalThemeColor from "../../globalThemeColor";

export const MainContainer = styled.div`
  display: flex;
  padding: 0 10px;
  
  @media (max-width: 960px) {
      flex-direction: column;
  }
`;

export const Movies = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 0;
`;

