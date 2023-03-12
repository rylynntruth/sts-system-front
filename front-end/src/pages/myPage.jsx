import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const MyPage = () => {

    const [orderList, setOrderList] = useState([]);
    const [couponList, setCouponList] = useState([]);

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
                    .get("https://api.spaceodessey.store/api/products/order-list", config)
                    .then((res) => {
                        console.log(res.data);
                        setOrderList(res.data);
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
                    .get("https://api.spaceodessey.store/api/event/couponWinner", config)
                    .then((res) => {
                        console.log(res.data);
                        setCouponList(res.data);
                });
            } catch (error) {
                console.log(error);
            }
        }
        searchData();
    }, []);
    return (
        <>
            <MainContainer>
                <CouponContainer>
                    <CouponHeader>
                        <CHeader>쿠폰목록</CHeader>
                    </CouponHeader>
                    <CouponContent>
                        {couponList?.map((coupon,index) => {
                            return(
                            <Coupon key={coupon.id}>
                                <CouponP>{coupon.eventDate.toString().substring(0,2)}년{coupon.eventDate.toString().substring(2,4)}월
                                {coupon.eventDate.toString().substring(4,6)}일{coupon.eventDate.toString().substring(6,8)}시{coupon.eventDate.toString().substring(8,10)}분에 
                                &nbsp;{coupon.couponType.toString().substring(0,5)}쿠폰에 당첨되셨습니다.</CouponP>
                            </Coupon>
                            )
                        })}
                    </CouponContent>
                </CouponContainer>
                <OrderContainer>
                    <CouponHeader>
                        <CHeader>주문목록</CHeader>
                    </CouponHeader>
                    <CouponContent>
                        {orderList?.map((order,index) => {
                            return(
                                <Coupon key={order.orderId}>
                                    <CouponP>상품이름 : {order.itemName} | 주문수량 : {order.totalQuantity} | 결제금액 : {order.totalPrice}</CouponP>
                                </Coupon>
                            )
                        })}
                    </CouponContent>
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
    border:1px solid #ddd;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const OrderContainer = styled.div`
    width:80vw;
    height:100%;
    display: flex;
    border:1px solid #ddd;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CouponHeader = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CHeader = styled.p`

`;

const CouponContent = styled.div`
    width:100%;
    height:100%;
    display:flex
    justify-content:center;
    align-items:center;
`;

const Coupon = styled.div`
    width:100%;
    height:5vh;
    display:flex
    justify-content:center;
    align-items:center;
`;

const CouponP = styled.p`

`;