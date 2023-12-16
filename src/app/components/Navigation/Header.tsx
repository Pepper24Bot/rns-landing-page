import React, { useState } from "react";
import { NavigationBar, Container, ToolBar } from "./StyledNavigation";
import { ButtonItem } from "../Global/StyledGlobal";

import Image from "next/image";

export const Header: React.FC = () => {
  const [isTop, setIsTop] = useState(true);

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      setIsTop((this as any).pageYOffset === 0);
    };
  }

  return (
    <Container isTop={isTop}>
      <NavigationBar>
        <Image src="/images/rns.svg" alt="RNS Icon" width={450} height={60} />
        <ToolBar>
          <ButtonItem>Log In</ButtonItem>
        </ToolBar>
      </NavigationBar>
    </Container>
  );
};

export default Header;
