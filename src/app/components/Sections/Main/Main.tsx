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
import { scrollIntoElement } from "@/app/global/util";

import Image from "next/image";

export const Main: React.FC = () => {
  return (
    <PageSection>
      <Container id="rns-page-01">
        <BgContainer>
          <Image
            src="/images/rns-bg-3.svg"
            alt="Robo Labs Icon"
            width={400}
            height={340}
            style={{
              width: "65vmax",
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
              Be known as <HighlightText>legend.root</HighlightText>
            </HeadingText>
            <SearchButton
              onClick={() => {
                scrollIntoElement("stay-in-the-loop");
              }}
            >
              Stay in the loop
            </SearchButton>
          </Content>
        </ContentContainer>
      </Container>
    </PageSection>
  );
};

export default Main;
