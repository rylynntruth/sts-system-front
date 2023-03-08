import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainSearch from "./mainSearch";
import SearchResult from "./SearchResult";
import Header from "../components/header";
import EventPage from "./eventPage";
import ProductDetail from "./productDetail";
import Login from "./Login";
import SignUp from "./signUp";
import axios from "axios";
import Loading from "../components/loading";
import DomesticSearch from "./domesticSearch";
import ForeignSearch from "./foreignSearch";
import BestsellerSearch from "./bestsellerSearch";
import EnterPage from "./enterPage";
import MainApp from "./mainApp";
import SearchTab from "./searchTab";
import EventBanner from "./eventBanner";
import EventBanner2 from "./eventBanner2";
import EventBanner3 from "./eventBanner3";
import CartList from "./cartList";
import KeyWordSearchResult from "./keywordSearchResult";
import MyPage from "./myPage";

const Router = () => {
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        //axios 호출시 인터셉트
        axios.interceptors.request.use(function (config) {
          if(config.url.includes('search') || config.url.includes('login') || config.url.includes('/api/products/')){
            setLoading(true)
          }
          return config
        }, function (error) {
          return Promise.reject(error);
        });
        //axios 호출 종료시 인터셉트
        axios.interceptors.response.use(function (response) {      
          setLoading(false)
          return response;
        }, function (error) {
          setLoading(false)
          return Promise.reject(error);
        });
      },[]);
    return (
        <>
        <BrowserRouter>
            <React.Suspense fallback={<Loading loading={loading}/>}>
                <Header />
                <Routes>
                    <Route exact path="/mainSearch" element={<MainSearch />} />
                    <Route path="/Search" element={<SearchResult />} />
                    <Route path="/Event" element={<EventPage />} />
                    <Route path="/Search/ProductDetail" element={<ProductDetail />} />
                    <Route path="/CategorySearch/ProductDetail" element={<ProductDetail />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/bestsellerSearch" element={<BestsellerSearch />} />
                    <Route path="/bestsellerSearch/ProductDetail" element={<ProductDetail />} />
                    <Route path="/domesticSearch" element={<DomesticSearch />} />
                    <Route path="/domesticSearch/ProductDetail" element={<ProductDetail />} />
                    <Route path="/foreignSearch" element={<ForeignSearch />} />
                    <Route path="/foreignSearch/ProductDetail" element={<ProductDetail />} />
                    <Route path="/ebookSearch/ProductDetail" element={<ProductDetail />} />
                    <Route path="/" element={<EnterPage />} />
                    <Route path="/mainApp" element={<MainApp />} />
                    <Route path="/searchTab" element={<SearchTab />} />
                    <Route path="/eventBanner" element={<EventBanner />} />
                    <Route path="/eventBanner2" element={<EventBanner2 />} />
                    <Route path="/eventBanner3" element={<EventBanner3 />} />
                    <Route path="/cartList" element={<CartList />} />
                    <Route path="/KeyWordSearchResult" element={<KeyWordSearchResult />} />
                    <Route path="/myPage" element={<MyPage />} />
                </Routes>
            </React.Suspense>
        </BrowserRouter>
        <Loading loading={loading}/>
        </>
    );
};

export default Router;