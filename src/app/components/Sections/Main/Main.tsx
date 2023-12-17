import React from "react";
import {
  Container,
  Content,
  HeadingText,
  HighlightText,
  SearchButton,
} from "./StyledMain";

import { BgContainer, PageSection } from "../../Global/StyledGlobal";
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
              width: "75vmax",
              height: "100%",
              opacity: 0.75,
            }}
          />
        </BgContainer>
        <Content>
          <HeadingText>
            Dont be known as 0xFffFFF0000000000000000000000000000D4FR
          </HeadingText>
          <HeadingText>
            Be known as <HighlightText>Legend.ROOT</HighlightText>
          </HeadingText>
          <SearchButton>Search Now</SearchButton>
        </Content>
      </Container>
    </PageSection>
  );
};

export default Main;
