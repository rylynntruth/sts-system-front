import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const KeyWordSearchResult = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state.name;
    const selectData = location.state.selectData;

    const [products, setProduct] = useState([]);
    const [responseTime, setResponseTime] = useState("");
    
    function msToTime(duration) {
        var milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60);

        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return minutes + "분 " + seconds + "초 " + milliseconds;
    }

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
                if (selectData === "like") {
                    await axios
                        .get("https://api.spaceodessey.store/api/products/search/like/"+name, config)
                        .then((res) => {                        
                            console.log("like 호출합니다.");
                            setResponseTime(msToTime(res.data.totalTime));
                            setProduct(res.data.result.data);
                        });
                } else if (selectData === "full") {
                    await axios
                        .get("https://api.spaceodessey.store/api/products/search/full/"+name, config)
                        .then((res) => {                        
                            console.log("full 호출합니다.");
                            setResponseTime(msToTime(res.data.totalTime));
                            setProduct(res.data.result.data);
                        });
                } else if (selectData === "read") {
                    await axios
                        .get("https://api.spaceodessey.store/api/products/search/redis/"+name, config)
                        .then((res) => {                        
                            console.log("read 호출합니다.");
                            setResponseTime(msToTime(res.data.totalTime));
                            setProduct(res.data.result.data);
                        });
                } else if (selectData === "look"){
                    await axios
                        .get("https://api.spaceodessey.store/api/products/search/redis/cacheaside/"+name, config)
                        .then((res) => {                        
                            console.log("look 호출합니다.");
                            setResponseTime(msToTime(res.data.totalTime));
                            setProduct(res.data.result.data);
                        });
                } else if (selectData === "cache") {
                    await axios
                    .get("https://api.spaceodessey.store/api/products/search/cache/"+name, config)
                    .then((res) => {                        
                            console.log("cache 호출합니다.");
                            console.log(res);
                            setResponseTime(msToTime(res.data.totalTime));
                            setProduct(res.data.result.data);
                        });
                } else {
                    await axios
                    .get("https://api.spaceodessey.store/api/products/search/normal/"+name, config)
                    .then((res) => {                        
                            console.log("normal 호출합니다.");
                            console.log(res);
                            setResponseTime(msToTime(res.data.totalTime));
                            setProduct(res.data.result.data);
                        });
                }
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
                <p><RedSpan>{responseTime}</RedSpan></p>
            </SearchFrame>
            <ProductList>
                <Product>
                    <ProductUl>
                        {products?.map((product) => {
                            return (
                                <ProductLi key={product.id}>
                                    <LinkTag>
                                        <DescriptionDiv>
                                            <ProductImg src={ localStorage.getItem("img"+product.imgurl+"_s3") } />
                                            <TextDiv>
                                                <Title>{product.name}</Title>
                                                <Des>{product.description}</Des>
                                            </TextDiv>
                                        </DescriptionDiv>
                                        <ButtonDiv>
                                            <Price>{product.price}원</Price>
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

export default KeyWordSearchResult;

const SearchFrame = styled.div`
    width: 100%;
    height: 150px;
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size:30px;
    color:#14aaff;
    font-weight:bolder;
    border-bottom:2px solid #ddd;
    padding:0;
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
    width:140px;
    height:170px;
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

const RedSpan = styled.span`
    color:red;
`;

const Title = styled.p`
    font-size:1.3em;
    font-weight:bolder;
`;

const Des = styled.p`
    font-size:0.9em;
    color: #74747B;
    font-weight:bolder;
`;

const Price = styled.p`
    font-size:0.7em;
    color: #74747B;
`;