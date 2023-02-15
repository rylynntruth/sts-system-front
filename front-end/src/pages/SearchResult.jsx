import React from "react";
import styled from "styled-components";
import testImg from "../img/puppy.jpg"
import { useNavigate } from "react-router-dom";

const SearchResult = () => {
    const navigate = useNavigate();

    const goDetail = () => {
        navigate('ProductDetail');
    };

    return (
        <>
        <SearchFrame>
            <p>검색어에 대한 검색 결과 입니다.</p>
        </SearchFrame>
        <ProductList>
            <Product>
                <ProductUl>
                    <ProductLi>
                        <LinkTag href="" onClick={ goDetail }>
                            <DescriptionDiv>
                                <ProductImg src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%ED%95%9C%EC%8B%9D/%EC%9A%94%EB%A6%AC-%EB%B3%B6%EC%9D%8C%EB%A5%98/%EC%8A%A4%ED%83%81_20201223_DHK%EC%99%B8%EB%B6%80_%EB%82%99%EA%B3%B1%EC%83%88_Side01_1080x640_MJWU36.jpg?width=384&height=273&quality=100" />
                                <TextDiv>
                                    <p>제목이 들어갑니다.</p>
                                    <p>설명이 들어갑니다.</p>
                                </TextDiv>
                            </DescriptionDiv>
                            <ButtonDiv>
                                <p>가격이 들어갑니다.</p>
                            </ButtonDiv>
                        </LinkTag>
                    </ProductLi>
                    <ProductLi>
                        <LinkTag href="">
                            <DescriptionDiv>
                                <ProductImg src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%ED%95%9C%EC%8B%9D/%EC%9A%94%EB%A6%AC-%EB%B3%B6%EC%9D%8C%EB%A5%98/%EC%8A%A4%ED%83%81_20201223_DHK%EC%99%B8%EB%B6%80_%EB%82%99%EA%B3%B1%EC%83%88_Side01_1080x640_MJWU36.jpg?width=384&height=273&quality=100"/>
                                <TextDiv>
                                    <p>제목이 들어갑니다.</p>
                                    <p>설명이 들어갑니다.</p>
                                </TextDiv>
                            </DescriptionDiv>
                            <ButtonDiv>
                                <p>가격이 들어갑니다.</p>
                            </ButtonDiv>
                        </LinkTag>
                    </ProductLi>
                    <ProductLi>
                        <LinkTag href="">
                            <DescriptionDiv>
                                <ProductImg src={testImg}/>
                                <TextDiv>
                                    <p>제목이 들어갑니다.</p>
                                    <p>설명이 들어갑니다.</p>
                                </TextDiv>
                            </DescriptionDiv>
                            <ButtonDiv>
                                <p>가격이 들어갑니다.</p>
                            </ButtonDiv>
                        </LinkTag>
                    </ProductLi>
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
    font-size:40px;
    color:#14aaff;
    font-weight:bolder;
    border-bottom:2px solid #0078ff;
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