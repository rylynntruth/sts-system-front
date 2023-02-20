import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../img/Logo2.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const goHome = () => {
        navigate("/");
    };

    const goSignUp = () => {
        navigate("/signUp");
    };

    async function onSubmit() {
        try {     
            await axios
            .post(" http://3.37.190.145:8080/api/members/login", {
                username:userId,
                password:password,
            })
            .then((res) => {
            localStorage.setItem(
                "Authorization",
                res.headers.get("Authorization")
                );
                console.log(res);
            });
            navigate(`/`);
        } catch (error) {
        }
    }

    return (
        <>
        <Header>
            <Logo src={ LogoImg } onClick={ goHome }></Logo>
        </Header>
        <LoginContainer>
            <LoginLine>
                <LoginBox>
                    <LoginTitle>로그인</LoginTitle>
                    <InputBox 
                    autoFocus
                    type="text" 
                    placeholder="아이디"
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                    />
                    <InputBox 
                    type="password" 
                    placeholder="비밀번호"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                    <LoginButton onClick={ onSubmit }>로그인</LoginButton>
                    <LoginButton2 onClick={ goSignUp }>회원가입</LoginButton2>
                </LoginBox>
            </LoginLine>
        </LoginContainer>
        </>
    );
};

export default Login;

const Header = styled.div`
    width:100%;
    height:10vh;
    border-bottom: 3px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    width:40px;
    height:40px;
    cursor:pointer;
`;

const LoginContainer = styled.div`
    width:100%;
    height:90vh;
    background-color: #f1f1f1;
`;

const LoginLine = styled.div`
    width:30%;
    height:88vh;
    margin: 0 auto;
    background-color: #fff;
    z-index:1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginBox = styled.div`
    width:70%;
    height:70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginTitle = styled.h2`
    font-size:30px;
    border-bottom: 2px solid #000;
`;

const InputBox = styled.input`
    width:40vh;
    height:8vh;
    margin-bottom: 20px;
`;

const LoginButton = styled.button`
    width:41vh;
    height:7vh;
    margin-bottom: 20px;
    background-color:#000;
    color:#fff;
    border:1px solid #000;
    font-weight:bolder;
`;

const LoginButton2 = styled.button`
    width:41vh;
    height:7vh;
    background-color:#fff;
    color:#0078ff;
    border:1px solid #0078ff;
    font-weight:bolder;
`;