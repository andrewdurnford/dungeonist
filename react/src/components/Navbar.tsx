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
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Container = styled.div`
  max-width: 1024px;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;

  > * + * {
    margin-left: 1rem;
  }
`;

const A = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkButton = styled(Button).attrs({ variant: "secondary" })`
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  /* TODO: css should not be reset */
  text-decoration: none;
  padding: 0.25em 0.5em;
  border-radius: 4px;

  &:hover {
    text-decoration: underline;
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
            <List>
              <li>
                <A to="/">Home</A>
              </li>
              <li>
                <A to="/characters">Characters</A>
              </li>
            </List>
            <List>
              <li>
                <A to="/user">Settings</A>
              </li>
              <li>
                <LinkButton
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  Log out
                </LinkButton>
              </li>
            </List>
          </>
        ) : (
          <>
            <List>
              <li>
                <A to="/">Home</A>
              </li>
              <li>
                <A to="/about"></A>
              </li>
            </List>
            <List>
              <li>
                <A to="/login">Log in</A>
              </li>
              <li>
                <LinkButton as={Link} to="/signup">
                  Sign up
                </LinkButton>
              </li>
            </List>
          </>
        )}
      </Container>
    </Nav>
  );
}

export default Navbar;
