import React from "react";
import { PageSection } from "../../Global/StyledGlobal";
import {
  Avatar,
  Container,
  DesktopLayout,
  FeatureItem,
  LeftContent,
  LineConnector,
  MobileLayout,
  RightContent,
  SubTitle,
  Table,
  Title,
} from "./StyledSteps";
import { STEPS } from "@/app/global/constants";

export const Steps: React.FC = () => {
  return (
    <PageSection>
      <Container>
        <DesktopLayout>
          {STEPS.map((step, index) => {
            return (
              <FeatureItem key={step.heading}>
                <LeftContent
                  isLeft={(index + 1) % 2 === 0}
                  className={`slide-right-delay-${index + 1} reveal`}
                >
                  <Title>{step.heading}</Title>
                  <SubTitle>{step.subheading}</SubTitle>
                </LeftContent>
                <div className={`slide-up-delay-${index + 1} reveal`}>
                  <Avatar>{index + 1}</Avatar>
                  <LineConnector isHidden={index !== STEPS.length - 1} />
                </div>
                <RightContent
                  isRight={(index + 1) % 2 !== 0}
                  className={`slide-left-delay-${index + 1} reveal`}
                >
                  <Title>{step.heading}</Title>
                  <SubTitle>{step.subheading}</SubTitle>
                </RightContent>
              </FeatureItem>
            );
          })}
        </DesktopLayout>
        <MobileLayout>Mobile Layout</MobileLayout>
      </Container>
    </PageSection>
  );
};

export default Steps;
