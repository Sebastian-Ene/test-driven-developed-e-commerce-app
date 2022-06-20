import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import LandingPage from "./pages/LandingPage";
import CoursesPage from "./pages/CoursesPage";
import CoursePage from "./pages/CoursePage";
import SignInPage from "./pages/SignInPage";
import ConfirmPage from "./pages/ConfirmPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/profile" element={<SignInPage />} />
            <Route path="/confirm" element={<ConfirmPage />} />
        </Routes>
    );
}

export default App;
