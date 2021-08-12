import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "../store";

const SMain = styled.main`
  width: 1280px;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const SContent = styled.div`
  min-width: 960px;
`;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <Provider store={store}>
        <SMain>
          <SContent>
            <Component {...pageProps} />
          </SContent>
        </SMain>
      </Provider>
    </ThemeProvider>
  );
}
export default MyApp
