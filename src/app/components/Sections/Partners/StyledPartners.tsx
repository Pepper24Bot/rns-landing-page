import styled from "styled-components";
import { FlexCenter, Grid, SubTitle, Title } from "../../Global/StyledGlobal";

export const Container = styled(FlexCenter)`
  background-color: var(--background-darkest);
  width: 100%;
  min-height: calc(100vh);
  padding: 24px 24px 64px 24px;
`;

export const Heading = styled.div`
  text-align: center;
  padding-bottom: 64px;
`;

export const PartnersTitle = styled(Title)``;

export const PartnersSubTitle = styled(SubTitle)`
  padding: 0 16px;
`;

export const PartnersGrid = styled(Grid)`
  grid-gap: 16px;
  padding: 32px 0 64px;
  align-self: center;
`;

export const PartnerItem = styled(Grid)`
  border: solid 1px rgb(255, 255, 255, 0.5);
  border-radius: 8px;

  @media only screen and (max-width: 500px) {
    grid-column: span 6;
  }
`;

export const ComingSoon = styled(FlexCenter)`
  background-color: rgb(255, 255, 255, 0.2);
  height: 100%;
`;
