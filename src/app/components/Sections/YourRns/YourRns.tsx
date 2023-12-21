import React from "react";
import {
  Container,
  ImageContainer,
  RnsTitle,
  BgContainer,
  Content,
  SearchButton,
} from "./StyledYourRns";
import { FlexCenter } from "../../Global/StyledGlobal";

import Image from "next/image";

export const YourRns: React.FC = () => {
  return (
    <Container>
      <BgContainer>
        <Image
          src="/images/rns-bg-2.svg"
          alt="Robo Labs Icon"
          width={400}
          height={340}
          style={{
            width: "50vmax",
            opacity: 0.5,
          }}
        />
      </BgContainer>
      <Content>
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
              border: "solid 2px rgb(255, 255, 255, 0.2)",
              boxShadow: "0px 8px 8px 16px rgba(0, 0, 0, 1)",
            }}
          />
        </ImageContainer>
        <FlexCenter className="slide-up reveal">
          <SearchButton>Search Now</SearchButton>
        </FlexCenter>
      </Content>
    </Container>
  );
};

export default YourRns;
