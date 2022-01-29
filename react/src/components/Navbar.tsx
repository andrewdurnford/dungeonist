import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";
import { useMeQuery } from "../utils/graphql";
import Button from "./Button";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const Container = styled.div`
  flex: 1;
  max-width: 768px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;

  /* TODO: refactor to use flex gap fallback on safari */
  gap: 1rem;
`;

const NavLink = styled(Link)`
  display: inline-block;

  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: 4px;
  padding: 0.25rem 0;

  font-size: 16px;
  line-height: 1.5;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.gray200};
    border-color: ${({ theme }) => theme.colors.gray200};
  }
`;

const NavButton = styled(Button).attrs({ variant: "secondary" })`
  /* Override color to white */
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};

  /* TODO: css should not be overriden by 'as={Link}' */
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 3px 8px;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  &:hover {
    text-decoration: underline;
    background: none;
    color: ${({ theme }) => theme.colors.gray200};
    border-color: ${({ theme }) => theme.colors.gray200};
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const { data, loading } = useMeQuery();

  if (loading) return <p>Loading...</p>;

  return (
    <Nav>
      <Container>
        {isLoggedIn ? (
          <>
            <NavLink to="/">Dungeonist</NavLink>
            <NavList>
              <li>
                <NavLink to="/characters">Characters</NavLink>
              </li>
              <li>
                <NavButton
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  Log out
                </NavButton>
              </li>
            </NavList>
          </>
        ) : (
          <>
            <NavLink to="/">Dungeonist</NavLink>
            <NavList>
              <li>
                <NavLink to="/login">Log in</NavLink>
              </li>
              <li>
                <NavButton as={Link} to="/signup">
                  Sign up
                </NavButton>
              </li>
            </NavList>
          </>
        )}
      </Container>
    </Nav>
  );
}

export default Navbar;
