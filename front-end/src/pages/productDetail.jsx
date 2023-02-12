import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {

    return(
        <>
        <DetailContainer>
            <p></p>
        </DetailContainer>
        </>
    );    
};

export default ProductDetail;

const DetailContainer = styled.div`
    width:100%;
    height:10vh;
    border:1px solid #ddd;
    display:flex;
    justify-content:center;
`;