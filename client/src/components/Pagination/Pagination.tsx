import React from "react";
import { LinkPage, Page, Pages } from "./styles";

export const Pagination: React.FC<{}> = (): JSX.Element => {
  return (
    <Pages>
      <Page>
        <LinkPage active={false}>«</LinkPage>
      </Page>
      <Page>
        <LinkPage active={true}>1</LinkPage>
      </Page>
      <Page>
        <LinkPage active={false}>2</LinkPage>
      </Page>
      <Page>
        <LinkPage active={false}>3</LinkPage>
      </Page>
      <Page>
        <LinkPage active={false}>4</LinkPage>
      </Page>
      <Page>
        <LinkPage active={false}>5</LinkPage>
      </Page>
      <Page>
        <LinkPage active={false}>6</LinkPage>
      </Page>
      <Page>
        <LinkPage active={false}>7</LinkPage>
      </Page>
      <Page>
        <LinkPage active={false}>8</LinkPage>
      </Page>
      <Page>
        <LinkPage active={false}>9</LinkPage>
      </Page>
      <Page>
        <LinkPage active={false}>10</LinkPage>
      </Page>
      <Page>
        <LinkPage active={false}>»</LinkPage>
      </Page>
    </Pages>
  );
};
