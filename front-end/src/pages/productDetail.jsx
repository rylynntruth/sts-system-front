import React from "react";
import styled from "styled-components";
import BookImg from "../img/book_test.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {

    return(
        <>
        <BannerContainer>
            <p>BANNER</p>
        </BannerContainer>
        <CategoryContainer>
            <p>CATEGORY</p>
        </CategoryContainer>
        <DetailContainer>
            <DetailBanner>
                Banner
            </DetailBanner>
            <DetailImgDiv>
                <DetailImg src={ BookImg }>

                </DetailImg>
            </DetailImgDiv>
            <DetailDescriptionDiv>
                <TitleDescriptionDiv>
                    <Title>Title</Title>
                    <Description>설명</Description>
                </TitleDescriptionDiv>
                <PriceDiv>
                    <Price>가격 : 10000원</Price>
                </PriceDiv>
            </DetailDescriptionDiv>
            <RightBanner>
                Banner
            </RightBanner>
        </DetailContainer>
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:35px;
`;

const DetailBanner = styled.div`
    width:45vh;
    height:30px;
    border:1px solid #ddd;
    margin-left:10px;
`;

const DetailImgDiv = styled.div`
    width:130vh;
    height:100%;
    margin-left:10px;
`;

const DetailDescriptionDiv = styled.div`
    width:100%;
    height:100%;
    border:1px solid #ddd;
    margin-left:20px;
    display:flex;
    flex-direction:column;
`;

const RightBanner = styled.div`
    width:45vh;
    height:30px;
    border:1px solid #ddd;
    margin-left:10px;
    margin-right:10px;
`;

const DetailImg = styled.img`
    width:100%;
    height:80vh;
    border:none;
    box-shadow: 5px 5px 10px;
`;

const TitleDescriptionDiv = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    border-bottom:1px solid #000;
`;

const Title = styled.p`
    font-size:25px;
    font-weight:bolder;
`;

const Description = styled.p`
    margin-left:10px;
    font-size:20px;
    color:#666666;
`;

const PriceDiv = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    border-bottom:1px solid #000;
`;

const Price = styled.p`

`;