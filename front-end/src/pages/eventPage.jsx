import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backArrow from "../img/backX.png"

const EventPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/mainApp");
    };

    return (
        <>
        <EventHeader>
            <BackArrow src={ backArrow } onClick={ goBack }>

            </BackArrow>
        </EventHeader>
        </>
    );
};

export default EventPage;

const EventHeader = styled.div`
    width:100%;
    height:10vh;
    display:flex;
`;

const BackArrow = styled.img`
    width:7vh;
    height:7vh;
    cursor: pointer;
`;