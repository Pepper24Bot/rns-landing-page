import styled from "styled-components";
import { Grid } from "../../Global/StyledGlobal";

export const Container = styled(Grid)`
  position: relative;

  @media only screen and (min-width: 650px) {
    min-height: 100vh;
  }

  @media only screen and (max-width: 650px) {
    align-content: start;
  }
`;

export const LeftPanel = styled(Grid)`
  display: flex;
  justify-content: end;
  align-items: center;

  background-color: var(--secondary);
  padding: var(--lg-padding);

  @media only screen and (max-width: 650px) {
    height: 200px;
    grid-column: span 12;
    justify-content: center;
  }
`;

export const RightPanel = styled(Grid)`
  display: flex;
  justify-content: start;
  align-items: center;

  background-color: var(--background-darker);
  padding: var(--lg-padding);

  @media only screen and (max-width: 650px) {
    grid-column: span 12;
    justify-content: center;
    align-items: start;
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
