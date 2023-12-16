"use client";

import React from "react";
import { Container, Content, Footer, Page } from "./StyledWrapper";
import Header from "../Navigation/Header";

export interface WrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<WrapperProps> = (props: WrapperProps) => {
  return (
    <Container>
      <Page>
        <Header />
        <Content>{props.children}</Content>
        <Footer />
      </Page>
    </Container>
  );
};

export default PageWrapper;
