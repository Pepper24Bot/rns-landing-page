import React from "react";
import {
  Container,
  Heading,
  PartnerItem,
  PartnersSubTitle,
  PartnersTitle,
  PartnersGrid,
  ComingSoon,
} from "./StyledPartners";
import { PARTNERS } from "@/app/global/constants";
import { Button, FlexCenter } from "../../Global/StyledGlobal";

import Image from "next/image";

export const Partners: React.FC = () => {
  return (
    <Container>
      <div>
        <Heading>
          <PartnersTitle>Partners Platforms</PartnersTitle>
          <PartnersSubTitle>
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
                {partner.path ? (
                  <Image
                    src={partner.path}
                    alt={partner.label}
                    width={200}
                    height={300}
                  />
                ) : (
                  <ComingSoon>More Coming Soon!</ComingSoon>
                )}
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
