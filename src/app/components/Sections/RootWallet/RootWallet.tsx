import React from "react";
import { Container, Period, SubTitle, Title } from "./StyledRootWallet";
import {
  FlexCenter,
  ImageContainer,
  PageSection,
} from "../../Global/StyledGlobal";

import Image from "next/image";

export const RootWallet: React.FC = () => {
  return (
    <PageSection>
      <FlexCenter>
        <Container>
          <div className="slide-left-delay-1 reveal">
            <Period>.</Period>
            <Title>root</Title>
          </div>
          <div className="slide-right-delay-2 reveal">
            <ImageContainer>
              <Image
                src="/icons/wallet.svg"
                alt="Your-RNS"
                width={115}
                height={100}
                style={{
                  marginBottom: "24px",
                  width: "15vw",
                  maxWidth: "115px",
                }}
              />
            </ImageContainer>
            <SubTitle>
              Your .root extension is used to easily identify your FuturePass
              wallet address and act as your identity across the open metaverse
            </SubTitle>
          </div>
        </Container>
      </FlexCenter>
    </PageSection>
  );
};

export default RootWallet;
