import { JSX } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";

export const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};
