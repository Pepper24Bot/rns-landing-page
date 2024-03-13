import React from "react";
import {
  Container,
  PartnerItem,
  PartnersSubTitle,
  PartnersTitle,
  PartnersGrid,
  ComingSoon,
  Content,
} from "./StyledPartners";
import { PARTNERS } from "@/app/global/constants";
import { Button, FlexCenter, Heading } from "../../Global/StyledGlobal";

import Image from "next/image";

export const Partners: React.FC = () => {
  return (
    <Container>
      <div>
        <Heading>
          <PartnersTitle className="slide-left-delay-1 reveal">
            Partner Platforms
          </PartnersTitle>
          <PartnersSubTitle className="slide-right-delay-2 reveal">
            The following partner platforms support RNS
          </PartnersSubTitle>
        </Heading>
        <PartnersGrid container>
          {PARTNERS.map((partner, index) => {
            return (
              <PartnerItem
                key={partner.label}
                spancolumn={3}
                className={`slide-up-delay-${index + 1} reveal`}
              >
                <a href={partner.link} target="_blank">
                  <Content>
                    {partner.path ? (
                      <Image
                        src={partner.path}
                        alt={partner.label}
                        width={225}
                        height={300}
                      />
                    ) : (
                      <ComingSoon>More Coming Soon!</ComingSoon>
                    )}
                  </Content>
                </a>
              </PartnerItem>
            );
          })}
        </PartnersGrid>
        <FlexCenter>
          <Button>Become A Partner</Button>
        </FlexCenter>
      </div>
    </Container>
  );
};

export default Partners;
