import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </>
  );
};

export default App;
