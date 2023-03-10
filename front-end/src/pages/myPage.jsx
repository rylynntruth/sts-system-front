import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const MyPage = () => {
    return (
        <>
            <MainContainer>
                <MemberContainer>
                    
                </MemberContainer>
                <CouponContainer>

                </CouponContainer>
                <OrderContainer>

                </OrderContainer>
            </MainContainer>
        </>
    );
};

export default MyPage;

const MainContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
`;

const MemberContainer = styled.div`
    width:80vw;
    height:100%;
    display: flex;
`;

const CouponContainer = styled.div`
    width:80vw;
    height:100%;
    display: flex;
`;

const OrderContainer = styled.div`
    width:80vw;
    height:100%;
    display: flex;
`;