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
        if (!userId.trim() || !password.trim()) {
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }
        try {
            await axios
            .post(" https://api.spaceodessey.store/api/members/login", {
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
            await axios
            .get("https://api.spaceodessey.store/api/members/img")
            .then((res) => {
                console.log(res);
                localStorage.setItem("img"+0+"_id", res.data[0].img_id);
                localStorage.setItem("img"+0+"_s3", res.data[0].img_s3);
                localStorage.setItem("img"+1+"_id", res.data[1].img_id);
                localStorage.setItem("img"+1+"_s3", res.data[1].img_s3);
                localStorage.setItem("img"+2+"_id", res.data[2].img_id);
                localStorage.setItem("img"+2+"_s3", res.data[2].img_s3);
                localStorage.setItem("img"+3+"_id", res.data[3].img_id);
                localStorage.setItem("img"+3+"_s3", res.data[3].img_s3);
                localStorage.setItem("img"+4+"_id", res.data[4].img_id);
                localStorage.setItem("img"+4+"_s3", res.data[4].img_s3);
                localStorage.setItem("img"+5+"_id", res.data[5].img_id);
                localStorage.setItem("img"+5+"_s3", res.data[5].img_s3);
                localStorage.setItem("img"+6+"_id", res.data[6].img_id);
                localStorage.setItem("img"+6+"_s3", res.data[6].img_s3);
                localStorage.setItem("img"+7+"_id", res.data[7].img_id);
                localStorage.setItem("img"+7+"_s3", res.data[7].img_s3);
                localStorage.setItem("img"+8+"_id", res.data[8].img_id);
                localStorage.setItem("img"+8+"_s3", res.data[8].img_s3);
                localStorage.setItem("img"+9+"_id", res.data[9].img_id);
                localStorage.setItem("img"+9+"_s3", res.data[9].img_s3);
                localStorage.setItem("img"+10+"_id", res.data[10].img_id);
                localStorage.setItem("img"+10+"_s3", res.data[10].img_s3);
                localStorage.setItem("img"+11+"_id", res.data[11].img_id);
                localStorage.setItem("img"+11+"_s3", res.data[11].img_s3);
                localStorage.setItem("img"+12+"_id", res.data[12].img_id);
                localStorage.setItem("img"+12+"_s3", res.data[12].img_s3);
                localStorage.setItem("img"+13+"_id", res.data[13].img_id);
                localStorage.setItem("img"+13+"_s3", res.data[13].img_s3);
                localStorage.setItem("img"+14+"_id", res.data[14].img_id);
                localStorage.setItem("img"+14+"_s3", res.data[14].img_s3);
                localStorage.setItem("img"+15+"_id", res.data[15].img_id);
                localStorage.setItem("img"+15+"_s3", res.data[15].img_s3);
                localStorage.setItem("img"+16+"_id", res.data[16].img_id);
                localStorage.setItem("img"+16+"_s3", res.data[16].img_s3);
                localStorage.setItem("img"+17+"_id", res.data[17].img_id);
                localStorage.setItem("img"+17+"_s3", res.data[17].img_s3);
                localStorage.setItem("img"+18+"_id", res.data[18].img_id);
                localStorage.setItem("img"+18+"_s3", res.data[18].img_s3);
                localStorage.setItem("img"+19+"_id", res.data[19].img_id);
                localStorage.setItem("img"+19+"_s3", res.data[19].img_s3);
            });
            navigate(`/mainApp`);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
            } else {
                alert("잠시뒤에 다시 시도해주세요.");
            }
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