import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EnterPage = () => {
    const navigate = useNavigate();
    const [typeMessage, setTypeMessage] = useState("");
    const [welcomeMessage, setWelcomeMessage] = useState("환영합니다");
    const [count, setCount] = useState(0);

    const completionWord = "대규모 트래픽 연구소";

    const goLogin = () => {
        navigate("/Login");
    };

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setTypeMessage((prevTitleValue) => {
                let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
                setCount(count + 1);

                if (count >= completionWord.length) {
                    clearInterval(typingInterval);
                    setTypeMessage(completionWord);
                    setWelcomeMessage("환영합니다!");
                } else {
                    return result;
                }
            })
        },200);
        return () => {
            clearInterval(typingInterval);
        };
    });

    return (
    <>
        <MainContainer>
            <MessageContainer>
                <BlackContainer>
                    <BlackMessage>{ typeMessage }</BlackMessage>
                </BlackContainer>
                <WhiteContainer>
                    <WhiteMessage>{ welcomeMessage }</WhiteMessage>
                </WhiteContainer>
                <LoginContainer>
                    <LoginButton onClick={ goLogin }>
                        <ButtonP>로그인</ButtonP>
                    </LoginButton>
                </LoginContainer>
            </MessageContainer>
        </MainContainer>
    </>
    );
};

export default EnterPage;

const MainContainer = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const MessageContainer = styled.div`
    width:100%;
    height:50vh;
`;

const BlackContainer = styled.div`
    width:100%;
    height:25vh;
    background-color:#000;
    display:flex;
    justify-content:start;
    align-items:center;
`;

const BlackMessage = styled.h2`
    color:#fff;
    margin-left:30px;
    font-size:55px;
`;

const WhiteContainer = styled.div`
    width:100%;
    height:25vh;
    display:flex;
    justify-content:end;
    align-items:center;
`;

const WhiteMessage = styled.h2`
    margin-right:30px;
    font-size:55px;
`;

const LoginContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const LoginButton = styled.button`
    margin-top:5vh;
    width:20vh;
    height:10vh;
    border-radius:7px;
    font-size:25px;
    background-color:#fff;
    border:1px solid #000;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ButtonP = styled.p`
    color:#000;
    font-weight:bolder;
`;