import styled from "styled-components";
import { FlexCenter, FlexJustified, BaseFont, IconLink } from "../StyledGlobal";

export const Footer = styled(FlexCenter)`
  background-color: rgba(0, 0, 0, 1);
  border-top: solid 1px rgb(84, 6, 36, 0.25);
  text-align: -webkit-center;
`;

export const FooterLogo = styled.div`
  background-color: rgb(84, 6, 36, 0.05);
  padding: 20px;
`;

export const FooterTerms = styled(FlexJustified)`
  padding: 20px 50px;
`;

export const CopyrightText = styled(BaseFont)`
  font-size: 14px;
  font-weight: 400;
  font-family: var(--secondary-font);
  color: rgb(255, 255, 255, 0.75);
`;

export const TermsText = styled(CopyrightText)`
  color: rgb(255, 255, 255, 0.35);
  padding: 0 8px;
  text-decoration: underline;

  &:hover {
    color: rgb(255, 255, 255, 0.6);
    cursor: pointer;
  }
`;

export const FooterContent = styled.div`
  padding-top: 16px;
`;

export const IconButton = styled(IconLink)`
  // padding: 12px;
`;
