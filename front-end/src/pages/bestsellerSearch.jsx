import React from "react";
import styled from "styled-components";
import BookImg from "../img/book_test.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BestsellerSearch = () => {
    const navigate = useNavigate();

    const goDetail = () => {
        navigate("ProductDetail");
    };

    return (
        <>
        <MenuWrap>
            <Banner>
                <TitleBox>
                    <p>베스트셀러</p>
                </TitleBox>
                <TitleBox>
                    <p>국내도서</p>
                </TitleBox>
                <TitleBox>
                    <p>해외도서</p>
                </TitleBox>
                <TitleBox>
                    <p>e-book</p>
                </TitleBox>
                <TitleBox>
                    <p>인문</p>
                </TitleBox>
                <TitleBox>
                    <p>사회</p>
                </TitleBox>
                <TitleBox>
                    <p>과학</p>
                </TitleBox>
                <TitleBox>
                    <p>문학</p>
                </TitleBox>
                <TitleBox>
                    <p>에세이</p>
                </TitleBox>
                <TitleBox>
                    <p>자기계발</p>
                </TitleBox>
                <TitleBox>
                    <p>수험서</p>
                </TitleBox>
                <TitleBox>
                    <p>어린이</p>
                </TitleBox>
                <TitleBox>
                    <p>종교</p>
                </TitleBox>
                <TitleBox>
                    <p>역사</p>
                </TitleBox>
                <TitleBox>
                    <p>경제경영</p>
                </TitleBox>
                <TitleBox>
                    <p>여행</p>
                </TitleBox>
                <TitleBox>
                    <p>예술</p>
                </TitleBox>
                <TitleBox>
                    <p>외국어</p>
                </TitleBox>
                <TitleBox>
                    <p>건강</p>
                </TitleBox>
            </Banner>
            <ProductList>
                <Product onClick={ goDetail }>
                    <ProductImg src={ BookImg }>

                    </ProductImg>
                    <ProductDec>
                        <TitleP>title</TitleP>
                        <DateP>date</DateP>
                        <PriceP>price</PriceP>
                    </ProductDec>
                </Product>
            </ProductList>
        </MenuWrap>    
        </>
    );

};

export default BestsellerSearch;

const MenuWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`;

const Banner = styled.div`
    width:50vh;
    height:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    font-weight:bolder;
    font-size:25px;
    margin-top:10px;
`;

const ProductList = styled.div`
    width:157vh;
    height:100%;
    display:flex;
    flex-wrap:wrap;
`;

const Product = styled.div`
    width:45vh;
    height:100%;
    margin-top:15px;
    margin-left:15px;
    display:flex;
    flex-direction:column;
    cursor: pointer;
`;

const ProductImg = styled.img`
    width:45vh;
    height:60vh;
    z-index:1;
    box-shadow: 2px 2px 2px 2px #000;
`;

const ProductDec = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:10px;
`;

const TitleP = styled.p`
    margin:0;
    margin-left:5px;
    font-size:20px;
    font-weight:bolder;
`;

const DateP = styled.p`
    margin:5px;
    color: #74747B;
    font-weight: bolder;
`;

const PriceP = styled.p`
    margin:0;
    margin-left:5px;
    color: #74747B;
`;

const TitleBox = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:3px solid #ddd;
`;