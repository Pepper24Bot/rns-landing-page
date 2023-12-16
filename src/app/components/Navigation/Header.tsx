import React, { useState } from "react";
import { NavigationBar, Container, ToolBar } from "./StyledNavigation";
import { BaseButton, ImageContainer } from "../Global/StyledGlobal";

import Image from "next/image";

export const Header: React.FC = () => {
  const [isTop, setIsTop] = useState(true);

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      setIsTop((this as any).pageYOffset === 0);
    };
  }

  return (
    <div>
      <Container isTop={isTop}>
        <NavigationBar>
          <ImageContainer>
            <Image
              src="/images/rns.svg"
              alt="RNS Icon"
              width={450}
              height={60}
            />
          </ImageContainer>
          <ToolBar>
            <BaseButton>Log In</BaseButton>
          </ToolBar>
        </NavigationBar>
      </Container>
    </div>
  );
};

export default Header;
