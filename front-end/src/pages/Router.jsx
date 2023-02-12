import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainSearch from "./mainSearch";
import SearchResult from "./SearchResult";
import Header from "../components/header";
import EventPage from "./eventPage";
import ProductDetail from "./productDetail";
import CategorySearch from "./categorySearch";

const Router = () => {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainSearch />} />
                <Route path="/Search" element={<SearchResult />} />
                <Route path="/Event" element={<EventPage />} />
                <Route path="/Search/ProductDetail" element={<ProductDetail />} />
                <Route path="/CategorySearch" element={<CategorySearch />} />
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default Router;