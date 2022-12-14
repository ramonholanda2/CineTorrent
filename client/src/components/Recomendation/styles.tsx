import styled from "styled-components";

export const RecomendationsContainer = styled.nav`
  width: 15.8rem;
`;

export const RecomendationTitle = styled.h2`
  background-color: black;
  color: #fff;
  background: rgb(0, 32, 114);
  background: linear-gradient(
    99deg,
    rgb(0, 32, 114) 0%,
    rgba(68, 32, 131, 0.7318277652858018) 48%,
    rgba(142, 31, 150, 1) 100%
  );
  padding: 5px;
  margin: 10px;
  text-align: center;
  font-size: 1.1rem;
  font-family: "Fira Sans", sans-serif;
  border-radius: 3px;
  margin-top: 1.5rem;
`;

export const MovieRecomended = styled.div`
  padding: 5px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.6rem;
`;

export const MoviedRecomendedImg = styled.img`
  height: 18rem;
  width: 14.3rem;
  object-fit: fill;
  -webkit-box-shadow: -1px 0px 36px 0px rgba(0, 32, 114, 1);
  -moz-box-shadow: -1px 0px 36px 0px rgba(0, 32, 114, 1);
  box-shadow: -1px 0px 23px 0px #002072cc;
  overflow: hidden;

  cursor: pointer;
`;
export const MoviedRecomendedName = styled.a`
  padding: 0 10px;
  margin-top: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  color: black;

  &:hover {
    color: #d70202ed;
  }
`;
