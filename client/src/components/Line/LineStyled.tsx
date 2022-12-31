import styled from "styled-components";

export const Line = styled.div`
  margin: 1rem 8px;
  border-right: 2px solid blue;
  padding: 2rem 0;
  
  @media (max-width: 960px) {
    display: none;
  }
`;

export const LiveHorizontal = styled(Line)`
  margin: 10px 0;
  border: none;
  border-top: 2px solid blue;
  padding: 0rem 0;

  @media (max-width: 960px) {
    display: flex;
  }
`;
