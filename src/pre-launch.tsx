import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import i18n from "./i18n.ts";
import { I18nextProvider } from "react-i18next";
import PreLaunch from "./PreLaunch.tsx";
import "./index.css";

createRoot(document.getElementById("pre-launch")!).render(
    <StrictMode>
        <I18nextProvider i18n={i18n}>
            <PreLaunch />
        </I18nextProvider>
    </StrictMode>
);
