import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Present from '../pages/Present';
import Project from '../pages/Project';
import Skill from '../pages/Skill';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Present />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="*" element={<h1>Page introuvable</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
