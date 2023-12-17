import styled, { keyframes } from "styled-components";
import { BaseButton, PageContent } from "../../Global/StyledGlobal";

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    25% {
        opacity: 1;
    }
`;

export const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }

    20% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }

    80% {
        opacity: 1;
    }
`;

export const Container = styled(PageContent)`
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 85%;
  max-width: 750px;
  position: relative;

  animation: 7s ${fadeIn} ease-out;
  animationdelay: 500ms;
  animationfillmode: both;
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

export const SearchButton = styled(BaseButton)`
  font-size: var(--md-text);
  margin-top: 40px;
  padding: 12px 24px;
  width: 240px;

  animation: 7s ${fadeInUp};
  animationdelay: 1000ms;
  animationfillmode: both;
`;
