import styled from "styled-components";
import globalThemeColor from "../../globalThemeColor";

export const MovieDetailsContainer = styled.div`
  margin: 0 10px;
  display: flex;

  @media (max-width: 960px) {
      flex-direction: column;
  }
`;

export const Synapse = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px;
`;

export const SynapseTitle = styled.span`
  font-size: 1rem;
  color: ${() => globalThemeColor.ThemeLight.secondary};
  font-weight: 600;
`;
export const SynapseContent = styled.span`
  font-size: 0.8rem;
`;

export const TrailerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TrailerTitle = styled.h1``;

export const TrailerVideo = styled.iframe``;

export const DownloadsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  flex: 1rem;
`;

export const DownloadsDublado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DownloadsDubladoTitle = styled.h1``;

export const DownloadsLegendado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const DownloadsLegendadoTitle = styled.h1``;

export const DownloadHere = styled.button`
  cursor: pointer;
  padding: 8px 15px;
  font-size: 1.1rem;
  margin-top: 0.8rem;
  color: #eeeeee;
  background-color: #101010;
  border-radius: 5px;
`;
