import React from "react";
import {
  Container,
  Content,
  HeadingText,
  HighlightText,
  SearchButton,
} from "./StyledMain";

import { PageSection } from "../../Global/StyledGlobal";

export const Main: React.FC = () => {
  return (
    <PageSection>
      <Container>
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
