import styled from "styled-components";
import { BaseFont, FlexCenter } from "../../Global/StyledGlobal";

export const Container = styled(FlexCenter)`
  background-color: var(--darker);
  padding: var(--lg-padding);
  width: 100%;
  min-height: calc(100vh - 100px);
`;

export const DesktopLayout = styled.div`
  max-width: var(--page-width);
  padding: 48px 0;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileLayout = styled.div`
  max-width: var(--page-width);
  width: 100%;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const FeatureItem = styled(FlexCenter)`
  align-items: start;
`;

export const Title = styled(BaseFont)`
  font-size: var(--xxl-text);
  text-transform: uppercase;
  line-height: 48px;
  padding-bottom: 12px;
`;

export const SubTitle = styled(BaseFont)`
  max-width: 500px;
  font-weight: normal;
  font-size: var(--lg-text);

  @media only screen and (min-width: 1000px) {
    font-size: 24px;
  }
`;

export const LeftContent = styled.div<{ isLeft?: boolean }>`
  text-align: end;
  ${({ isLeft }) => `visibility: ${isLeft ? "visible" : "hidden"}`};
  margin-right: 24px;
`;

export const RightContent = styled.div<{ isRight?: boolean }>`
  ${({ isRight }) => `visibility: ${isRight ? "visible" : "hidden"}`};
  margin-left: 24px;
`;

export const Avatar = styled(FlexCenter)`
  width: 56px;
  height: 56px;
  border-radius: 48px;
  border: solid 3px var(--primary);
`;

export const LineConnector = styled(FlexCenter)<{ isHidden?: boolean }>`
  border-left: solid 3px var(--primary);
  width: 2px;
  height: 130px;
  background-color: red;
  margin: auto;
  ${({ isHidden }) => `visibility: ${isHidden ? "visible" : "hidden"}`};
`;
