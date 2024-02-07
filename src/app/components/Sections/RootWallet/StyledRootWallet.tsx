import styled from "styled-components";
import { BaseFont, FlexCenter, PageSubTitle } from "../../Global/StyledGlobal";

export const Container = styled(FlexCenter)`
  align-items: end;
  width: 75vw;
  max-width: 500px;
  padding: 48px 24px;
  margin: 16px 0 144px 0;
`;

export const Title = styled(BaseFont)`
  font-size: calc(16px + 5vmax);
  text-orientation: upright;
  writing-mode: vertical-rl;
  line-height: 75px;
  letter-spacing: -30px;
  margin-bottom: 8px;
  padding-right: 16px;

  @media only screen and (max-width: 500px) {
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 600px) and (max-width: 1000px) {
    font-size: 75px;
    padding-right: 24px;
  }

  @media only screen and (min-width: 1000px) {
    font-size: 125px;
    padding-right: 48px;
  }
`;

export const Period = styled(BaseFont)`
  font-size: calc(16px + 5vmax);
  text-align: center;
  line-height: 50px;
  padding-right: 16px;

  @media only screen and (min-width: 500px) and (max-width: 1000px) {
    font-size: 75px;
    padding-right: 24px;
  }

  @media only screen and (min-width: 1000px) {
    font-size: 125px;
    padding-right: 48px;
  }
`;

export const SubTitle = styled(PageSubTitle)`
  @media only screen and (min-width: 600px) and (max-width: 1000px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 1000px) {
    font-size: 32px;
  }
`;
