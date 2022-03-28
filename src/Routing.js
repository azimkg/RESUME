import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Section from "./components/Section/Section";
import Section2 from "./components/Section2/Section2";
import Skills from "./components/Skills/Skills";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content />
      <Section />
      <Section2 />
      <Routes>
        <Route path="/send" element={<Modal />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Section />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
