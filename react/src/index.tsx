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
import { handlers } from "./utils/handlers";
import { GlobalStyle, theme } from "./utils/theme";

/**
 * URL for the graphql API, running in production returns a dummy secure URL as
 * all requests will be intercepted and handled by mock service worker. The
 * secure URL is required, as even though the the request is intercepted, some
 * browsers will block the site from running due to referencing an insecure
 * URL (such as http://localhost:4000 which is used for local development)
 */
const httpLink = createHttpLink({
  uri: import.meta.env.PROD
    ? "https://example.com"
    : import.meta.env.VITE_API_URL,
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

if (import.meta.env.VITE_APP_MOCKS === "true" || import.meta.env.PROD) {
  // See: https://mswjs.io/docs/getting-started/integrate/browser#using-homepage-property-in-packagejson
  if (window.location.pathname === `/dungeonist"`) {
    window.location.pathname = `/dungeonist/`;
  }

  // Skip login by manually setting a local storage auth token
  if (!localStorage.getItem("token")) {
    localStorage.setItem("token", "example");
  }

  const worker = setupWorker(...handlers);

  worker.start({
    ...(import.meta.env.PROD && {
      serviceWorker: {
        url: "/dungeonist/mockServiceWorker.js",
      },
    }),
  });
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
