import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import { Analytics } from "@vercel/analytics/react";
import { SnackbarProvider } from "notistack";
import Routes from "./Routes";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <>
      <ScrollToTop />
      <SnackbarProvider maxSnack={3}>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </SnackbarProvider>
      <Analytics />
    </>
  );
};

export default App;
