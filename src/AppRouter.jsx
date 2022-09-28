import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Products from "./pages/Products";
import RegistrationPage from "./pages/RegistrationPage";
import SignInPage from "./pages/SignInPage";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index={true} path="/" element={<SignInPage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
