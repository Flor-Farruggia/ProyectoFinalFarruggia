import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Providers from "./providers/CartProviders.jsx";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import "./assets/css/colors.css";
import "./assets/css/fonts.css";
import "./assets/css/styler.css";

createRoot(document.getElementById("root")).render(
    <Providers>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Providers>
);