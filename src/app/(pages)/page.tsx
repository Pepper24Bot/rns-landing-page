"use client";

import styled from "styled-components";
import Main from "../components/Sections/Main/Main";
import Features from "../components/Sections/Features/Features";
import Steps from "../components/Sections/Steps/Steps";
import Partners from "../components/Sections/Partners/Partners";
import YourRns from "../components/Sections/YourRns/YourRns";
import FrequentlyAskedQuestions from "../components/Sections/FAQ/Faq";

const Container = styled.div`
  padding-top: 100px;
`;

export default function Home() {
  const revealSection = () => {
    const revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach((element) => {
      var windowHeight = window?.innerHeight;
      var elementTop = element.getBoundingClientRect().top;
      var elementVisible = 25;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  };

  const eventListener = () => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", revealSection);
    }
  };

  eventListener();

  return (
    <Container>
      <Main />
      <Features />
      <Steps />
      <Partners />
      <YourRns />
      <FrequentlyAskedQuestions />
    </Container>
  );
}
