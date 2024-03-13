"use client";

import React, { useContext } from "react";
import { Page } from "../../Wrapper/StyledWrapper";
import { FlexCenter } from "../StyledGlobal";
import {
  Footer,
  FooterLogo,
  FooterContent,
  IconButton,
  FooterTerms,
  CopyrightText,
  TermsText,
} from "./StyledFooter";
import { PageWrapperContext } from "../../Wrapper/PageWrapper";

import EmailSubscription from "./EmailSubscription";
import Image from "next/image";
import PolicyAndTerms from "../Modal/Contents/PolicyAndTerms";

export const PageFooter: React.FC = () => {
  const { toggleModal } = useContext(PageWrapperContext);

  const handleUnderstood = () => {
    document.cookie = `policy-approval=understood;`;
  };

  const handleAccept = () => {
    document.cookie = `terms-approval=accepted;`;
  };

  return (
    <Footer>
      <Page>
        <EmailSubscription />
        <FooterLogo>
          <Image
            src="/images/rns-logo-4.png"
            alt="RNS Icon"
            width={400}
            height={30}
          />
          <FooterContent>
            <FlexCenter>
              <IconButton
                href="https://twitter.com/RootNameService"
                target="_blank"
              >
                <i className="fa-brands fa-discord fa-lg" />
              </IconButton>
              <IconButton
                href="https://twitter.com/RootNameService"
                target="_blank"
              >
                <i className="fa-brands fa-x-twitter fa-lg" />
              </IconButton>
              <IconButton
                href="mailto:support@rootnameservice.com"
                target="_blank"
              >
                <i className="fa-solid fa-envelope fa-lg" />
              </IconButton>
            </FlexCenter>
          </FooterContent>
        </FooterLogo>
        <FooterTerms>
          <CopyrightText>©2024 All Rights Reserved</CopyrightText>
          <FlexCenter>
            <TermsText
              onClick={() => {
                toggleModal({
                  props: <PolicyAndTerms type="Policy" />,
                  title: "Privacy Policy",
                  downloadFile: "/documents/rns-privacy-policy.pdf",
                });
              }}
            >
              Privacy Policy
            </TermsText>
            <TermsText
              onClick={() => {
                toggleModal({
                  props: <PolicyAndTerms type="Terms" />,
                  title: "Terms of Service",
                  downloadFile: "/documents/rns-terms-of-service.pdf",
                });
              }}
            >
              Terms of Service
            </TermsText>
          </FlexCenter>
        </FooterTerms>
      </Page>
    </Footer>
  );
};

export default PageFooter;
