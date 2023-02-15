import React, { useCallback, useState } from "react";
import styled from "styled-components";
import LogoImg from "../img/Logo2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [address, setAddress] = useState('');

    const goHome = () => {
        navigate("/");
    };

    const onSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                await axios({
                    method: 'post',
                    url: 'http://localhost:8080/api/members/signup',
                    data:{ username:"ryu12345", password:"abcd1234!@", address:"ulsan"}
                }).then((res) => {
                    console.log(res);
                    alert('회원가입이 완료되었습니다.');
                    window.location.replace('/');
                });
            } catch (err) {
                console.error(err);
            }
        }
    );

    return (
        <>
        <Header>
            <Logo src={ LogoImg } onClick={ goHome }></Logo>
        </Header>
        <LoginContainer>
            <LoginLine>
                <LoginBox>
                    <PlusTag>아이디</PlusTag>
                    <InputBox
                    autoFocus
                    required
                    defaultValue={userId}
                    type="text" name="userId" placeholder="영문,숫자 4~10자"/>
                    <PlusTag>비밀번호</PlusTag>
                    <InputBox
                    required
                    defaultValue={password}
                    type="password" name="password" placeholder="영문,숫자,특수기호 포함 8~16자"/>
                    <InputBox 
                    required
                    defaultValue={checkPassword}
                    type="password" name="checkPassword" placeholder="비밀번호 재입력"/>
                    <PlusTag>추가정보</PlusTag>
                    <SelectBox name="address">
                        <option value="seoul">서울</option>
                        <option value="incheon">인천</option>
                        <option value="gyeonggi">경기도</option>
                        <option value="daegeon">대전</option>
                        <option value="daegu">대구</option>
                        <option value="ulsan">울산</option>
                        <option value="busan">부산</option>
                        <option value="gwangju">광주</option>
                        <option value="jeju">제주도</option>
                    </SelectBox>
                    <SignButton onClick={ onSubmit }>회원가입</SignButton>
                </LoginBox>
            </LoginLine>
        </LoginContainer>
        </>
    );
};

export default SignUp;

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

const InputBox = styled.input`
    width:40vh;
    height:5vh;
    margin-bottom: 20px;
`;

const SelectBox = styled.select`
    width:40vh;
    height:5vh;
    text-align:center;
    margin-bottom:20px;
`;

const SignButton = styled.button`
    width:41vh;
    height:7vh;
    margin-bottom: 20px;
    background-color:#000;
    color:#fff;
    border:1px solid #000;
    font-weight:bolder;
`;

const PlusTag = styled.p`
    font-size:15px;
`;