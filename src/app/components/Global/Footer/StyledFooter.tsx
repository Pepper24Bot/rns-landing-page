import styled from "styled-components";
import {
  FlexCenter,
  FlexJustified,
  BaseFont,
  IconLink,
  PageTitle,
  BaseButton,
} from "../StyledGlobal";
import { TextField } from "@mui/material";

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

  @media only screen and (max-width: 600px) {
    display: block;
    padding: 20px 30px;
  }
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

export const Title = styled(PageTitle)`
  color: var(--primary);
  font-size: 32px;
  font-family: var(--secondary-font);
`;

export const Subtitle = styled.p`
  color: rgb(255, 255, 255, 0.75);
  font-size: 14px;
  font-family: var(--secondary-font);
  padding: 10px 0 35px 0;
`;

export const SubscribeField = styled(TextField)`
  position: relative;
  z-index: 2;
  color: white;
  border: solid 1px rgb(84, 6, 36, 0.5);
  border-radius: 8px 0 0 8px;
  box-shadow: 0px 0px 20px 0px rgb(0, 0, 0);

  .MuiInputBase-input {
    padding: 0;
    color: rgb(255, 255, 255, 1);
  }
  .MuiInputBase-root {
    &.MuiOutlinedInput-root {
      color: rgb(255, 255, 255, 1);
      padding: 12px 20px;

      &.Mui-focused fieldset {
        border-color: rgb(84, 6, 36, 0.75);
        border-width: 1px;
      }
    }
  }
`;

export const Subscription = styled.div`
  max-width: 430px;
`;

export const EmailContainer = styled(FlexCenter)`
  background-color: rgb(84, 6, 36, 0.1);
  text-align: center;
  padding: 100px 15px;
`;

export const SubscribeButton = styled(BaseButton)`
  border-radius: 0 8px 8px 0;
  box-shadow: 0px 0px 20px 0px rgb(0, 0, 0);
  text-transform: capitalize;
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 14px;
  padding: 12px 20px;
`;

export const ErrorText = styled.p`
  position: absolute;
  text-align: start;
  padding: 4px 16px;
  color: red;
  font-size: 14px;
`;
