import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backArrow from "../img/backX.png"
import search from "../img/search.png";

const SearchTab = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("");

    const searchText = (e) => {
        if(e.key === 'Enter') {
            navigate("/Search", {
                state: {
                    name: name
                }
            });
        }
    };

    const goBack = () => {
        navigate("/mainSearch");
    };

    return (
        <>
        <SearchHeader>
            <BackArrow src={ backArrow } onClick={ goBack }>
            </BackArrow>
            <InputSearch>
                <SearchBar type="text" 
                onKeyUp={ searchText }
                placeholder="검색어를 입력해주세요." 
                value={ name }
                onChange={(event) => setName(event.target.value)}
                />
                <InputLabel><SearchLogo src={ search }></SearchLogo></InputLabel>
            </InputSearch>
            <EmptyDiv></EmptyDiv>
        </SearchHeader>
        <ContentContainer>
            <Content>
                <ContentHeader>
                    <HeaderTitle>
                        검색모드설정
                    </HeaderTitle>
                </ContentHeader>
            </Content>
            <Content>
                <ContentHeader>
                    <HeaderTitle>
                        캐싱된검색어
                    </HeaderTitle>
                </ContentHeader>
            </Content>
            <Content>
                <ContentHeader>
                    <HeaderTitle>
                        캐싱안된검색어
                    </HeaderTitle>
                </ContentHeader>
            </Content>
        </ContentContainer>
        </>
    );
};

export default SearchTab;

const SearchHeader = styled.div`
    width:100%;
    height:13vh;
    display:flex;
    justify-content:space-between;
`;

const BackArrow = styled.img`
    width:5vh;
    height:5vh;
    cursor: pointer;
`;

const SearchBar = styled.input`
    width:80vh;
    height:10vh;
    border:none;
    border-bottom:3px solid black;
    font-size:20px;
    font-weight:bolder;
`;

const EmptyDiv = styled.div`
    width:10vh;
    height:7vh;
`;

const InputLabel = styled.label`
    display:flex;
    align-items: center;
    height:8vh;
    font-size:25px;
    padding:1.5vh;
    
`;

const SearchLogo = styled.img`
    width:7vh;
    height:7vh;
`;

const InputSearch = styled.div`
    width:100%;
    height:10vh;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const ContentContainer = styled.div`
    width:100%;
    height:85vh;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

const Content = styled.div`
    width:70vh;
    height:85vh;
    border:1px solid #000;
    margin-right:10px;
    margin-left:10px;
    display:flex;
    flex-direction:column;
`;

const ContentHeader = styled.div`
    width:100%;
    height:10vh;
    background-color:#F3F3F3;
    display:flex;
    justify-content:start;
    align-items:center;
`;

const HeaderTitle = styled.h1`
    margin-left:20px;
    color:#000;
    font-size:3vh;
`;