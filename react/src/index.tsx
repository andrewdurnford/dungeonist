import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { setupWorker } from "msw";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import { AuthProvider } from "./hooks/useAuth";
import { handlers } from "./mocks/handlers";
import { GlobalStyle, theme } from "./utils/theme";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      ...(token && { authorization: `Bearer ${token}` }),
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

if (import.meta.env.VITE_APP_MOCKS === "true") {
  localStorage.setItem("token", "jwt");
  const worker = setupWorker(...handlers);
  worker.start();
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </AuthProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
