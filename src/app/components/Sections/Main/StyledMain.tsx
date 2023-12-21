import styled, { keyframes } from "styled-components";
import { BaseButton, FlexPageContent } from "../../Global/StyledGlobal";

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

export const Container = styled(FlexPageContent)`
  min-height: calc(100vh - 100px);
  width: 100%;

  position: relative;
  overflow: hidden;
`;

export const BgContainer = styled.div`
  position: absolute;
  opacity: 0.75;
  right: 0;

  @media only screen and (max-width: 800px) {
    transform: scale(1.5, 2.1);
  }

  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    transform: scale(1.5, 2);
  }

  @media only screen and (min-width: 1000px) and (max-width: 1500px) {
    transform: scale(1.5);
  }

  @media only screen and (min-width: 1500px) {
    transform: scale(1.05);
  }
`;

export const ContentContainer = styled.div`
  max-width: var(--page-width);
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Content = styled.div`
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
  animation-delay: 1000ms;
  animation-fill-mode: both;
`;
