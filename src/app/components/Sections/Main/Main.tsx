import React from "react";
import {
  Container,
  Content,
  ContentContainer,
  HeadingText,
  HighlightText,
  SearchButton,
  BgContainer,
} from "./StyledMain";

import { PageSection } from "../../Global/StyledGlobal";
import Image from "next/image";

export const Main: React.FC = () => {
  return (
    <PageSection>
      <Container>
        <BgContainer>
          <Image
            src="/images/rns-bg.svg"
            alt="Robo Labs Icon"
            width={400}
            height={340}
            style={{
              width: "50vmax",
              height: "100%",
              opacity: 0.8,
            }}
          />
        </BgContainer>
        <ContentContainer>
          <Content>
            <HeadingText>
              Dont be known as 0xFffFFF0000000000000000000000000000D4FR
            </HeadingText>
            <HeadingText>
              Be known as <HighlightText>LEGEND.ROOT</HighlightText>
            </HeadingText>
            <SearchButton>Search Now</SearchButton>
          </Content>
        </ContentContainer>
      </Container>
    </PageSection>
  );
};

export default Main;
