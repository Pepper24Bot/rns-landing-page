import React from "react";
import {
  Container,
  ImageContainer,
  RnsTitle,
  BgContainer,
  Content,
  SearchButton,
} from "./StyledYourRns";
import { FlexCenter, Tooltip } from "../../Global/StyledGlobal";

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
        <RnsTitle className="slide-up-delay-1 reveal">
          What does your RNS say about you?
        </RnsTitle>
        <ImageContainer className="slide-up-delay-2 reveal">
          <Image
            src="/images/rns-nft.gif"
            alt="Your-RNS"
            width={275}
            height={400}
            style={{
              borderRadius: "16px",
              // border: "solid 1px rgb(255, 255, 255, 0.55)",
              boxShadow: "0px 0px 24px 8px rgba(0, 0, 0, 1)",
            }}
          />
        </ImageContainer>
        <FlexCenter className="slide-up reveal">
          <Tooltip title="Coming soon!" arrow>
            <SearchButton>Search Now</SearchButton>
          </Tooltip>
        </FlexCenter>
      </Content>
    </Container>
  );
};

export default YourRns;
