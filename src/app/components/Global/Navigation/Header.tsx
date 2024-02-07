import React, { useState } from "react";
import {
  NavigationBar,
  Container,
  DesktopLayout,
  MobileLayout,
  Menu,
  MenuLink,
  MenuContainer,
  VerticalDivider,
} from "./StyledNavigation";
import { BaseButton, ImageContainer, IconLink } from "../StyledGlobal";

import Image from "next/image";

export const Header: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              src="/images/rns-logo-1.png"
              alt="RNS Icon"
              width={350}
              height={30}
            />
          </ImageContainer>
          <DesktopLayout>
            <IconLink
              href="https://twitter.com/RootNameService"
              target="_blank"
            >
              <i className="fa-brands fa-discord fa-lg" />
            </IconLink>
            <IconLink
              href="https://twitter.com/RootNameService"
              target="_blank"
            >
              <i className="fa-brands fa-x-twitter fa-lg" />
            </IconLink>
            <VerticalDivider />
            <BaseButton>Log In</BaseButton>
          </DesktopLayout>
          <MobileLayout>
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? (
                <i className="fa-solid fa-bars-staggered fa-xl"></i>
              ) : (
                <i className="fa-solid fa-bars fa-xl" />
              )}
            </button>
            {isMenuOpen && (
              <MenuContainer
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <Menu>
                  <MenuLink
                    divider
                    href="https://twitter.com/RootNameService"
                    target="_blank"
                  >
                    Discord
                  </MenuLink>
                  <MenuLink
                    divider
                    href="https://twitter.com/RootNameService"
                    target="_blank"
                  >
                    Twitter
                  </MenuLink>
                  <MenuLink
                    href="https://twitter.com/RootNameService"
                    target="_blank"
                  >
                    Login
                  </MenuLink>
                </Menu>
              </MenuContainer>
            )}
          </MobileLayout>
        </NavigationBar>
      </Container>
    </div>
  );
};

export default Header;
