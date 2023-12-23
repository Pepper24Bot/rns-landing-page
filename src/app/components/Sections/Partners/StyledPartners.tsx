import styled from "styled-components";
import {
  FlexCenter,
  Grid,
  PageSubTitle,
  PageTitle,
} from "../../Global/StyledGlobal";

export const Container = styled(FlexCenter)`
  background-color: var(--background-darkest);
  width: 100%;
  min-height: calc(100vh);
  padding: 24px var(--lg-padding) 64px var(--lg-padding);
`;

export const PartnersTitle = styled(PageTitle)``;

export const PartnersSubTitle = styled(PageSubTitle)`
  padding: 0 16px;
`;

export const PartnersGrid = styled(Grid)`
  grid-gap: 16px;
  padding: 32px 0 64px;
  align-self: center;
`;

export const PartnerItem = styled(Grid)`
  @media only screen and (max-width: 500px) {
    grid-column: span 6;
  }
`;

export const Content = styled(Grid)`
  border: solid 1px rgb(255, 255, 255, 0.5);
  border-radius: 8px;
  height: 100%;

  &:hover {
    transform: translateY(-25px);
    transition: 400ms all ease;
  }
`;

export const ComingSoon = styled(FlexCenter)`
  background-color: var(--background-main);
  height: 100%;
  border-radius: 8px;
`;
