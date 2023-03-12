import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import backArrow from "../img/backX.png";
import axios from "axios";

const EventBanner2 = () => {
    const navigate = useNavigate();

    const [lastTime, setLastTime] = useState("");
    const [timeMessage, setTimeMessage] = useState("검색 중 입니다.");
    const [totalTime, setTotalTime] = useState("");
    const [enterFlag, setEnterFlag] = useState(false);


    const goBack = () => {
        navigate("/Event");
    };

    const currentTimeCalc = (time) => {
        let today = new Date();
        let year = today.getFullYear().toString().substr(2,3);
        let month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        } else {
            month = month.toString();
        }
        let date = today.getDate();
        if (date < 10) {
            date = "0" + date;
        } else {
            date = date.toString();
        }
        let hour = today.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        } else {
            hour = hour.toString();
        }
        let min = today.getMinutes();
        if (min < 10) {
            min = "0" + min;
        } else {
            min = min.toString();
        }
        let currentTime = year+month+date+hour+min;
        return Number(time) - Number(currentTime);
    }

    const calculateTime = (couponList) => {
        let today = new Date();
        let year = today.getFullYear().toString().substr(2,3);
        let month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        } else {
            month = month.toString();
        }
        let date = today.getDate();
        if (date < 10) {
            date = "0" + date;
        } else {
            date = date.toString();
        }
        let hour = today.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        } else {
            hour = hour.toString();
        }
        let min = today.getMinutes();
        if (min < 10) {
            min = "0" + min;
        } else {
            min = min.toString();
        }
        let currentTime = year+month+date+hour+min;
        let totalTime = 0;
        if (couponList.toString().substring(6,8) !== currentTime.toString().substring(6,8)) {
            totalTime = Number(couponList) - Number(currentTime) - 40;
        } else {
            totalTime = Number(couponList) - Number(currentTime);
        }
        if (Number(totalTime) <= 0) {
            setTimeMessage("이벤트가 진행 중입니다.");
            setLastTime("");
            setEnterFlag(true);
        } else {
            setTimeMessage("이벤트 진행 예정");
            setLastTime(totalTime + "분 남았습니다.");
            setEnterFlag(false);
        }
        setTotalTime(totalTime);
    };

    const enterQueue = () => {
        if (enterFlag === true) {
            try {
                axios
                    .post("https://api.trafficreasearchinstitute.store/queue", {

                    },{ headers: {
                        Authorization: localStorage.getItem("Authorization")
                    }})
                    .then((res) => {
                        alert(res.data);
                    });
            } catch (error) {
                console.log(error);
                alert("잠시뒤에 시도해주세요.");
            }
        } else {
            alert("이벤트 시간이 아닙니다. \n잠시뒤에 시도해주세요.");
            return;
        }
    };

    useEffect(() => {
        let intervalId = 0;
        function searchData() {
            try {
                const config = {
                    params: {},
                    headers: {
                        Authorization: localStorage.getItem("Authorization"),
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                };
                axios
                    .get("https://api.trafficreasearchinstitute.store/coupon", config)
                    .then((res) => {
                        let totalTime = 0;
                        if (res.data.length === 0) {
                            totalTime = 0;
                            setTimeMessage("이벤트가 없습니다.");
                            setLastTime("");
                            setEnterFlag(false);
                            return;
                        } else {
                            totalTime = currentTimeCalc(res.data[0].date);
                        }
                        if (res.data.length === 0 || totalTime <= 0) {
                            calculateTime(0);
                            intervalId = 0;
                        } else {
                            intervalId = setInterval(() => {
                                calculateTime(res.data[0].date);
                            }, 1000);
                            return () => clearInterval(intervalId);
                        }
                });
            } catch (error) {
                console.log(error);
            }
        }
        searchData();
        return () => clearInterval(intervalId);
    }, []);

    return(
        <>
        <BannerHeader>
            <BackArrow src={ backArrow } onClick={ goBack }>
            </BackArrow>
            <Timer>
                <Message>{timeMessage}</Message>
                <Time>{lastTime}</Time>
            </Timer>
            <EmptyDiv>

            </EmptyDiv>
        </BannerHeader>
        <MainContainer>
            <ButtonContainer>
                <EventJoin onClick={ enterQueue }>
                    이벤트참여
                </EventJoin>
            </ButtonContainer>
        </MainContainer>
        </>
    );
};

export default EventBanner2;

const BannerHeader = styled.div`
    width: 100%;
    height: 10vh;
    border-bottom:1px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BackArrow = styled.img`
    width:7vh;
    height:7vh;
    cursor: pointer;
`;

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Timer = styled.div`
    display: flex;
`;

const EmptyDiv = styled.div`

`;

const Time = styled.p`

`;

const Message = styled.p`
    margin-right:20px;
`;

const ButtonContainer = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextContainer = styled.div`
    width: 100%;
    height: 100%;
    border:1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const EventJoin = styled.button`
    width: 10vw;
    height: 10vh;
    background-color: #fff;
    border: 2px solid #000;
    cursor: pointer;
`;

const TextDiv = styled.div`
    width:100%;
    height:3vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextObj = styled.p`
    font-size:7px;
`;