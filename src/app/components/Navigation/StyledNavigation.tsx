import styled from "styled-components";
import {
  VerticalDivider as Divider,
  FlexCenter,
  FlexJustified,
  FlexRight,
} from "../Global/StyledGlobal";

export const Container = styled(FlexCenter)<{ isTop?: boolean }>`
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 100;
  background-color: var(--background-darkest);
  box-shadow: var(--shadow-1);
  border-bottom: ${({ isTop }) =>
    isTop ? "solid 1px var(--secondary)" : "none"};
  border-bottom: solid 1px
    ${({ isTop }) =>
      isTop ? "rgb(255,255,255,0.75)" : "rgb(255,255,255,0.25)"};
`;

export const NavigationBar = styled(FlexJustified)`
  padding: 16px 24px;
  max-width: var(--page-width);
  width: 100%;
`;

export const DesktopLayout = styled(FlexRight)`
  height: 100%;

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const MobileLayout = styled(FlexRight)`
  display: none;
  @media only screen and (max-width: 720px) {
    display: flex;
  }
`;

export const VerticalDivider = styled(Divider)`
  margin: 0 16px;
  height: 50px;
`;

export const MenuContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Menu = styled.div`
  display: grid;
  position: absolute;
  top: 75px;
  right: 20px;
  padding: 8px 16px;
  background-color: var(--background-dark);
  border-radius: 4px;
`;

export const IconLink = styled.a`
  margin-right: 24px;

  &:hover {
    color: var(--primary);
  }
`;

export const MenuLink = styled(IconLink)<{ divider?: boolean }>`
  margin-right: 0;
  padding: 8px 0;
  min-width: 100px;
  ${({ divider }) =>
    divider ? "border-bottom: solid 1px rgba(255,255,255,0.2);" : ""};

  &:hover {
    color: var(--primary);
  }
`;
