"use client";

import React from "react";
import {
  Container,
  Content,
  Footer,
  FooterText,
  IconLink,
  Page,
  RightsText,
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
              src="/images/rns-logo-2.svg"
              alt="RNS Icon"
              width={450}
              height={60}
            />
            <FooterText>© Copyright 2023</FooterText>
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
                href="https://twitter.com/RootNameService"
                target="_blank"
              >
                <i className="fa-regular fa-envelope fa-xl" />
              </IconLink>
            </FlexCenter>
          </div>
        </Footer>
      </Page>
    </Container>
  );
};

export default PageWrapper;
