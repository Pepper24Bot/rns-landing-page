import styled from "styled-components";
import { ButtonItem, PageContent } from "../../Global/StyledGlobal";

export const Container = styled(PageContent)`
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 85%;
  max-width: 750px;
`;

export const HeadingText = styled.p`
  font-size: var(--xxl-text);
  font-weight: bold;
  font-family: var(--default-font);

  word-break: break-word;
  line-height: normal;
  padding: var(--md-padding) 0;

  @media only screen and (min-width: 1000px) {
    font-size: 48px;
  }
`;

export const HighlightText = styled.span`
  color: var(--primary);
`;

export const SearchButton = styled(ButtonItem)`
  font-size: var(--md-text);
  margin-top: 40px;
  padding: 12px 24px;
  width: 240px;
`;
