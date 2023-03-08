import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backArrow from "../img/backX.png"
import banner1 from "../img/banner1.png"
import banner2 from "../img/banner2.png"

const EventPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/mainApp");
    };

    const goBanner = () => {
        navigate("/eventBanner");
    }

    const goBanner2 = () => {
        navigate("/eventBanner2");
    }

    const goBanner3 = () => {
        navigate("/eventBanner3");
    }

    return (
        <>
        <EventHeader>
            <BackArrow src={ backArrow } onClick={ goBack }>
            </BackArrow>
        </EventHeader>
        <BannerContainer>
            <Banner onClick={ goBanner } src={ banner2 }>
                
            </Banner>
            <Banner onClick={ goBanner2 } src= { banner1 }>
                
            </Banner>
            <Banner onClick={ goBanner3 }>
                
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

const Banner = styled.img`
    width:80vh;
    height:20vh;
    border:1px solid #ddd;
`;