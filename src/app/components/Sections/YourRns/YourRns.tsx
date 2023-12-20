import React from "react";
import { Container, ImageContainer, RnsTitle } from "./StyledYourRns";
import { Button, FlexCenter } from "../../Global/StyledGlobal";

import Image from "next/image";

export const YourRns: React.FC = () => {
  return (
    <Container>
      <div>
        <RnsTitle className="slide-up reveal">
          What does your RNS say about you?
        </RnsTitle>
        <ImageContainer className="slide-up reveal">
          <Image
            src="/images/legend-root.svg"
            alt="Your-RNS"
            width={250}
            height={300}
            style={{
              borderRadius: "16px",
              border: "solid 1px rgb(255, 255, 255, 0.2)",
            }}
          />
        </ImageContainer>
        <FlexCenter className="slide-up reveal">
          <Button>Search Now</Button>
        </FlexCenter>
      </div>
    </Container>
  );
};

export default YourRns;
