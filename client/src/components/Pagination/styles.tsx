import styled from "styled-components";
import globalThemeColor from "../../globalThemeColor";

export const Pages = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const Page = styled.li`
  display: inline;
`;
export const LinkPage = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  background-color: #c0c0c0;
  border: 1px solid #ddd;
  margin: 0 4px;
  cursor: pointer;
  background-color: ${(props: { active: Boolean}) => props.active && "#4caf50" };
  border: 1px solid ${(props: { active: Boolean}) => props.active && "#4caf50" };
  color: ${(props: { active: Boolean}) => props.active && "#ffff" };

`;
