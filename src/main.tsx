import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import LocalSeoPageView from "./LocalSeoPage";
import { localSeoPages } from "./localSeoPages";

const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
const localSeoPage = localSeoPages.find((page) => page.path === currentPath);

createRoot(document.getElementById("root")!).render(
  <StrictMode>{localSeoPage ? <LocalSeoPageView page={localSeoPage} /> : <App />}</StrictMode>
);
