import React from "react";
import styled from "styled-components";
import { colors } from "../utils/theme";

// See: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

type AlignItems = "stretch" | "flex-start" | "flex-end" | "center" | "baseline";

type AlignContent =
  | "normal"
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch";

type AlignSelf =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";

type Size = "none" | "4" | "8" | "16" | "24" | "32";

type Space = "auto" | Size;

function calculateSize(size: Size) {
  if (size === "none") return;

  return `${size}px`;
}

function calculateSpace(space: Space) {
  if (space === "none") return;

  if (space === "auto") return "auto";

  return `${space}px`;
}

const StyledContainer = styled.div<{
  /* flex parent */
  $flexDirection: FlexDirection;
  $flexWrap: FlexWrap;
  $justifyContent: JustifyContent;
  $alignItems: AlignItems;
  $alignContent: AlignContent;
  $gap: Size;
  /* flex child */
  $flexGrow: number;
  $flexShrink: number;
  $flexBasis: string;
  $alignSelf: AlignSelf;
  /* margin */
  $m: Space;
  $mx: Space;
  $my: Space;
  $mt: Space;
  $mr: Space;
  $mb: Space;
  $ml: Space;
  /* padding */
  $p: Space;
  $px: Space;
  $py: Space;
  $pt: Space;
  $pr: Space;
  $pb: Space;
  $pl: Space;
  /* rest */
  $background?: keyof typeof colors;
}>`
  /* flex parent */
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  align-content: ${({ $alignContent }) => $alignContent};
  gap: ${({ $gap }) => calculateSize($gap)};
  /* flex child */
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  flex-shrink: ${({ $flexShrink }) => $flexShrink};
  flex-basis: ${({ $flexBasis }) => $flexBasis};
  align-self: ${({ $alignSelf }) => $alignSelf};
  /* margin */
  margin: ${({ $m }) => calculateSpace($m)};
  margin: ${({ $mx }) =>
    $mx !== "none" ? `0 ${calculateSpace($mx)}` : undefined};
  margin: ${({ $my }) =>
    $my !== "none" ? `${calculateSpace($my)} 0` : undefined};
  margin-top: ${({ $mt }) => calculateSpace($mt)};
  margin-right: ${({ $mr }) => calculateSpace($mr)};
  margin-bottom: ${({ $mb }) => calculateSpace($mb)};
  margin-left: ${({ $ml }) => calculateSpace($ml)};
  /* padding */
  padding: ${({ $p }) => calculateSpace($p)};
  padding: ${({ $px }) =>
    $px !== "none" ? `0 ${calculateSpace($px)}` : undefined};
  padding: ${({ $py }) =>
    $py !== "none" ? `${calculateSpace($py)} 0` : undefined};
  padding-top: ${({ $pt }) => calculateSpace($pt)};
  padding-right: ${({ $pr }) => calculateSpace($pr)};
  padding-bottom: ${({ $pb }) => calculateSpace($pb)};
  padding-left: ${({ $pl }) => calculateSpace($pl)};
  /* rest */
  width: 100%;
  max-width: 768px;
  background: ${({ $background }) =>
    $background ? colors[$background] : undefined};
`;

interface ContainerProps {
  // styled-components
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  children?: React.ReactNode;

  /**
   * This establishes the main-axis, thus defining the direction flex items are
   * placed in the flex container. Flexbox is (aside from optional wrapping) a
   * single-direction layout concept. Think of flex items as primarily laying
   * out either in horizontal rows or vertical columns.
   */
  direction?: FlexDirection;

  /**
   * By default, flex items will all try to fit onto one line. You can change
   * that and allow the items to wrap as needed with this property.
   */
  wrap?: FlexWrap;

  /**
   * This defines the alignment along the main axis. It helps distribute extra
   * free space leftover when either all the flex items on a line are
   * inflexible, or are flexible but have reached their maximum size. It also
   * exerts some control over the alignment of items when they overflow the
   * line.
   */
  justifyContent?: JustifyContent;

  /**
   * This defines the default behavior for how flex items are laid out along
   * the cross axis on the current line. Think of it as the justify-content
   * version for the cross-axis (perpendicular to the main-axis).
   */
  alignItems?: AlignItems;

