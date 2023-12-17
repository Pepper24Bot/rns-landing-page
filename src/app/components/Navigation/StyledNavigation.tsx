import styled from "styled-components";
import {
  HorizontalDivider,
  FlexCenter,
  FlexJustified,
  FlexRight,
} from "../Global/StyledGlobal";

export const Container = styled(FlexCenter)<{ isTop?: boolean }>`
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 100;
  // background-color: ${({ isTop }) =>
    isTop ? "transparent" : "var(--background-darkest)"};
  background-color: var(--background-darkest);
  box-shadow: var(--shadow-1);
  border-bottom: ${({ isTop }) =>
    isTop ? "solid 1px var(--secondary)" : "none"};
  border-bottom: solid 1px
    ${({ isTop }) =>
      isTop ? "rgb(255,255,255,0.75)" : "rgb(255,255,255,0.25)"};
`;

export const NavigationBar = styled(FlexJustified)`
  padding: 16px;
  max-width: var(--page-width);
  width: 100%;
`;

export const ToolBar = styled(FlexRight)`
  height: 100%;
`;

export const VerticalDivider = styled(HorizontalDivider)`
  margin: 0 16px;
  height: 50px;
`;

export const IconLink = styled.a`
  margin-right: 24px;

  &:hover {
    color: var(--primary);
  }
`;
