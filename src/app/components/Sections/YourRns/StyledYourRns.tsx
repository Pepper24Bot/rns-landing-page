import styled from "styled-components";
import { Button, FlexCenter, PageTitle } from "../../Global/StyledGlobal";

export const Container = styled(FlexCenter)`
  position: relative;
  background-color: var(--background-darkest);
  padding: 64px var(--lg-padding);
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

export const RnsTitle = styled(PageTitle)`
  max-width: 600px;
  text-align: center;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0));
`;

export const ImageContainer = styled(FlexCenter)`
  padding: 72px 0;
`;

export const Content = styled.div`
  position: relative;
  padding: 32px 0;
`;

export const BgContainer = styled.div`
  position: absolute;
  transform: scale(1.5);

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const SearchButton = styled(Button)`
  box-shadow: 0px -8px 8px 16px rgba(0, 0, 0, 1);
`;
