import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.id;

    const [productDetail, setProductDetail] = useState("");

    const goCart = (id) => {
            try {
                axios
                .post("https://api.spaceodessey.store/api/products/cart/"+id, {},{ headers: {
                    Authorization: localStorage.getItem("Authorization")
                }})
                .then((res) => {
                        console.log(res);
                        alert("장바구니에 추가되었습니다.");
                });
            } catch (error) {
                console.log(error);
                alert("잠시뒤에 시도해주세요.")
            }
    };

    const pessimisticOrder = (id) => {
        try {
            axios
                .post("https://api.spaceodessey.store/api/products/order-one/pessimisticLock", {
                    productId: id,
                    quantity: 1,
                    dcType:"none",
                    discount: 0
                },{ headers: {
                    Authorization: localStorage.getItem("Authorization")
                }})
                .then((res) => {
                    console.log(res);
                    alert("주문되었습니다(pessimistic).");
                    window.location.reload();
                });
        } catch (error) {
            console.log(error);
            alert("잠시뒤에 시도해주세요.");
        }
    }

    const reddisonOrder = (id) => {
        try {
            axios
            .post("https://api.spaceodessey.store/api/products/order-one/redissonLock", {
                productId: id,
                quantity: 1,
                dcType:"none",
                discount: 0
            },{ headers: {
                Authorization: localStorage.getItem("Authorization")
            }})
            .then((res) => {
                    console.log(res);
                    alert("주문되었습니다(reddison).");
                    window.location.reload();
            });
        } catch (error) {
            console.log(error);
            alert("잠시뒤에 시도해주세요.");
        }
    }

    useEffect(() => {
        async function searchData() {
            let page = 0;
            const config = {
                params: { page: page },
                headers: {
                    Authorization: localStorage.getItem("Authorization"),
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            };
            try {
                await axios
                    .get("https://api.spaceodessey.store/api/products/"+id, config)
                    .then((res) => {
                        console.log(res);         
                        setProductDetail(res.data);
                });
            } catch (error) {
                console.log(error);
            }

        }
        searchData();
    }, []);

    return(
        <>
        <DetailContainer>
            <DetailImgDiv>
                <DetailImg src={ localStorage.getItem("img"+productDetail.imgurl+"_s3") }/>
            </DetailImgDiv>
            <DetailDescriptionDiv>
                <TitleDescriptionDiv>
                    <Title>{productDetail.name}</Title>
                    <Description>{productDetail.description}</Description>
                </TitleDescriptionDiv>
                <PriceDiv>
                    <Price>{productDetail.price}원</Price>
                </PriceDiv>
                <DetailDiv>
                    <Date>발행일 : {productDetail.date}</Date>
                    <Order>주문수 : {productDetail.orderCount} </Order>
                    <Stock>재고수 : {productDetail.stock}</Stock>
                    <Page>페이지 : {productDetail.pages}</Page>
                    <Introduction>소개 : {productDetail.introduction}</Introduction>
                </DetailDiv>
            </DetailDescriptionDiv>
            <ButtonDiv>
                <CartButton onClick={ () => goCart(productDetail.id) }>장바구니로</CartButton>
                <OrderButton onClick={ () => pessimisticOrder(productDetail.id) }>주문하기(pessimistic)</OrderButton>
                <OrderButton onClick={ () => reddisonOrder(productDetail.id) } style={{borderColor:"red", color:"red"}}>주문하기(reddison)</OrderButton>
            </ButtonDiv>
        </DetailContainer>
        </>
    );    
};

export default ProductDetail;

const DetailContainer = styled.div`
    width:100vw;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:35px;
`;

const DetailImgDiv = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DetailDescriptionDiv = styled.div`
    width:100%;
    height:100%;
    margin-left:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

const DetailImg = styled.img`
    width:25vw;
    height:70vh;
    border:none;
    box-shadow: 5px 5px 10px;
`;

const TitleDescriptionDiv = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Title = styled.p`
    font-size:25px;
    font-weight:bolder;
`;

const Description = styled.p`
    margin-left:10px;
    font-size:20px;
    font-weight:bolder;
    color:#666666;
`;

const PriceDiv = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Price = styled.p`
    font-size:20px;
    color:#666666;
`;

const DetailDiv = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

const Date = styled.p`
    font-size:15px;
`;

const Order = styled.p`
    font-size:15px;
`;

const Stock = styled.p`
    font-size:15px;
`;

const Page = styled.p`
    font-size:15px;
`;

const Introduction = styled.p`
    font-size:15px;
`;

const ButtonDiv = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;
    margin-bottom:20px;
`;

const CartButton = styled.button`
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

const OrderButton = styled.button`
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