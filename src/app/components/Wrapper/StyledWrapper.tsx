import styled from "styled-components";
import { BaseFont, FlexCenter } from "../Global/StyledGlobal";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--background-darker);
`;

export const Page = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  // min-height: calc(100% - 200px);
  margin: auto;
`;

export const Footer = styled(FlexCenter)`
  background-color: rgba(0, 0, 0, 1);
  border-top: solid 1px rgba(255, 255, 255, 0.25);
  text-align: center;
  padding: 24px;
`;

export const CopyrightText = styled(BaseFont)`
  font-size: 16px;
  padding: 4px;
`;

export const RightsText = styled(CopyrightText)`
  font-weight: 200;
  margin-top: 0;
  opacity: 0.5;
  font-style: italic;
`;

export const FooterContent = styled.div`
  padding-top: 16px;
`;

export const IconLink = styled.a`
  margin: 24px 12px 0;
  &:hover {
    color: var(--primary);
  }
`;
