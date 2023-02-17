import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {

    return(
        <>
        <BannerContainer>
            <p>BANNER</p>
        </BannerContainer>
        <CategoryContainer>
            <p>CATEGORY</p>
        </CategoryContainer>

        </>
    );    
};

export default ProductDetail;

const BannerContainer = styled.div`
    width:100%;
    height:10vh;
    border:1px solid #ddd;
    display:flex;
    justify-content:center;
    align-items: center;
`;

const CategoryContainer = styled.div`
    width:100%;
    height:7vh;
    border:1px solid #74747B;
    display:flex;
    align-items: center;
`;

const DetailContainer = styled.div`
    width:100%;
    height:100%;
`;
