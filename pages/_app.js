import dynamic from "next/dynamic";
import reset from "styled-reset";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "../styles/globals.css";
import { LINE_HEIGHT } from "../store";
// Import the styles provided by the react-pdf-viewer packages
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const GlobalStyle = createGlobalStyle`
    ${reset}
    letter-spacing: 0.12em;
    p {
        white-space: pre-wrap;
        line-height: ${LINE_HEIGHT}%;
    }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
