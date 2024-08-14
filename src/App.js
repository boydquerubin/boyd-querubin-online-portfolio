// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
// import About from "./components/About";
import Contact from "./components/Contact";
import ContentHighlights from "./components/ContentHighlights";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/multimedia" element={<ContentHighlights />} />
          </Routes>
        </Content>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
