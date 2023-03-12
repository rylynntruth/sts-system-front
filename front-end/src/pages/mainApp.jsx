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
                <NoteContainer>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>검색</span> | Like 검색 모드 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>검색</span> | FULL TEXT INDEX 검색 모드 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>검색</span> | Redis look aside 캐싱 모드 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>검색</span> | Redis read though 캐싱 모드 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>주문</span> | pessimistic 주문 모드 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>주문</span> | Reids 활용 redisson 주문 모드 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>공통</span> | 장바구니 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>주문</span> | 주문 탭 상품리스트 캐싱(진입 속도 상승) 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>주문</span> | 주문 탭 상품 상세 페이지 캐싱 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>주문</span> | 카테고리 별 상품리스트 기능 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>검색</span> | 캐싱/비캐싱 검색 키워드 구분 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>검색</span> | 검색 서버 처리 시간 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>실시간</span> | 1시간 이내 이벤트 런칭 기능 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>실시간</span> | 현재 진행 중/종료된 이벤트 목록 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>실시간</span> | 스케줄링으로 15분 이후/쿠폰 수량 0일경우 자동 이벤트 종료 기능 추가</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>실시간</span> | 테스트 용이를 위한 redis에 담긴 이벤트 당첨자 mysql 이관처리 5분으로 변경</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>공통</span> | 대규모 트래픽 연구소 진입 페이지 변경</Pnote>
                    </Note>
                    <Note>
                        <Pnote><span style={{fontWeight:"bolder",fontSize:"20px"}}>공통</span> | 마이페이지 추가</Pnote>
                    </Note>
                </NoteContainer>
            </AppContainer>
        </MainAppContainer>
        </>
    );
};

export default MainApp;

const MainAppContainer = styled.div`
    width: 100%;
    height: 100%;
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

const NoteContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Note = styled.div`
    width:70vw;
    height:10vh;
    border-bottom:1px solid #000;
    display:flex;
    align-items: center;
`;

const Pnote = styled.p`

`;