import styled from "styled-components";
import { FlexCenter, Grid, SubTitle, Title } from "../../Global/StyledGlobal";

export const Container = styled(FlexCenter)`
  background-color: var(--background-darkest);
  padding: 64px 32px;
  width: 100%;
  min-height: calc(100vh - 100px);
`;

export const Heading = styled.div`
  text-align: center;
  padding-bottom: 64px;
`;

export const PartnersTitle = styled(Title)``;

export const PartnersSubTitle = styled(SubTitle)``;

export const PartnersGrid = styled(Grid)`
  grid-gap: 16px;
  padding: 32px 0 64px;
  align-self: center;
`;

export const PartnerItem = styled(Grid)`
  border: solid 1px rgb(255, 255, 255, 0.5);
  border-radius: 8px;
`;

export const ComingSoon = styled(FlexCenter)`
  background-color: rgb(255, 255, 255, 0.2);
  height: 100%;
`;
