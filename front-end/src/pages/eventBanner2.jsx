import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backArrow from "../img/backX.png"

const EventBanner2 = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/Event");
    };

    return(
        <>
        <BannerHeader>
            <BackArrow src={ backArrow } onClick={ goBack }>
            </BackArrow>
        </BannerHeader>
        <BannerContainer>
            <BannerCenter>

            </BannerCenter>
        </BannerContainer>
        </>
    );
};

export default EventBanner2;

const BannerHeader = styled.div`
    width: 100%;
    height: 10vh;
    border-bottom:1px solid #000;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const BackArrow = styled.img`
    width:7vh;
    height:7vh;
    cursor: pointer;
`;

const BannerContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const BannerCenter = styled.div`
    width: 100vh;
    height: 150vh;
    border:1px solid #ddd;
    margin-top:20px;
    margin-bottom:20px;
`;