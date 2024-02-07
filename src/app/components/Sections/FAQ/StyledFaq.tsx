import styled from "styled-components";
import { BaseFont, Flex } from "../../Global/StyledGlobal";

export const Container = styled.div`
  background-color: var(--background-darkest);
  padding: 64px var(--lg-padding);
  min-height: calc(100vh - 100px);
  text-align: center;
`;

export const Questions = styled.div`
  max-width: var(--page-width);
  padding: 64px 0;
`;

export const QuestionItem = styled(Flex)<{ isFirst?: boolean; index?: number }>`
  border-bottom: solid 1px rgba(256, 256, 256, 0.25);
  padding: 16px 8px;
  max-width: 900px;
  ${({ isFirst }) =>
    isFirst ? "border-top: solid 1px rgba(256, 256, 256, 0.25);" : ""};
  cursor: pointer;
`;

export const Title = styled(BaseFont)`
  font-weight: 400;
  text-align: start;
  font-size: 18px;
  width: 100%;

  &:hover {
    color: var(--primary);
  }
`;

export const SubTitle = styled(BaseFont)<{
  isShowing?: boolean;
  contentHeight?: number | string;
}>`
  font-size: 16px;
  font-weight: 300;
  opacity: 0.85;
  text-align: start;
  white-space: pre-line;
  ${({ isShowing, contentHeight }) =>
    `max-height: ${isShowing ? contentHeight : "0"}`};
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
`;

export const IconContainer = styled.div`
  align-self: start;
  margin: 16px 8px 16px 0;
  min-width: 24px;
`;
