import styled from "styled-components";
import { FlexCenter } from "../../StyledGlobal";

export const PdfContainer = styled.div``;

export const Content = styled.div`
  height: 400px;
  width: 100%;
  overflow: auto;
`;

export const PageSteps = styled(FlexCenter)``;

export const PageLabel = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding: 16px;
`;

export const ButtonLabel = styled.p<{ isDisabled?: boolean }>`
  color: ${({ isDisabled }) => (isDisabled ? "grey" : "var(--primary)")};
  font-size: 14px;
`;
