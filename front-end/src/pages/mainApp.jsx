import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MainApp = () => {
    return(
        <>
        <MainAppContainer>
            <AppContainer>
                <h1>패치노트</h1>
                <p>검색 => LIKE, FULL TEXT INDEX, Redis 캐싱</p>
                <p>주문 => </p>
                <p>실시간이벤트 => </p>
            </AppContainer>
        </MainAppContainer>
        </>
    );
};

export default MainApp;

const MainAppContainer = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;