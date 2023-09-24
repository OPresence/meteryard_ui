// client/_app.js
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import "../../src/layout/globals.css";
import "src/Scss/main.css";
import { createTheme } from "../theme/index";
function MyApp({ Component, pageProps }) {
  const theme = createTheme();
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div className="App">
      <Head>
        <meta name="description" content="" />
        <link rel="icon" href="" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
