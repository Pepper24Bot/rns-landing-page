import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  IconContainer,
  QuestionItem,
  Questions,
  SubTitle,
} from "./StyledFaq";
import { PageSection, PageTitle } from "../../Global/StyledGlobal";
import { FAQ } from "@/app/global/constants";

export const FrequentlyAskedQuestions: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean[]>([false, false, false]);
  const [contentHeights, setContentHeights] = useState<number[]>([0, 0, 0]);

  const getTransitionClass = (index: number) => {
    return (index + 1) % 2 === 0
      ? `slide-right-delay-${index + 1} reveal`
      : `slide-left-delay-${index + 1} reveal`;
  };

  const getScrollHeight = (index: number) => {
    const element = document.getElementById(`faq-content-${index}`);
    return element?.scrollHeight || 0;
  };

  useEffect(() => {
    const heights = [...contentHeights];
    contentHeights?.forEach((_, index) => {
      heights[index] = getScrollHeight(index);
    });

    setContentHeights(heights);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageSection>
      <Container>
        <PageTitle>FAQ</PageTitle>
        <Questions>
          {FAQ.map((faq, index) => {
            return (
              <QuestionItem
                className={getTransitionClass(index)}
                key={faq.heading}
                isFirst={index === 0}
                onClick={() => {
                  // avoid direct mutation
                  const collapsedPanels = [...isActive];
                  collapsedPanels[index] = !isActive[index];
                  setIsActive(collapsedPanels);
                }}
              >
                <IconContainer>
                  {isActive[index] ? (
                    <i className="fa-solid fa-chevron-down" />
                  ) : (
                    <i className="fa-solid fa-chevron-right" />
                  )}
                </IconContainer>
                <div>
                  <Title>{faq.heading}</Title>
                  <SubTitle
                    isShowing={isActive[index]}
                    contentHeight={`${contentHeights[index]}px`}
                    id={`faq-content-${index}`}
                  >
                    {faq.subheading}
                  </SubTitle>
                </div>
              </QuestionItem>
            );
          })}
        </Questions>
      </Container>
    </PageSection>
  );
};

export default FrequentlyAskedQuestions;
