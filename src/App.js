import React from "react";
import "./scss/App.scss";
import NavBar from "./components/NavBar";
import About from "./components/About";
import WorkExperience from "./components/work/WorkExperience";
import Skills from "./components/skills/Skills";
import WorkPortfolio from "./components/portfolio/Portfolios";
import Candidate from "./components/Candidate";
import Space from "./components/reusable/Space";
import ContactInfo from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main role="main" className="container-fluid">
        <div className="content content__row">
          <div className="content content--left">
            <Candidate />
          </div>
          <div className="content content--right">
            <Space size="lg" />
            <About />
            <Space size="sm" />
            <WorkExperience />
            <Space size="sm" />
            <Skills />
            <Space size="sm" />
            <WorkPortfolio />
            <Space size="sm" />
            <ContactInfo />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
