import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexJustified = styled(Flex)`
  justify-content: space-between;
`;

export const FlexJustifiedBottom = styled(FlexJustified)`
  align-items: end;
`;

export const FlexCenter = styled(Flex)`
  justify-content: center;
`;

export const FlexRight = styled(Flex)`
  justify-content: right;
`;

export const RelativeContainer = styled.div`
  position: relative;
`;

export const VerticalDivider = styled.div`
  border-left: solid 1px var(--divider-color);
`;

export const HorizontalDivider = styled.div<{
  margin?: string;
  thickness?: string;
}>`
  width: 100%;
  height: ${({ thickness }) => thickness || "1px"};
  background-color: rgba(255, 255, 255, 0.25);
  ${({ margin }) => (margin ? `margin: ${margin} 0` : "")};
`;

export const PageSection = styled(FlexCenter)`
  width: 100%;
  background-color: var(--background-darkest);
`;

export const PageContent = styled.div`
  width: var(--page-width);
  padding: var(--md-padding);
`;

export const FlexPageContent = styled(FlexCenter)`
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
        grid-template-columns: repeat(12, 1fr);/
      `
      : ""};
  ${({ spancolumn }) => (spancolumn ? `grid-column: span ${spancolumn}` : "")};
  ${({ column }) => (column ? `grid-column: ${column}` : "")};
`;

export const Heading = styled.div`
  text-align: center;
  padding-bottom: 64px;
`;

export const BaseButton = styled.button`
  font-family: var(--default-font);
  font-weight: bold;
  font-size: var(--sm-text);
  padding: var(--xs-padding) var(--md-padding);
  background-color: var(--secondary);
  box-shadow: var(--shadow-1);
  border-radius: 4px;
  text-transform: uppercase;
  color: var(--background-darkest);

  &:hover {
    background-color: var(--primary);
    color: var(--contrast-text);
  }
`;

export const Button = styled(BaseButton)`
  font-size: var(--md-text);
  padding: 12px 24px;
  width: 250px;
`;

export const BaseFont = styled.p`
  font-size: var(--md-text);
  font-weight: 700;
  font-family: var(--default-font);
  line-height: normal;
`;

export const PageTitle = styled(BaseFont)`
  font-size: var(--xxl-text);
  text-transform: uppercase;

  @media only screen and (min-width: 1000px) {
    font-size: 48px;
  }
`;

export const PageSubTitle = styled(BaseFont)`
  font-size: var(--lg-text);
  font-weight: 200;

  @media only screen and (min-width: 1000px) {
    font-size: 24px;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
`;

export const SectionDivider = styled.div<{ direction?: string }>`
  border: solid 1px rgb(255, 255, 255, 0.25);
  max-width: 900px;
  width: 85vw;
  margin: 0 auto 128px auto;

  transform: ${({ direction }) =>
    direction === "to left up"
      ? "rotate(3.5deg)"
      : direction === "to right up"
      ? "rotate(-3.5deg)"
      : ""};
`;
