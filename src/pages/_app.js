import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import "../Scss/main.css";
import "../Scss/main.scss";
import { createTheme } from "../theme/index";
import { ToastContainer } from "react-toastify";
import { Box } from "@mui/material";
import AuthContext from "../context/Auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageLoading from "../component/PageLoading";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const theme = createTheme();
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  // useEffect(() => {
  //   const isAuthenticated = !!sessionStorage.getItem("token");
  //   if (
  //     router.pathname !== "/" &&
  //     router.pathname !== "/" &&
  //     !isAuthenticated
  //   ) {
  //     router.push("/");
  //   }
  // }, [router.pathname]);
  // useEffect(() => {
  //   const startLoading = () => {
  //     setLoading(true);
  //   };
  //   const stopLoading = () => {
  //     setLoading(false);
  //   };

  //   router.events.on("routeChangeStart", startLoading);
  //   router.events.on("routeChangeComplete", stopLoading);
  //   router.events.on("routeChangeError", stopLoading);

  //   return () => {
  //     router.events.off("routeChangeStart", startLoading);
  //     router.events.off("routeChangeComplete", stopLoading);
  //     router.events.off("routeChangeError", stopLoading);
  //   };
  // }, []);
  return (
    <div className="App" style={{ background: "#fff" }}>
      <Box>
        {/* <Head> */}
        {/* <meta name="description" content="" /> */}
        {/* <link rel="icon" href="" /> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" as="font" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"   /> */}
        {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
            rel="stylesheet"
          ></link> */}
        {/* </Head> */}
        {/* {!loading ? (
          <PageLoading />
        ) : (
          <>
          </>
        )} */}
        {!loading && isClient && (
          <ThemeProvider theme={theme}>
            <AuthContext>
              <SessionProvider session={session}>
                {getLayout(<Component {...pageProps} />)}
              </SessionProvider>
            </AuthContext>
            <ToastContainer />
          </ThemeProvider>
        )}
      </Box>
    </div>
  );
}

export default MyApp;
