import styled from "styled-components";
import {
  BaseButton,
  Flex,
  PageContent,
  RelativeContainer,
} from "../../Global/StyledGlobal";

export const Container = styled(PageContent)`
  min-height: calc(100vh - 100px);
  padding: 128px var(--lg-padding) 32px var(--lg-padding);
`;

export const TransactionCard = styled.div`
  max-width: 600px;
  width: 100%;
  border: solid 1px rgb(255, 255, 255, 0.2);
  border-radius: 8px;
`;

export const CardHeader = styled(Flex)`
  padding: 24px;
  border-bottom: solid 1px rgb(255, 255, 255, 0.2);
`;

export const CardContent = styled.div`
  padding: 24px 32px;
`;

export const CardText = styled.p`
  font-size: 18px;
  font-weight: 200;
  padding: 2px 0;
`;

export const Field = styled(RelativeContainer)`
  padding: 8px 0;
`;

export const InputField = styled.input.attrs(() => ({
  required: true,
}))<{ isActive?: boolean }>`
  background-color: transparent;
  border: solid 1px rgb(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 16px;
  margin: 8px 0 4px 0;
  width: 100%;

  &::placeholder {
    opacity: 0.5;
  }
`;

export const InputLabel = styled(CardText)`
  font-size: 16px;
  padding-bottom: 8px;
  opacity: 0.5;

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const InputPlaceholder = styled.label<{ isActive?: boolean }>`
  position: absolute;
  left: 8px;
  color: rgb(255, 255, 255, 0.5);
  font-size: 12px;
  padding: 0 8px;
  background-color: var(--background-darkest);

  ${({ isActive }) => (isActive ? ` display: block` : "display: none")};
`;

export const InputSubLabel = styled(CardText)`
  font-size: 14px;
  font-weight: 700;
  padding: 0;
  color: var(--contrast-text);
`;

export const Label = styled(CardText)`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.5;
`;

export const Value = styled(CardText)`
  opacity: 0.8;
`;

export const SendIcon = styled.i`
  padding-right: 16px;
`;

export const SendButton = styled(BaseButton)<{ disabled?: boolean }>`
  border-radius: 24px;
  text-transform: capitalize;

  ${({ disabled }) =>
    disabled ? `background-color: var(--background-main)` : ""};
`;

export const CancelButton = styled(SendButton)`
  background-color: transparent;
  color: var(--contrast-text);

  &:hover {
    background-color: transparent;
    color: var(--primary);
  }
`;
