import React from "react";
import { Container, ImageContainer, RnsTitle } from "./StyledYourRns";
import {
  Button,
  FlexCenter,
  HorizontalDivider,
} from "../../Global/StyledGlobal";

import Image from "next/image";

export const YourRns: React.FC = () => {
  return (
    <Container>
      <div>
        <RnsTitle>What does your RNS say about you?</RnsTitle>
        <ImageContainer>
          <Image
            src="/images/legend-root.svg"
            alt="Your-RNS"
            width={300}
            height={300}
          />
        </ImageContainer>
        <FlexCenter>
          <Button>Search Now</Button>
        </FlexCenter>
      </div>
    </Container>
  );
};

export default YourRns;
