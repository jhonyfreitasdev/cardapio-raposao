import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { FoodPage } from "../pages/food";
import { ChoppPage } from "../pages/chopp";
import { DrinkPage } from "../pages/drink";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/food" element={<FoodPage />} />
            <Route exact path="/chopp" element={<ChoppPage />} />
            <Route exact path="/drink" element={<DrinkPage />} />
        </Routes>
    </BrowserRouter>
);