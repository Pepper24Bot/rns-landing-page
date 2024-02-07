"use client";

import styled from "styled-components";
import Main from "../components/Sections/Main/Main";
import Features from "../components/Sections/Features/Features";
import Steps from "../components/Sections/Steps/Steps";
import Partners from "../components/Sections/Partners/Partners";
import YourRns from "../components/Sections/YourRns/YourRns";
import FrequentlyAskedQuestions from "../components/Sections/FAQ/Faq";
import Transaction from "../components/Sections/SendAndReceive/Transaction";
import RootWallet from "../components/Sections/RootWallet/RootWallet";

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
      <Transaction />
      <Steps />
      <RootWallet />
      <Partners />
      <YourRns />
      <FrequentlyAskedQuestions />
    </Container>
  );
}
