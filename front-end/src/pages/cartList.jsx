import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const CartList = () => {
    const navigate = useNavigate();

    const [products, setProduct] = useState([]);

    const ObjectDelete = (id) => {
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
                .delete("https://api.spaceodessey.store/api/products/" + id + "/cart-delete", config)
                .then((res) => {
                    alert("삭제되었습니다.");
                    window.location.reload();
            });
        } catch (error) {
            console.log(error);
        }
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
                    .get("https://api.spaceodessey.store/api/products/cart", config)
                    .then((res) => {
                        console.log(res.data);
                        setProduct(res.data);
                });
            } catch (error) {
                console.log(error);
            }
        }
        searchData();
    }, []);

    return(
        <>
        <TotalContainer>
            <TitleHeader>
                <Title>장바구니</Title>
            </TitleHeader>
            <TabContainer>
                <TabHeader>
                    <TotalCheckBox>번호</TotalCheckBox>
                    <ProductTitle>상품명</ProductTitle>
                    <ProductPrice>가격</ProductPrice>
                    <ProductQuantity>수량</ProductQuantity>
                    <ProductDelete>삭제</ProductDelete>
                </TabHeader>
                <TabContent>
                    {products.map((product, index) => {
                        return(
                            <CartObject key={index}>
                                <OnlyCheckbox>{index+1}</OnlyCheckbox>
                                <ObjectTitle><ObjectImg src={ localStorage.getItem("img"+product.imgurl+"_s3") }/>{product.itemName}</ObjectTitle>
                                <ObjectPrice>판매가 : <span style={{color:"#B54A72", fontWeight:"bolder"}}>{product.price}</span>원</ObjectPrice>
                                <ObjectQuantity>{product.quantity}</ObjectQuantity>
                                <ObjectDelete2 onClick={() => ObjectDelete(product.product_id)}>삭제</ObjectDelete2>
                            </CartObject>
                        )
                    })}
                </TabContent>
            </TabContainer>
            <ButtonContainer>
                <PesButton>주문하기(pessimisticLock)</PesButton>
                <ReddisonButton>주문하기(reddison)</ReddisonButton>
            </ButtonContainer>
        </TotalContainer>
        </>
    );
};

export default CartList;

const TotalContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const TitleHeader = styled.div`
    width:60vw;
    height:10vh;
    margin-top:20px;
`;

const Title = styled.h1`
    font-size:25px;
    font-weight:bold;
    color:#8A72E3;
`;

const TabContainer = styled.div`
    width:60vw;
    height:100%;
    border-top:1px solid #000;
    display:flex;
    flex-direction:column;
`;

const TabHeader = styled.div`
    width:60vw;
    height:5vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#EDEAFC;
`;

const TabContent = styled.div`
    width:60vw;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

const CartObject = styled.div`
    width:60vw;
    height:100%;
    border-bottom:1px solid #ddd;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const TotalCheckBox = styled.div`
    font-size:15px;
    color:#333333;
    font-weight:bolder;
    margin-left:10px;
`;

const ProductTitle = styled.p`
    width:30vw;
    font-size:15px;
    color:#333333;
    font-weight:bolder;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ProductPrice = styled.p`
    font-size:15px;
    color:#333333;
    font-weight:bolder;
`;

const ProductQuantity = styled.p`
    font-size:15px;
    color:#333333;
    font-weight:bolder;
`;

const ProductDelete = styled.p`
    font-size:15px;
    margin-right:20px;
    color:#333333;
    font-weight:bolder;
`;

const OnlyCheckbox = styled.p`
    font-size:12px;
    margin-left:15px;
`;

const ObjectTitle = styled.p`
    width:30vw;
    font-size:13px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#386DA1;
`;

const ObjectPrice = styled.p`
    font-size:12px;
`;

const ObjectDelete2 = styled.button`
    font-size:15px;
    margin-right:10px;
    background-color:#fff;
    border:1px solid #000;
    color:#000;
`;

const ObjectImg = styled.img`
    width:5vw;
    height:10vh;
    margin-right:5px;
`;

const ObjectQuantity = styled.p`
    font-size:12px;
`;

const ButtonContainer = styled.div`
    width:60vw;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:30px;
`;

const PesButton = styled.button`
    width:10vw;
    height:5vh;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid #000;
    background-color:#fff;
    font-weight:bolder;
    cursor:pointer;
`;

const ReddisonButton = styled.button`
    width:10vw;
    height:5vh;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:10px;
    color:#0078ff;
    border:1px solid #0078ff;
    background-color:#fff;
    font-weight:bolder;
    cursor:pointer;
`;