import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Loader from "./components/common/Loader.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";

const Home = lazy(() => import("./pages/Home"));
const Experiences = lazy(() => import("./pages/Experiences"));
const Projects = lazy(() => import("./pages/Projects"));
const Contacts = lazy(() => import("./pages/Contacts"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route element={<App />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/experiences"
              element={
                <Suspense fallback={<Loader />}>
                  <Experiences />
                </Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <Suspense fallback={<Loader />}>
                  <Projects />
                </Suspense>
              }
            />
            <Route
              path="/contact-me"
              element={
                <Suspense fallback={<Loader />}>
                  <Contacts />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </StrictMode>
);
