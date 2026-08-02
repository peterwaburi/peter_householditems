import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import "./styles/global.css";
import "./styles/buttons.css";
import "./styles/cards.css";
import "./styles/navbar.css";
import "./styles/animations.css";
import "./styles/home.css";
import "./styles/buttons.css";
import "./styles/typography.css";
import "./styles/branding.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BookingProvider from "./context/BookingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <BookingProvider>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </BookingProvider>
        </BrowserRouter>
    </React.StrictMode>
);

