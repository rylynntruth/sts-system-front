import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BestsellerSearch = () => {
    const navigate = useNavigate();

    const [products, setProduct] = useState([]);

    const goDetail = (id) => {
        navigate("ProductDetail", {
            state: {
                id: id
            }
        });
    };

    const goCart = () => {
        navigate("/cartList");
    }

    const goBestSeller = (e) => {
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
            axios
                .get("https://api.spaceodessey.store/api/products/bestseller", config)
                .then((res) => {               
                    console.log(res);         
                    console.log(res.data);
                    setProduct(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const goDomestic = (e) => {
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
            axios
                .get("https://api.spaceodessey.store/api/products/domestic", config)
                .then((res) => {                        
                    console.log(res.data);
                    setProduct(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const goForeign = (e) => {
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
            axios
                .get("https://api.spaceodessey.store/api/products/foreign", config)
                .then((res) => {                        
                    console.log(res.data);
                    setProduct(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const goEbook = (e) => {
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
            axios
                .get("https://api.spaceodessey.store/api/products/ebook", config)
                .then((res) => {                        
                    console.log(res.data);
                    setProduct(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

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
                    .get("https://api.spaceodessey.store/api/products/bestseller", config)
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

    return (
        <>
        <MenuWrap>
            <Banner>
                <TitleBox>
                    <p style={{color:"red",fontWeight:"bolder"}} onClick={ goCart }>장바구니로</p>
                </TitleBox>
                <TitleBox onClick={() => goBestSeller()}>
                    <p>베스트셀러</p>
                </TitleBox>
                <TitleBox onClick={() => goDomestic()}>
                    <p>국내도서</p>
                </TitleBox>
                <TitleBox onClick={() => goForeign()}>
                    <p>해외도서</p>
                </TitleBox>
                <TitleBox onClick={() => goEbook()}>
                    <p>e-book</p>
                </TitleBox>
            </Banner>
            <ProductList>
                {products?.map((product) => {
                    return (
                    <Product key={product.id} onClick={() =>  goDetail(product.id) }>
                        <ProductImg src={ localStorage.getItem("img"+product.imgurl+"_s3") } />
                        <ProductDec>
                            <TitleP>{product.name}</TitleP>
                            <DateP>{product.date.substr(0,10)}</DateP>
                            <PriceP>{product.price}원</PriceP>
                        </ProductDec>
                    </Product>
                    )
                })}
            </ProductList>
        </MenuWrap>    
        </>
    );

};

export default BestsellerSearch;

const MenuWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`;

const Banner = styled.div`
    width:35vh;
    height:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    font-weight:bolder;
    font-size:25px;
    margin-top:10px;
`;

const ProductList = styled.div`
    width:157vh;
    height:100%;
    display:flex;
    flex-wrap:wrap;
`;

const Product = styled.div`
    width:30vh;
    height:100%;
    margin-top:15px;
    margin-left:15px;
    display:flex;
    flex-direction:column;
    cursor: pointer;
`;

const ProductImg = styled.img`
    width:30vh;
    height:40vh;
    z-index:1;
    box-shadow: 2px 2px 2px 2px #000;
`;

const ProductDec = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:10px;
`;

const TitleP = styled.p`
    margin:0;
    margin-left:5px;
    font-size:17px;
    font-weight:bolder;
`;

const DateP = styled.p`
    margin:5px;
    color: #74747B;
    font-weight: bolder;
    font-size:12px;
`;

const PriceP = styled.p`
    margin:0;
    margin-left:5px;
    color: #74747B;
    font-size:12px;
`;

const TitleBox = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:3px solid #ddd;
    cursor:pointer;
`;