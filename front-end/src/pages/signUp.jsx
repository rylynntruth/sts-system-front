import React, { useCallback, useState } from "react";
import styled from "styled-components";
import LogoImg from "../img/Logo2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();

    //변수 모음
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');

    //유효성 검사
    const [userIdMessage, setUserIdMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [checkIdMessage, setCheckIdMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [nicknameMessage, setNicknameMessage] = useState('');
    
    //유효성검사 초기값
    const [isUserIdValid, setIsUserIdValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [checkPasswordValid, setCheckPasswordValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [nicknameValid, setNicknameValid] = useState(false);
    const [isCheckIdValid, setIsCheckIdValid] = useState(false);

    //로고 다이렉트
    const goHome = () => {
        navigate("/");
    };

    // 아이디
    const onChangeUserId = useCallback((e) => {
        const userIdRegExp = /[^a-zA-Z0-9]/g;
        setUserId(e.target.value);
        if (userIdRegExp.test(e.target.value)) {
            setUserIdMessage("한글과 특수문자는 사용이 불가합니다.");
            setIsUserIdValid(false);
            setIsCheckIdValid(false);
        } else if (e.target.value.length <4) {
            setUserIdMessage("4글자 이상 입력해주세요.");
            setIsUserIdValid(false);
            setIsCheckIdValid(false);
        } else if (e.target.value.length > 10) {
            setUserIdMessage("10글자 이하 입력해주세요.");
            setIsUserIdValid(false);
            setIsCheckIdValid(false);
        } else {
            setUserIdMessage("올바른 형식입니다.");
            setIsUserIdValid(true);
        }

    }, []);

    //비밀번호
    const onChangePassword = useCallback((e) => {
        const passwordRegex =
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
        setPassword(e.target.value);
        if (!passwordRegex.test(e.target.value)) {
            setPasswordMessage(
            '영문(대문자),숫자,특수기호 포함 8~16자입니다.'
            );
            setIsPasswordValid(false);
        } else {
            setPasswordMessage('올바른 형식입니다.');
            setIsPasswordValid(true);
        }

    }, []);

    //비밀번호 확인
    const onChangeCheckPassword = useCallback((e) => {
        setCheckPassword(e.target.value);

        if (password === e.target.value) {
            setCheckIdMessage('일치합니다.');
            setCheckPasswordValid(true);
        } else {
            setCheckIdMessage(
            '비밀번호가 일치하지 않습니다.'
        );
        setCheckPasswordValid(false);
        }

    }, [password]);

    //이메일
    const onChangeEmail = useCallback((e) => {
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            const emailCurrent = e.target.value;
            setEmail(emailCurrent);

            if (!emailRegex.test(emailCurrent)) {
            setEmailMessage('이메일형식을 확인해주세요!');
            setEmailValid(false);
            } else {
            setEmailValid(true);
            setEmailMessage('올바른 형식입니다.');
            }
    }, []);

    //닉네임
    const onChangeNickname = useCallback((e) => {
        const nicknameRegex = /[^a-zA-Z0-9ㄱ-힣]/g;
        setNickname(e.target.value);
        if (nicknameRegex.test(e.target.value)) {
            setNicknameMessage("특수문자는 사용이 불가합니다.");
            setNicknameValid(false);
        } else if (e.target.value.length >12) {
            setNicknameMessage("12자 이하로 입력해주세요.");
            setNicknameValid(false);
        } else {
            setNicknameMessage("올바른 형식입니다.");
            setNicknameValid(true);
        }

    }, []);

    const onSubmit = useCallback(
        async (e) => {
            e.preventDefault();
                try {
                    await axios({
                        method: 'post',
                        url: 'https://api.whitenation.shop/api/members/signup',
                        data:{ username:userId, password:password, email:email, nickname:nickname}
                    }).then((res) => {
                        console.log(res);
                        alert('회원가입이 완료되었습니다.');
                        window.location.replace('/Login');
                    });
                } catch (err) {
                    alert("양식을 확인하거나 \n 잠시뒤에 다시 시도해주세요.");
                    console.error(err);
                }
        },
        [userId, password, checkPassword, email, nickname]
    );

    const checkId = useCallback(
        async (e) => {
            e.preventDefault();
            try{
                if (userId.trim() === '') {
                    alert('아이디를 입력해주세요.');
                    return;
                }
                await axios({
                    method: 'post',
                    url: 'https://api.whitenation.shop/api/members/checkId',
                    data:{ username:userId }
                }).then((res) => {
                    console.log(res);
                    console.log(res.status);
                    if (res.status === 204) {
                        alert('아이디가 중복되었습니다. \n다른 아이디를 사용해주세요.');
                        setIsCheckIdValid(false);
                        return;
                    } else {
                        alert('사용 가능한 아이디입니다.');
                        setIsCheckIdValid(true);
                    }
                });
            } catch (err) {
                console.error(err);
            }
        },
        [userId]
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
                    <IdContainer>
                        <IdBox
                        autoFocus
                        required
                        defaultValue={userId}
                        type="text" name="userId" placeholder="영문,숫자 4~10자"
                        onChange={(e) => onChangeUserId(e)} />
                        <IdButton onClick={ checkId } disabled={!(isUserIdValid)}>중복확인</IdButton>
                    </IdContainer>
                    {userId.length > 0 && (
                    <Sspan className={`message ${isUserIdValid ? 'success' : 'error'}`}>
                        {userIdMessage}
                    </Sspan>
                    )}
                    <PlusTag>비밀번호</PlusTag>
                    <InputBox
                    required
                    defaultValue={password}
                    onChange={(e) => onChangePassword(e)}
                    type="password" name="password" placeholder="영문,숫자,특수기호 포함 8~16자"/>
                    {password.length > 0 && (
                    <Sspan className={`message ${isPasswordValid ? 'success' : 'error'}`}>
                        {passwordMessage}
                    </Sspan>
                    )}
                    <CheckPasswordInput 
                    required
                    defaultValue={checkPassword}
                    onChange={(e) => onChangeCheckPassword(e)}
                    type="password" name="checkPassword" placeholder="비밀번호 재입력"/>
                    {checkPassword.length > 0 && (
                    <Sspan className={`message ${checkPasswordValid ? 'success' : 'error'}`}>
                        {checkIdMessage}
                    </Sspan>
                    )}
                    <PlusTag>이메일<span style={ {color:"red", fontWeight:"bolder"} }>(기프티콘을 받을 이메일을 써주세요!)</span></PlusTag>
                    <EmailInput
                    required
                    defaultValue={email}
                    onChange={(e) => onChangeEmail(e)}
                    type="email" name="email" placeholder="이메일 주소를 입력해주세요."/>
                    {email.length > 0 && (
                    <Sspan className={`message ${emailValid ? 'success' : 'error'}`}>
                        {emailMessage}
                    </Sspan>
                    )}
                    <PlusTag>이름</PlusTag>
                    <NicknameInput
                    required
                    defaultValue={nickname}
                    onChange={(e) => onChangeNickname(e)}
                    type="text" name="nickname" placeholder="이름을 입력해주세요." />
                    {nickname.length > 0 && (
                    <Sspan className={`message ${nicknameValid ? 'success' : 'error'}`}>
                        {nicknameMessage}
                    </Sspan>
                    )}
                    <SignUpButton onClick={ onSubmit } disabled={!(isUserIdValid && isPasswordValid && checkPasswordValid && nicknameValid && isCheckIdValid)}>회원가입</SignUpButton>
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
    height:85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InputBox = styled.input`
    width:40vh;
    height:5vh;
`;

const IdBox = styled.input`
    width:30vh;
    height:5vh;
`;

const IdButton = styled.button`
    margin-left:10px;
    width:9vh;
    height:6vh;
    background-color:#fff;
    border:1px solid #000;
    border-radius:5px;
    cursor: pointer;
`;

const IdContainer = styled.div`
    
`;

const SignUpButton = styled.button`
    width:41vh;
    height:7vh;
    background-color:#fff;
    border:1px solid #000;
    border-radius:5px;
    cursor: pointer;
    font-weight:bolder;
    margin-top:20px;
    margin-bottom: 20px;
`;

const PlusTag = styled.p`
    font-size:15px;
`;

const EmailInput = styled.input`
    width:40vh;
    height:5vh;
`;

const Sspan = styled.span`
    font-size:15px;
`;

const NicknameInput = styled.input`
    width:40vh;
    height:5vh;
`;

const CheckPasswordInput = styled.input`
    width:40vh;
    height:5vh;
    margin-top:10px;
`;