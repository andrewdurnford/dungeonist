import { createContext, useContext, useMemo, useState } from "react";
import { User } from "../utils/graphql";

interface Login {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

interface AuthContextType {
  user?: User | null;
  token?: string | null;
  isLoggedIn: boolean;
  login: (data: Login) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

interface Props {
  children: React.ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  function login({ token, user }: Login) {
    setUser(user);
    setToken(token);
    localStorage.setItem("token", token);
  }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  }

  const value = useMemo(
    () => ({
      user,
      token,
      isLoggedIn: !!token,
      login,
      logout,
    }),
    [user, token, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
