import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LogoImg from "../img/Logo2.png";

const Header = () => {
    const navigate = useNavigate();

    const goMain = () => {
        navigate("/");
    }

    const goEvent = () => {
        navigate("/Event");
    }

    const categorySearch = () => {
        navigate("/CategorySearch");
    }

    return(
        <>
        <Wrapper>
            <Menu1>로그인</Menu1>
            <Menu1>마이페이지</Menu1>
            <Menu1>고객센터</Menu1>
        </Wrapper>
        <MenuWrapper>
            <LogoContainer>
                <Logo src={ LogoImg } onClick={ goMain } />
            </LogoContainer>
            <MenuContainer>
                <MenuBanner1 onClick={ categorySearch }>메뉴1</MenuBanner1>
                <MenuBanner1 onClick={ categorySearch }>메뉴2</MenuBanner1>
                <MenuBanner1 onClick={ categorySearch }>메뉴3</MenuBanner1>
                <MenuBanner1 onClick={ categorySearch }>메뉴4</MenuBanner1>
                <MenuBanner1 onClick={ goEvent }>이벤트</MenuBanner1>
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