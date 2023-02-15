import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainSearch from "./mainSearch";
import SearchResult from "./SearchResult";
import Header from "../components/header";
import EventPage from "./eventPage";
import ProductDetail from "./productDetail";
import CategorySearch from "./categorySearch";
import Login from "./Login";
import SignUp from "./signUp";

const Router = () => {
    return (
        <>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route exact path="/" element={<MainSearch />} />
                <Route path="/Search" element={<SearchResult />} />
                <Route path="/Event" element={<EventPage />} />
                <Route path="/Search/ProductDetail" element={<ProductDetail />} />
                <Route path="/CategorySearch" element={<CategorySearch />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default Router;