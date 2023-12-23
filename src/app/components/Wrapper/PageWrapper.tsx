"use client";

import React from "react";
import {
  Container,
  Content,
  Footer,
  CopyrightText,
  IconLink,
  Page,
  RightsText,
  FooterContent,
} from "./StyledWrapper";
import { FlexCenter } from "../Global/StyledGlobal";

import Header from "../Navigation/Header";
import Image from "next/image";

export interface WrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<WrapperProps> = (props: WrapperProps) => {
  return (
    <Container>
      <Page>
        <Header />
        <Content>{props.children}</Content>
        <Footer>
          <div>
            <Image
              src="/images/rns-logo-3.png"
              alt="RNS Icon"
              width={400}
              height={30}
            />
            <FooterContent>
              <CopyrightText>© Copyright 2023</CopyrightText>
              <RightsText>All Rights Reserved</RightsText>
              <FlexCenter>
                <IconLink
                  href="https://twitter.com/RootNameService"
                  target="_blank"
                >
                  <i className="fa-brands fa-discord fa-xl" />
                </IconLink>
                <IconLink
                  href="https://twitter.com/RootNameService"
                  target="_blank"
                >
                  <i className="fa-brands fa-x-twitter fa-xl" />
                </IconLink>
                <IconLink
                  href="mailto:support@rootnameservice.com"
                  target="_blank"
                >
                  <i className="fa-regular fa-envelope fa-xl" />
                </IconLink>
              </FlexCenter>
            </FooterContent>
          </div>
        </Footer>
      </Page>
    </Container>
  );
};

export default PageWrapper;
