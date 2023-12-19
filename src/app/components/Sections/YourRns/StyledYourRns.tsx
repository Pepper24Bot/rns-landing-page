import styled from "styled-components";
import { FlexCenter, Title } from "../../Global/StyledGlobal";

export const Container = styled(FlexCenter)`
  background-color: var(--background-darker);
  padding: 64px 32px;
  width: 100%;
  min-height: 100vh;
`;

export const RnsTitle = styled(Title)`
  max-width: 600px;
  text-align: center;
`;

export const ImageContainer = styled(FlexCenter)`
  padding: 72px 0;
`;
