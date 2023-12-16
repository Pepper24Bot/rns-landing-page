import styled from "styled-components";
import { Grid } from "../../Global/StyledGlobal";

export const LeftPanel = styled(Grid)`
  display: flex;
  justify-content: end;
  align-items: center;

  background-color: var(--secondary);
  // min-height: calc(100vh - 100px);
  padding: var(--lg-padding);

  @media only screen and (max-width: 650px) {
    height: 200px;
    grid-column: span 6;
    justify-content: center;
  }
`;

export const RightPanel = styled(Grid)`
  display: flex;
  justify-content: start;
  align-items: center;

  background-color: var(--background-darker);
  // min-height: calc(100vh - 100px);
  padding: var(--lg-padding);

  @media only screen and (max-width: 650px) {
    grid-column: span 6;
    justify-content: center;
  }
`;

export const FeatureContext = styled.p`
  font-size: var(--xl-text);
  font-weight: bold;
  font-family: var(--default-font);
  max-width: 280px;
  color: #000;
`;

export const FeatureItem = styled.div`
  border: solid 2px var(--primary);
  padding: 12px 24px;
  margin: 16px 0;
  max-width: 900px;
  width: 100%;
  text-align: center;
`;

export const FeatureTitle = styled.p`
  font-size: var(--lg-text);
  font-family: var(--default-font);
`;
