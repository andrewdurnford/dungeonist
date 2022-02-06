import {
  Link as BaseLink,
  LinkProps,
  NavLink as BaseNavLink,
  NavLinkProps,
} from "react-router-dom";
import styled from "styled-components";
import Text, { TextProps } from "./Text";

const ACTIVE_CLASS = "active";

export const StyledLink = styled(Text).attrs({
  forwardedAs: BaseLink,
})<LinkProps>`
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledNavLink = styled(StyledLink).attrs({
  forwardedAs: BaseNavLink,
})<NavLinkProps>`
  &.${ACTIVE_CLASS} {
    font-weight: 600;
    text-decoration: underline;
  }
`;

/**
 * Link is a styled react-router Link. The 'to' prop
 * will redirect relative to the react-router path, the
 * 'href' prop will redirect externally like a normal
 * <a> element.
 */
export const Link = ({ children, ...props }: TextProps & LinkProps) => (
  <StyledLink {...props}>{children}</StyledLink>
);

/**
 * NavLink is the same as a react-router Link,
 * but it displays an 'active' class if the route
 * matches the 'to' prop.
 */
export const NavLink = ({ children, ...props }: TextProps & NavLinkProps) => {
  return (
    <StyledNavLink
      // If the URL path matches the 'to' prop, then apply the active
      // class to the component so it can be styled differently.
      // TODO: this should NOT be causing a type error
      // @ts-ignore
      className={({ isActive }) => (isActive ? ACTIVE_CLASS : "")}
      {...props}
    >
      {children}
    </StyledNavLink>
  );
};

export const Tab = styled(NavLink)`
  padding: 11.5px 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
