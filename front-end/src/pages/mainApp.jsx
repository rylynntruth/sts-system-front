import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MainApp = () => {
    return(
        <>
        <MainAppContainer>
            <AppContainer>
                <AppHeader>
                    <AppTitle>패치노트</AppTitle>
                </AppHeader>
                <Note>
                    <NoteHeader>
                        <PnoteHeader>기능관련</PnoteHeader>
                    </NoteHeader>
                </Note>
                <Note>
                    <NoteHeader>
                        <PnoteHeader>서버관련</PnoteHeader>
                    </NoteHeader>
                </Note>
                <Note>
                    <NoteHeader>
                        <PnoteHeader>기타</PnoteHeader>
                    </NoteHeader>
                </Note>
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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const AppHeader = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AppTitle = styled.p`
    font-size: 30px;
    font-weight: bolder;
`;

const Note = styled.div`
    width: 65vh;
    height: 65vh;
    margin-top: 10px;
    border:1px solid #000;
`;

const NoteHeader = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    background-color: #000;
    justify-content: center;
    align-items: center;
`;

const PnoteHeader = styled.p`
    color: #fff;
    font-size: 20px;
    font-weight: bolder;
`;