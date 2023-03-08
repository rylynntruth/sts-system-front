import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DomesticSearch = () => {
    const navigate = useNavigate();

    const goDetail = () => {
        navigate("ProductDetail");
    };

    return (
        <>
        <MenuWrap>
            <Banner>
                <p>국내도서</p>
                <BannerLine>
                </BannerLine>
            </Banner>
            <ProductList>
                <Product onClick={ goDetail }>
                    <ProductImg>

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

export default DomesticSearch;

const MenuWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`;

const Banner = styled.div`
    width:50vh;
    height:100%;
    border-bottom:2px solid #ddd;
    display:flex;
    justify-content:center;
    font-weight:bolder;
    font-size:25px;
    margin-top:10px;
`;

const BannerLine = styled.div`
`;

const ProductList = styled.div`
    width:157vh;
    height:100%;
    display:flex;
    flex-wrap:wrap;
`;

const Product = styled.div`
    width:30vh;
    height:100%;
    margin-top:15px;
    margin-left:15px;
    display:flex;
    flex-direction:column;
    cursor: pointer;
`;

const ProductImg = styled.img`
    width:30vh;
    height:60vh;
    z-index:1;
`;

const ProductDec = styled.div`
    display:flex;
    flex-direction: column;
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