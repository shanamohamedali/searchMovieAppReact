import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./utilitis/PrivateRoutes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          {""}
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
