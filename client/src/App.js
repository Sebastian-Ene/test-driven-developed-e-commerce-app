import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import LandingPage from "./pages/LandingPage";
import CoursesPage from "./pages/CoursesPage";
import CoursePage from "./pages/CoursePage";
import ProfilePage from "./pages/ProfilePage";
import ConfirmPage from "./pages/ConfirmPage";
import ErrorPage from "./pages/ErrorPage";
import AdminPage from "./pages/AdminPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/confirm" element={<ConfirmPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
