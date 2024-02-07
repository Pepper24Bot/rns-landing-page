import styled from "styled-components";
import { FlexCenter } from "../StyledGlobal";

export const Container = styled(FlexCenter)`
  // border: solid yellow;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const ModalContainer = styled(FlexCenter)`
  max-width: 670px;
  width: 100%;
  height: 600px;
  border-radius: 8px;
  background-color: var(--background-darkest);
`;
