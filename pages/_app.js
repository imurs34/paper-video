import dynamic from "next/dynamic";
import reset from "styled-reset";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import '../styles/globals.css';
import { LINE_HEIGHT } from "../store";

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
