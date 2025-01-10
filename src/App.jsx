import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./utilitis/PrivateRoutes";
import { FormLayout } from "./layouts/FormLayout";
import {SignUp} from "./Pages/SignUp";
import {ForgetPassword} from "./Pages/ForgetPassword";
import { NotFound } from "./Pages/NotFound";


function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/forget-password" element={<ForgetPassword/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