  /**
   * This aligns a flex container’s lines within when there is extra space in
   * the cross-axis, similar to how justify-content aligns individual items
   * within the main-axis.
   *
   * Note: This property only takes effect on multi-line flexible containers,
   * where flex-wrap is set to either wrap or wrap-reverse). A single-line
   * flexible container (i.e. where flex-wrap is set to its default value,
   * no-wrap) will not reflect align-content.
   */
  alignContent?: AlignContent;

  /**
   * This explicitly controls the space between flex items. It applies that
   * spacing only between items not on the outer edges.
   *
   * The behavior could be thought of as a minimum gutter, as if the gutter is
   * bigger somehow (because of something like justify-content: space-between;)
   * then the gap will only take effect if that space would end up smaller.
   */
  gap?: Size;

  /**
   * TODO: if flex-wrap, apply to the row
   */
  // rowGap?: string;

  /**
   * TODO: if flex-wrap, apply to the column
   */
  // columnGap?: string;

  /**
   * This defines the ability for a flex item to grow if necessary. It accepts
   * a unitless value that serves as a proportion. It dictates what amount of
   * the available space inside the flex container the item should take up.
   *
   * If all items have flex-grow set to 1, the remaining space in the container
   * will be distributed equally to all children. If one of the children has a
   * value of 2, that child would take up twice as much of the space either one
   * of the others (or it will try, at least).
   *
   * Negative numbers are invalid.
   */
  flexGrow?: number;

  /**
   * This defines the ability for a flex item to shrink if necessary.
   *
   * Negative numbers are invalid.
   */
  flexShrink?: number;

  /**
   * This defines the default size of an element before the remaining space is
   * distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The
   * auto keyword means “look at my width or height property” (which was
   * temporarily done by the main-size keyword until deprecated). The content
   * keyword means “size it based on the item’s content” – this keyword isn’t
   * well supported yet, so it’s hard to test and harder to know what its
   * brethren max-content, min-content, and fit-content do.
   *
   * If set to 0, the extra space around content isn’t factored in. If set to
   * auto, the extra space is distributed based on its flex-grow value.
   */
  flexBasis?: string;

  /**
   * This allows the default alignment (or the one specified by align-items) to
   * be overridden for individual flex items.
   */
  alignSelf?: AlignSelf;

  // margin
  m?: Space;
  mx?: Space;
  my?: Space;
  mt?: Space;
  mr?: Space;
  mb?: Space;
  ml?: Space;

  // padding
  p?: Space;
  px?: Space;
  py?: Space;
  pt?: Space;
  pr?: Space;
  pb?: Space;
  pl?: Space;

  // color
  background?: keyof typeof colors;
}

function Container({
  // flex parent
  direction = "row",
  wrap = "nowrap",
  justifyContent = "flex-start",
  alignItems = "stretch",
  alignContent = "normal",
  gap = "none",
  // flex child
  flexGrow = 0,
  flexShrink = 1,
  flexBasis = "auto",
  alignSelf = "auto",
  // margin
  m = "none",
  mx = "none",
  my = "none",
  mt = "none",
  mr = "none",
  mb = "none",
  ml = "none",
  // padding
  p = "none",
  px = "none",
  py = "none",
  pt = "none",
  pr = "none",
  pb = "none",
  pl = "none",
  // rest
  background,
  children,
  ...props
}: ContainerProps) {
  return (
    <StyledContainer
      // flex parent
      $flexDirection={direction}
      $flexWrap={wrap}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $gap={gap}
      // flex child
      $flexGrow={flexGrow}
      $flexShrink={flexShrink}
      $flexBasis={flexBasis}
      $alignSelf={alignSelf}
      // margin
      $m={m}
      $mx={mx}
      $my={my}
      $mt={mt}
      $mr={mr}
      $mb={mb}
      $ml={ml}
      // padding
      $p={p}
      $px={px}
      $py={py}
      $pt={pt}
      $pr={pr}
      $pb={pb}
      $pl={pl}
      // rest
      $background={background}
      {...props}
    >
      {children}
    </StyledContainer>
  );
}

/**
 * Full width container
 */
export const FluidContainer = styled(Container)`
  max-width: 100%;
`;

export default Container;
