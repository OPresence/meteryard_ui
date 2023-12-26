import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import "src/layout/globals.css";
import { createTheme } from "../theme/index";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  const theme = createTheme();
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div className="App">
      <Head>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
