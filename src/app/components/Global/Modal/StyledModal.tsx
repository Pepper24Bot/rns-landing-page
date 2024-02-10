import styled from "styled-components";
import { Flex, FlexCenter } from "../StyledGlobal";

export const Container = styled(FlexCenter)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 101;
  background-color: rgba(12, 12, 12, 0.8);
  overflow: auto;
  scrollbar-gutter: stable both-edges;
`;

export const ModalContainer = styled(FlexCenter)`
  max-width: 670px;
  width: 100%;
  height: 600px;
  border-radius: 8px;
  background: linear-gradient(180deg, #000000 32.5%, #c2185b 100%);
`;

export const Modal = styled.div`
  margin: 2px;
  width: 100%;
  height: calc(100% - 2px);
  border-radius: 8px;
  background-color: var(--background-darkest);
`;

export const Header = styled(Flex)`
  border-radius: 8px 8px 0 0;
  background-color: rgb(84, 6, 36, 0.25);
  padding: 20px 25px 20px 50px;
`;

export const Footer = styled(Flex)`
  border-top: solid 1px rgb(84, 6, 36, 0.75);
  padding: 25px 50px;
`;

export const Title = styled.div`
  font-family: var(--secondary-font);
  font-size: 16px;
  // font-weight: 700;
`;
