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
import { BaseButton, ImageContainer, IconLink, Tooltip } from "../StyledGlobal";
import { scrollIntoElement } from "@/app/global/util";

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
        <NavigationBar id="navigation-bar">
          <ImageContainer
            onClick={() => {
              scrollIntoElement("rns-page-01");
            }}
          >
            <Image
              src="/images/rns-logo-1.png"
              alt="RNS Icon"
              width={350}
              height={30}
              style={{
                cursor: "pointer",
              }}
            />
          </ImageContainer>
          <DesktopLayout>
            <Tooltip title="Coming soon!" arrow>
              <IconLink>
                <i className="fa-brands fa-discord fa-lg" />
              </IconLink>
            </Tooltip>
            <IconLink
              href="https://twitter.com/RootNameService"
              target="_blank"
            >
              <i className="fa-brands fa-x-twitter fa-lg" />
            </IconLink>
            <VerticalDivider />
            <Tooltip title="Coming soon!" arrow>
              <BaseButton>Log In</BaseButton>
            </Tooltip>
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
                  <Tooltip title="Coming Soon!" arrow>
                    <MenuLink
                      divider
                      href="https://twitter.com/RootNameService"
                      target="_blank"
                    >
                      Discord
                    </MenuLink>
                  </Tooltip>
                  <MenuLink
                    divider
                    href="https://twitter.com/RootNameService"
                    target="_blank"
                  >
                    Twitter
                  </MenuLink>
                  <Tooltip title="Coming Soon!" arrow>
                    <MenuLink
                      href="https://twitter.com/RootNameService"
                      target="_blank"
                    >
                      Login
                    </MenuLink>
                  </Tooltip>
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
