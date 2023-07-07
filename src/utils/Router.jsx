import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Accueil from "../pages/Accueil";
import Present from "../pages/Present";
import Project from "../pages/Project";
import Skill from "../pages/Skill";

const Router = () => {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Accueil/>} />
                    <Route path="/present" element={<Present/>} />
                    <Route path="/project" element={<Project/>} />
                    <Route path="/skill" element={<Skill/>} />
                    {/*<Route path="*" element={} />*/}
                </Routes>
        </BrowserRouter>

    )
}
export default Router