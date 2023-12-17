import styled from "styled-components";
import { BaseFont, Flex } from "../../Global/StyledGlobal";

export const Container = styled.div`
  background-color: var(--background-darkest);
  padding: 64px 16px;
  min-height: calc(100vh - 100px);
  text-align: center;
`;

export const Questions = styled.div`
  max-width: var(--page-width);
  padding: 16px;
  margin: 64px 16px 16px 16px;
`;

export const QuestionItem = styled(Flex)<{ isFirst?: boolean }>`
  border-bottom: solid 1px;
  padding: 16px 16px 16px 0;
  max-width: 900px;
  ${({ isFirst }) => (isFirst ? "border-top: solid 1px;" : "")};
  cursor: pointer;
`;

export const Heading = styled(BaseFont)`
  text-align: start;
  font-size: 18px;
  width: 100%;

  &:hover {
    color: var(--primary);
  }
`;

export const SubHeading = styled(BaseFont)<{
  isShowing?: boolean;
  contentHeight?: number | string;
}>`
  font-size: 16px;
  font-weight: 300;
  opacity: 0.8;
  text-align: start;
  white-space: pre-line;
  ${({ isShowing, contentHeight }) =>
    `max-height: ${isShowing ? contentHeight : "0"}`};
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
`;

export const IconContainer = styled.div`
  align-self: start;
  margin: 16px;
  min-width: 24px;
`;