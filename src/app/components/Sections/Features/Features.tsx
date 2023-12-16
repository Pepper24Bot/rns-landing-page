import React from "react";

import Image from "next/image";

import { Grid, ImageContainer, PageSection } from "../../Global/StyledGlobal";
import {
  FeatureContext,
  FeatureItem,
  FeatureTitle,
  LeftPanel,
  RightPanel,
} from "./StyledFeatures";
import { FEATURES } from "@/app/global/constants";

export const Features: React.FC = () => {
  return (
    <PageSection>
      <Grid container>
        <LeftPanel spancolumn={2}>
          <div>
            <FeatureContext className="slide-left reveal">
              Connect your
            </FeatureContext>
            <ImageContainer className="slide-right reveal">
              <Image
                src="/images/rns-logo.svg"
                alt="RNS Icon"
                width={240}
                height={110}
              />
            </ImageContainer>
            <FeatureContext className="slide-left reveal">
              to your FuturePass
            </FeatureContext>
          </div>
        </LeftPanel>
        <RightPanel spancolumn={4}>
          <div>
            {FEATURES.map((feature, index) => {
              return (
                <FeatureItem
                  key={feature.title}
                  className={`slide-right-delay-${index + 1} reveal`}
                >
                  <FeatureTitle>{feature.title}</FeatureTitle>
                </FeatureItem>
              );
            })}
          </div>
        </RightPanel>
      </Grid>
    </PageSection>
  );
};

export default Features;
