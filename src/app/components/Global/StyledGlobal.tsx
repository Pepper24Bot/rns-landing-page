import {
  Tooltip as MuiTooltip,
  TooltipProps,
  tooltipClasses,
} from "@mui/material";
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
  background-color: var(--primary);
  box-shadow: var(--shadow-1);
  border-radius: 16px;
  border: solid 1px rgb(255, 255, 255, 0.15);
  text-transform: uppercase;
  color: var(--contrast-text);

  &:hover {
    background-color: var(--primary-dark);
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
  font-size: var(--xl-text);
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
  width: 60%;
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

export const IconLink = styled.a`
  margin-right: 5px;
  border: solid 1px rgb(194, 24, 91, 0.5);
  border-radius: 16px;
  padding: 9px 12px;
  background-color: var(--primary-darkest);
  filter: drop-shadow(0 0 4px rgba(84, 6, 36, 0.5));

  &:hover {
    background-color: rgb(84, 6, 36, 0.5);
  }
`;

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#0C0C0C",
    padding: "12px",
    fontSize: "14px",
    filter: `drop-shadow(0px 1px 1px rgb(0, 0, 0, 0.5))`,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#0C0C0C",
    fontSize: "16px",
    filter: `drop-shadow(-1px 0px 0px rgb(0, 0, 0, 0.25))`,
  },
}));
