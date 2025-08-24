/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ProjectPage from 'pages/ProjectPage';
import NotFoundPage from 'pages/NotFoundPage';
import TeamPage from 'pages/TeamPage';
import BlogPage from "pages/BlogPage";
import BlogPageDetail from 'pages/BlogDetailPage'; 
import FeaturesPage from 'pages/FeaturesPage';
import HelpCenterPage from "pages/HelpCenterPage";
import HelpCould from "parts/Cloud";
import POS from "parts/POS";

import { ProjectDetailPage } from 'pages/ProjectDetailPage';
import { DiscussProjectPage } from 'pages/DiscussProjectPage';

import './assets/css/styles.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog/:id" element={<BlogPageDetail />} /> 
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="**" element={<NotFoundPage />} />
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/help/cloud" element={<HelpCould />} />
        <Route path="/help/pos" element={<POS />} />
      </Routes>
    </>
  );
}

export default App;
