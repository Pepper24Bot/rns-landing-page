import styled from "styled-components";
import {
  BaseFont,
  Flex,
  FlexCenter,
  PageSubTitle,
} from "../../Global/StyledGlobal";

export const Container = styled(FlexCenter)`
  align-items: end;
  width: 100%;
  max-width: 500px;
  margin: 0 0 128px 0;

  @media only screen and (max-width: 600px) {
    padding: 0 16px 48px 16px;
    max-width: 350px;
  }
`;

export const LeftPanel = styled(Flex)``;

export const RightPanel = styled.div``;

export const Title = styled(BaseFont)`
  font-size: calc(16px + 5vmax);
  text-orientation: upright;
  writing-mode: vertical-rl;
  line-height: normal;
  letter-spacing: -40px;
  margin-bottom: 8px;

  @media only screen and (max-width: 500px) {
    letter-spacing: -20px;
  }

  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    letter-spacing: -25px;
  }

  @media only screen and (min-width: 1000px) and (max-width: 1200px) {
    letter-spacing: -30px;
    font-size: 100px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 125px;
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
