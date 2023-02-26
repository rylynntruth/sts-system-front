import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import LogoImg from "../img/Logo2.png";

const Header = () => {
    const locationNow = useLocation();
    const navigate = useNavigate();

    if (locationNow.pathname === "/Login") return undefined;

    if (locationNow.pathname === "/signUp") return undefined;

    if (locationNow.pathname === "/Event") return undefined;

    if (locationNow.pathname === "/" || locationNow.pathname === "/searchTab") return undefined;

    const goMain = () => {
        navigate("/mainApp");
    }

    const categorySearch = () => {
        navigate("/mainSearch");
    }

    const domesticSearch = () => {
        navigate("/bestsellerSearch");
    }

    const foreignSearch = () => {
        navigate("/Event");
    }

    const ebookSearch = () => {
        navigate("/mainApp");
    }

    const goLoginout = () => {
        const authorization = localStorage.getItem('Authorization');
        localStorage.clear(authorization);
        navigate('/');
    }

    return(
        <>
        <Wrapper>
            <Menu1 onClick={ goLoginout }>로그아웃</Menu1>
            <Menu1>마이페이지</Menu1>
        </Wrapper>
        <MenuWrapper>
            <LogoContainer>
                <Logo src={ LogoImg } onClick={ goMain } />
            </LogoContainer>
            <MenuContainer>
                <MenuBanner1 onClick={ categorySearch }>검색</MenuBanner1>
                <MenuBanner1 onClick={ domesticSearch }>주문</MenuBanner1>
                <MenuBanner1 onClick={ foreignSearch }>실시간</MenuBanner1>
                <MenuBanner1 onClick={ ebookSearch }>추가예정</MenuBanner1>
            </MenuContainer>
        </MenuWrapper>
        </>
    )
};

export default Header;

const Wrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    width:100%;
    height:30px;
    font-size:14px;
    flex-flow:wrap;
    background-color:black;
`;
const Menu1 = styled.a`
    margin-right:2em;
    color:white;
    text-align:center;
    margin-top:5px;
    cursor: pointer;
`;

const MenuWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    width:100%;
    height:90px;
    background-color:#FFF;
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size:19px`;

const LogoContainer = styled.div`
    display:flex;
    align-items: center;
`;

const MenuContainer = styled.div`
    display:flex;
    align-items: center;
`;

const Logo = styled.img`
    width:40px;
    height:40px;
    cursor: pointer;
    margin-left:3em;
`;

const MenuBanner1 = styled.a`
    margin-right:3em;
    font-weight:bolder;
    font-size:17px;
    cursor: pointer;
`;