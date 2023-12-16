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
  background-color: ${({ isTop }) =>
    isTop ? "transparent" : "var(--background-darkest)"};
  box-shadow: var(--shadow-1);
  //  border-bottom: ${({ isTop }) =>
    isTop ? "solid 1px var(--secondary)" : "none"};
  border-bottom: solid 1px var(--secondary);
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
