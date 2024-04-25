import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import "src/layout/globals.css";
import { createTheme } from "../theme/index";
import { ToastContainer } from "react-toastify";
import AuthContext from "../context/Auth";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const theme = createTheme();
  const router = useRouter();

  const getLayout = Component.getLayout || ((page) => page);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    // Check if user is authenticated, e.g., by checking a token in localStorage or cookies
    const isAuthenticated = !!sessionStorage.getItem("token");

    // If the route requires authentication and the user is not authenticated, redirect to login page
    if (
      router.pathname !== "/" && // Exclude login page from redirection loop
      router.pathname !== "/" && // Exclude signup page from redirection loop
      !isAuthenticated
    ) {
      router.push("/");
    }
  }, [router.pathname]);
  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
    };
    const stopLoading = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);
  return (
    <div className="App">
      <Head>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>
      {loading && "Loading"}
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
    </div>
  );
}

export default MyApp;
