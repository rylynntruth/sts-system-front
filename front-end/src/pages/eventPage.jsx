import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backArrow from "../img/backX.png"

const EventPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/mainApp");
    };

    const goBanner = () => {
        navigate("/eventBanner");
    }

    return (
        <>
        <EventHeader>
            <BackArrow src={ backArrow } onClick={ goBack }>
            </BackArrow>
        </EventHeader>
        <BannerContainer>
            <Banner onClick={ goBanner }>
                
            </Banner>
            <Banner>
                
            </Banner>
            <Banner>
                
            </Banner>
        </BannerContainer>
        </>
    );
};

export default EventPage;

const EventHeader = styled.div`
    width:100%;
    height:10vh;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid #000;
`;

const BackArrow = styled.img`
    width:7vh;
    height:7vh;
    cursor: pointer;
`;

const BannerContainer = styled.div`
    width:100%;
    height:90vh;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
`;

const Banner = styled.div`
    width:80vh;
    height:20vh;
    border:1px solid #ddd;
`;