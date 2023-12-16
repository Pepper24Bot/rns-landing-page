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
  StepSubTitle,
  StepTitle,
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
                  <StepTitle>{step.heading}</StepTitle>
                  <StepSubTitle>{step.subheading}</StepSubTitle>
                </LeftContent>
                <div className={`slide-up-delay-${index + 1} reveal`}>
                  <Avatar>{index + 1}</Avatar>
                  <LineConnector isHidden={index !== STEPS.length - 1} />
                </div>
                <RightContent
                  isRight={(index + 1) % 2 !== 0}
                  className={`slide-left-delay-${index + 1} reveal`}
                >
                  <StepTitle>{step.heading}</StepTitle>
                  <StepSubTitle>{step.subheading}</StepSubTitle>
                </RightContent>
              </FeatureItem>
            );
          })}
        </DesktopLayout>
        <MobileLayout>
          {STEPS.map((step, index) => {
            return (
              <FeatureItem key={step.heading}>
                <div className={`slide-up-delay-${index + 1} reveal`}>
                  <Avatar>{index + 1}</Avatar>
                  <LineConnector isHidden={index !== STEPS.length - 1} />
                </div>
                <RightContent
                  isRight
                  className={`slide-left-delay-${index + 1} reveal`}
                >
                  <StepTitle>{step.heading}</StepTitle>
                  <StepSubTitle>{step.subheading}</StepSubTitle>
                </RightContent>
              </FeatureItem>
            );
          })}
        </MobileLayout>
      </Container>
    </PageSection>
  );
};

export default Steps;
