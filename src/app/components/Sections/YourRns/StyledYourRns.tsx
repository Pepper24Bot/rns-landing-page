import styled from "styled-components";
import { FlexCenter, PageTitle } from "../../Global/StyledGlobal";

export const Container = styled(FlexCenter)`
  background-color: var(--background-darker);
  padding: 64px var(--lg-padding);
  width: 100%;
  min-height: 100vh;
`;

export const RnsTitle = styled(PageTitle)`
  max-width: 600px;
  text-align: center;
`;

export const ImageContainer = styled(FlexCenter)`
  padding: 72px 0;
  box-shadow: var(--shadow-1);
`;
