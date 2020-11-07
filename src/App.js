import React from "react";
import "./scss/App.scss";
import NavBar from "./components/NavBar";
import InvertedName from "./components/InvertedName";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import WorkPortfolio from "./components/WorkPortfolio";
import MessageForm from "./components/MessageForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main role="main" className="container-fluid">
        <div className="content content__row">
          <div className="content content--left">
            <img
              src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="photo"
            />
            <InvertedName firstName="JINGO" lastName="GEORGE" />
          </div>
          <div className="content content--right">
            <div className="py-5"></div>
            <About />
            <div className="py-3"></div>
            <WorkExperience />
            <div className="py-3"></div>
            <Skills />
            <div className="py-3"></div>
            <WorkPortfolio />
            <div className="py-3"></div>
            <MessageForm />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
