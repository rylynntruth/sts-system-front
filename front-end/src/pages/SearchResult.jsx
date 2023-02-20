import React, { useEffect, useState } from "react";
import styled from "styled-components";
import testImg from "../img/puppy.jpg"
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const SearchResult = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state.name;

    const [products, setProduct] = useState([]);

    const goDetail = (id) => {
        navigate('ProductDetail');
    };

    useEffect(() => {
        async function searchData() {
            const page = 0;
            const config = {
                params: { name: name, page: page },
                headers: {
                    Authorization: localStorage.getItem("Authorization"),
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            };
            try {
                await axios
                    .get(" http://3.37.190.145:8080/api/products/search", config)
                    .then((res) => {
                        console.log("호출합니다.");
                        console.log(res);
                        setProduct(res.data.content);
                    });
            } catch (error) {
                console.log(error);
            }
        }

        searchData();
    }, []);

    return (
        <>
            <SearchFrame>
                <p><TextSpan>{name}</TextSpan> 에 대한 검색 결과 입니다.</p>
            </SearchFrame>
            <ProductList>
                <Product>
                    <ProductUl>
                        {products?.map((product) => {
                            return (
                                <ProductLi key={product.id}>
                                    <LinkTag href="#" onClick={goDetail}>
                                        <DescriptionDiv>
                                            <ProductImg src={testImg} />
                                            <TextDiv>
                                                <p>{product.name}</p>
                                                <p>{product.description}</p>
                                            </TextDiv>
                                        </DescriptionDiv>
                                        <ButtonDiv>
                                            <p>{product.price}원</p>
                                        </ButtonDiv>
                                    </LinkTag>
                                </ProductLi>
                            );
                        })}
                    </ProductUl>
                </Product>
            </ProductList>
        </>
    );

};

export default SearchResult;

const SearchFrame = styled.div`
    width: 100%;
    height: 150px;
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:30px;
    color:#14aaff;
    font-weight:bolder;
    border-bottom:2px solid #ddd;
`;

const ProductList = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Product = styled.table`
    width:50%;
`;

const ProductUl = styled.ul`
`;

const ProductLi = styled.li`
    margin-top:20px;
    list-style:none;
    display:block;
    border-bottom: 2px solid #dddddd;
`;

const ProductImg = styled.img`
    width:200px;
    height:200px;
    z-index:1;
`;

const LinkTag = styled.a`
    display:flex;
    justify-content:space-between;
`;

const DescriptionDiv = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
`;

const ButtonDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: flex-end;
`;

const TextDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left:20px;
`;

const TextSpan = styled.span`
    color:black;
`;