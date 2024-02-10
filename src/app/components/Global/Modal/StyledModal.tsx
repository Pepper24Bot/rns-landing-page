import styled from "styled-components";
import { BaseButton, Flex, FlexCenter, FlexJustified } from "../StyledGlobal";

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

export const Header = styled(FlexJustified)`
  border-radius: 8px 8px 0 0;
  background-color: rgb(84, 6, 36, 0.25);
  padding: 20px 25px 20px 50px;
`;

export const Footer = styled(FlexJustified)`
  border-top: solid 1px rgb(84, 6, 36, 0.75);
  padding: 24px 50px;
`;

export const Content = styled(Flex)`
  height: calc(100% - (64px + 80px));
  padding: 50px 30px 20px 50px;
`;

export const Title = styled.div`
  font-family: var(--secondary-font);
  font-size: 16px;
`;

export const ConfirmBtn = styled(BaseButton)`
  border-radius: 4px;
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 16px;
  text-transform: capitalize;
  padding: 4px 25px;
`;

export const CancelBtn = styled(ConfirmBtn)`
  background-color: var(--backgrund-darkest);
  border: solid 1px var(--primary);
  color: var(--primary);
  margin-right: 10px;

  &:hover {
    color: var(--contrast-text);
  }
`;

export const DownloadBtn = styled.a`
  border: none;
  font-family: var(--secondary-font);
  font-size: 16px;
  font-weight: 400;
  color: var(--primary);

  &:hover {
    color: rgb(84, 6, 36, 1);
  }
`;

export const CloseBtn = styled.button`
  &:hover {
    opacity: 0.35;
  }
`;
