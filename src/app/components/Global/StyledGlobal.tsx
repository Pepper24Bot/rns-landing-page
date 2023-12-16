import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexJustified = styled(Flex)`
  justify-content: space-between;
`;

export const FlexCenter = styled(Flex)`
  justify-content: center;
`;

export const FlexRight = styled(Flex)`
  justify-content: right;
`;

export const HorizontalDivider = styled.div`
  height: calc(100% - 16px);
  border-left: solid 1px var(--divider-color);
`;

export const VerticalDivider = styled.div<{ padding?: string }>`
  width: 100%;
  border-bottom: solid 1px var(--divider-color);
  padding: ${({ padding }) => padding || 0};
`;

export const PageSection = styled(FlexCenter)`
  width: 100%;
  background-color: var(--background-darkest);
`;

export const PageContent = styled.div`
  width: var(--page-width);
  padding: var(--md-padding);
`;

export const Grid = styled.div<{
  column?: number;
  spancolumn?: number;
  container?: boolean;
}>`
  width: 100%;
  ${({ container }) =>
    container
      ? `
        display: grid;
        grid-template-columns: repeat(6, 1fr);/
      `
      : ""};
  ${({ spancolumn }) => (spancolumn ? `grid-column: span ${spancolumn}` : "")};
  ${({ column }) => (column ? `grid-column: ${column}` : "")};
`;

export const ButtonItem = styled.button`
  font-family: var(--default-font);
  font-weight: bold;
  font-size: var(--sm-text);
  padding: var(--xs-padding) var(--md-padding);
  background-color: var(--secondary);
  box-shadow: var(--shadow-1);
  border-radius: 2px;
  text-transform: uppercase;
  color: var(--background-darkest);

  &:hover {
    background-color: var(--primary);
    color: var(--contrast-text);
  }
`;

export const BaseFont = styled.p`
  font-size: var(--md-text);
  font-weight: bold;
  font-family: var(--default-font);
  line-height: normal;
`;

export const ImageContainer = styled.div`
  width: 50%;
`;
