import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import backArrow from "../img/backX.png";
import axios from "axios";

const EventBanner = () => {
    const navigate = useNavigate();

    const [couponType, setCouponType] = useState("");
    const [couponTime, setCouponTime] = useState("");
    const [couponCount, setCouponCount] = useState(0);
    const [couponList, setCouponList] = useState([]);
    const [beforeList, setBeforeList] = useState([]);

    const goBack = () => {
        navigate("/Event");
    };

    const handleSelect = (e) => {
        setCouponType(e.target.value);
    };

    const AddCoupon = (e) => {
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
        if (couponTime.length !== 10) {
            alert("년도/월/일/시/분 으로 입력해주세요.");
            return;
        } else if (Number(currentTime) >= Number(couponTime)) {
            alert("현재시간 이후로 입력해주세요.");
            return;
        } else if (couponCount > 10000 || couponCount <= 0) {
            alert("쿠폰 수량은 0개 초과 만개 이하로 적어주세요.");
            return;
        } else if (couponType === ""){
            alert("쿠폰 타입을 선택해주세요.");
            return;
        } else {
            try {
                axios
                    .post("http://localhost:8080/coupon", {
                        couponType: couponType,
                        date: couponTime,
                        count:couponCount
                    },{ headers: {
                        Authorization: localStorage.getItem("Authorization")
                    }})
                    .then((res) => {
                        alert(res.data);
                        window.location.reload();
                    });
            } catch (error) {
                console.log(error);
                alert("잠시뒤에 시도해주세요.");
            }
        }
    }

    const checkTime = (e) => {
        setCouponTime(e.target.value);
    };

    const checkCount = (e) => {
        setCouponCount(e.target.value);
    };

    useEffect(() => {
        async function searchData() {
            try {
                const config = {
                    params: {},
                    headers: {
                        Authorization: localStorage.getItem("Authorization"),
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                };
                await axios
                    .get("http://localhost:8080/coupon", config)
                    .then((res) => {
                        console.log(res.data);
                        setCouponList(res.data);
                });
            } catch (error) {
                console.log(error);
            }
            try {
                const config = {
                    params: {},
                    headers: {
                        Authorization: localStorage.getItem("Authorization"),
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                };
                await axios
                    .get("http://localhost:8080/finishEvent", config)
                    .then((res) => {
                        console.log(res.data);
                        setBeforeList(res.data);
                });
            } catch (error) {
                console.log(error);
            }
        }
        searchData();
    }, []);

    return(
        <>
        <BannerHeader>
            <BackArrow src={ backArrow } onClick={ goBack }>
            </BackArrow>
        </BannerHeader>
        <BannerContainer>
            <RecentContainer>
                <EventInputDiv>
                    <InputContainer>
                        <CouponTitle>
                            쿠폰타입 : 
                            <CouponTypeInput onChange={ handleSelect } value={ couponType }>
                                <option value=""></option>
                                <option value="A1001:1">A1001</option>
                            </CouponTypeInput>
                        </CouponTitle>
                        <TimeTitle>
                            시간입력(ex:2201010930) : 
                            <TimeInput onChange={ checkTime } />
                        </TimeTitle>
                        <CountTitle>
                            수량입력 : 
                            <CountInput onChange={ checkCount} type="number" min="1" max="100000" pattern="[0-9]+" />
                        </CountTitle>
                    </InputContainer>
                    <ButtonContainer>
                        <AddButton onClick={ AddCoupon }>추가</AddButton>
                    </ButtonContainer>
                </EventInputDiv>
                <RecentHeader>
                    <RecentTitle>진행중인 이벤트</RecentTitle>
                </RecentHeader>
                <RecentEventList>
                    {couponList?.map((coupon,index) => {
                        return (
                        <RecentEvent key={index}>
                            <p>{coupon.couponType}</p>
                            <p>{coupon.date}</p>
                            <p>{coupon.count}</p>
                        </RecentEvent>
                        )
                    })}
                </RecentEventList>
            </RecentContainer>
            <BeforeContainer>
                <BeforeHeader>
                    <BeforeTitle>종료된 이벤트</BeforeTitle>
                </BeforeHeader>
                <BeforeEventList>
                    {beforeList?.map((event,index) => {
                        return (
                            <BeforeEvent key={index}>
                                <p>{event.couponType}</p>
                                <p>{event.date}</p>
                                <p>{event.count}</p>
                            </BeforeEvent>
                        )
                    })}
                </BeforeEventList>
            </BeforeContainer>
        </BannerContainer>
        </>
    );
};

export default EventBanner;

const BannerHeader = styled.div`
    width: 100%;
    height: 10vh;
    border-bottom:1px solid #000;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const BackArrow = styled.img`
    width:7vh;
    height:7vh;
    cursor: pointer;
`;

const BannerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RecentContainer = styled.div`
    width: 50%;
    height: 100%;
`;

const BeforeContainer = styled.div`
    width: 50%;
    height: 100%;
`;

const EventInputDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border:1px solid #ddd;
`;

const RecentEventList = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border:1px solid #000;
`;

const RecentHeader = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RecentTitle = styled.p`

`;

const BeforeHeader = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BeforeTitle = styled.p`

`;

const BeforeEventList = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
`;

const CouponTypeInput = styled.select`
    width: 10vw;
    height: 5vh;
    border:1px solid #ddd;
`;

const TimeInput = styled.input`
    width: 10vw;
    height: 5vh;
    border:1px solid #ddd;
`;

const CountInput = styled.input`
    width: 10vw;
    height: 5vh;
    border:1px solid #ddd;
`;

const CouponTitle = styled.p`
    padding:0;
`;

const TimeTitle = styled.p`
    padding:0;
`;

const CountTitle = styled.p`

`;

const InputContainer = styled.div`
    width: 50%;
`;

const ButtonContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AddButton = styled.button`
    width:10vw;
    height:7vh;
    background-color:#fff;
`;

const RecentEvent = styled.div`
    width:100%;
    height:10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const BeforeEvent = styled.div`
    width:100%;
    height:10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border:1px solid #000;
`;

