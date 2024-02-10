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
import Image from "next/image";

export const PageFooter: React.FC = () => {
  const { toggleModal } = useContext(PageWrapperContext);

  return (
    <Footer>
      <Page>
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
                  props: <p>TODO: Privacy Policy</p>,
                  title: "Privacy Policy",
                  //  confirmAction: () => {
                  //    return handleDeleteArkive();
                  //  },
                  //  confirmLoading: isDeleteLoading,
                });
              }}
            >
              Privacy Policy
            </TermsText>
            <TermsText
              onClick={() => {
                toggleModal({
                  props: <p>TODO: Terms of Service</p>,
                  //  title: "Delete Arkive",
                  //  confirmAction: () => {
                  //    return handleDeleteArkive();
                  //  },
                  //  confirmLoading: isDeleteLoading,
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
