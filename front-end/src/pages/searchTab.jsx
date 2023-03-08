import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backArrow from "../img/backX.png"
import search from "../img/search.png";

const SearchTab = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [selectData,setSelectData] = useState("read");

    const searchText = (e) => {
        if(e.key === 'Enter') {
            if (name.trim() === "") {
                alert("검색어를 입력해주세요.");
                return;
            }
            navigate("/Search", {
                state: {
                    name: name,
                    selectData: selectData
                }
            });
        }
    };

    const goBack = () => {
        navigate("/mainSearch");
    };

    const goCache = (keyword) => {
        navigate("/KeyWordSearchResult", {
            state: {
                name: keyword,
                selectData: "cache"
            }
        });
    };

    const goNormal = (keyword) => {
        navigate("/KeyWordSearchResult", {
            state: {
                name: keyword,
                selectData: "normal"
            }
        });
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
                <ModeContainer>
                    <ModeLabel><ModeRadio type="radio" name="mode" value="like"
                    onChange={(e) => setSelectData(e.target.value)}/>LIKE(데이터 200만)</ModeLabel>
                    <ModeLabel><ModeRadio type="radio" name="mode" value="full"
                    onChange={(e) => setSelectData(e.target.value)}/>FULL TEXT INDEX(500만)</ModeLabel>
                    <ModeLabel><ModeRadio type="radio" name="mode" value="read"
                    onChange={(e) => setSelectData(e.target.value)} defaultChecked/>Redis read through (1000만)</ModeLabel>
                    <ModeLabel><ModeRadio type="radio" name="mode" value="look"
                    onChange={(e) => setSelectData(e.target.value)}/>Redis look aside (1000만)</ModeLabel>
                </ModeContainer>
            </Content>
            <Content>
                <ContentHeader>
                    <HeaderTitle1>
                        Cache 검색어
                    </HeaderTitle1>
                </ContentHeader>
                <CacheContainer>
                    <CacheRow1>
                        <CacheP onClick={() => goCache("Federic")}>Federic</CacheP>
                        <CacheP onClick={() => goCache("Levi")}>Levi</CacheP>
                        <CacheP onClick={() => goCache("Victor")}>Victor</CacheP>
                        <CacheP onClick={() => goCache("Robbie")}>Robbie</CacheP>
                        <CacheP onClick={() => goCache("Jeffery")}>Jeffery</CacheP>
                        <CacheP onClick={() => goCache("Isaac")}>Isaac</CacheP>
                        <CacheP onClick={() => goCache("Monika")}>Monika</CacheP>
                        <CacheP onClick={() => goCache("Jade")}>Jade</CacheP>
                        <CacheP onClick={() => goCache("Harber")}>Harber</CacheP>
                        <CacheP onClick={() => goCache("Matthew")}>Matthew</CacheP>
                    </CacheRow1>
                    <CacheRow2>
                        <CacheP onClick={() => goCache("Gayle")}>Gayle</CacheP>
                        <CacheP onClick={() => goCache("Ami")}>Ami</CacheP>
                        <CacheP onClick={() => goCache("Paris")}>Paris</CacheP>
                        <CacheP onClick={() => goCache("Shenna")}>Shenna</CacheP>
                        <CacheP onClick={() => goCache("Celia")}>Celia</CacheP>
                        <CacheP onClick={() => goCache("Ted")}>Ted</CacheP>
                        <CacheP onClick={() => goCache("Elicia")}>Elicia</CacheP>
                        <CacheP onClick={() => goCache("Debora")}>Debora</CacheP>
                        <CacheP onClick={() => goCache("Coy")}>Coy</CacheP>
                        <CacheP onClick={() => goCache("Violette")}>Violette</CacheP>
                    </CacheRow2>
                </CacheContainer>
            </Content>
            <Content>
                <ContentHeader>
                    <HeaderTitle2>
                        Normal 검색어
                    </HeaderTitle2>
                </ContentHeader>
                <NormalContainer>
                    <NormalRow1>
                        <NormalP onClick={() => goNormal("gaylord")}>gaylord</NormalP>
                        <NormalP onClick={() => goNormal("maria")}>maria</NormalP>
                        <NormalP onClick={() => goNormal("marni")}>marni</NormalP>
                        <NormalP onClick={() => goNormal("clint")}>clint</NormalP>
                        <NormalP onClick={() => goNormal("derrick")}>derrick</NormalP>
                        <NormalP onClick={() => goNormal("octavio")}>octavio</NormalP>
                        <NormalP onClick={() => goNormal("vicenta")}>vicenta</NormalP>
                        <NormalP onClick={() => goNormal("brain")}>brain</NormalP>
                        <NormalP onClick={() => goNormal("delorse")}>delorse</NormalP>
                        <NormalP onClick={() => goNormal("feil")}>feil</NormalP>
                    </NormalRow1>
                    <NormalRow2>
                        <NormalP onClick={() => goNormal("forest")}>forest</NormalP>
                        <NormalP onClick={() => goNormal("refugio")}>refugio</NormalP>
                        <NormalP onClick={() => goNormal("senaida")}>senaida</NormalP>
                        <NormalP onClick={() => goNormal("ryan")}>ryan</NormalP>
                        <NormalP onClick={() => goNormal("ezra")}>ezra</NormalP>
                        <NormalP onClick={() => goNormal("columbus")}>columbus</NormalP>
                        <NormalP onClick={() => goNormal("dominga")}>dominga</NormalP>
                        <NormalP onClick={() => goNormal("miguel")}>miguel</NormalP>
                        <NormalP onClick={() => goNormal("langworth")}>langworth</NormalP>
                        <NormalP onClick={() => goNormal("jaskolski")}>jaskolski</NormalP>
                    </NormalRow2>
                </NormalContainer>
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
    width:7vh;
    height:7vh;
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

const HeaderTitle1 = styled.h1`
    margin-left:20px;
    color:#00d47b;
    font-size:3vh;
    font-weight:bolder;
`;

const HeaderTitle2 = styled.h1`
    margin-left:20px;
    color:#0091FA;
    font-size:3vh;
    font-weight:bolder;
`;

const ModeContainer = styled.div`
    width:100%;
    height:75vh;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:left;
`;

const ModeRadio = styled.input`
    width:5vh;
    height:3vh;
`;

const ModeLabel = styled.label`
    font-size:25px;
    font-weight:bolder;
    color:#FF9900;
`;

const CacheContainer = styled.div`
    width:100%;
    height:75vh;
    display:flex;
    flex-direction:row;
`;

const CacheRow1 = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    border-right:1px solid #000;
`;

const CacheRow2 = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`;

const NormalContainer = styled.div`
    width:100%;
    height:75vh;
    display:flex;
    flex-direction:row;
`;

const NormalRow1 = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    border-right:1px solid #000;
`;

const NormalRow2 = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`;

const CacheP = styled.p`
    font-size:12px;
    color:#000;
    margin-left:20px;
    font-weight:bolder;
    cursor:pointer;
`;

const NormalP = styled.p`
    font-size:12px;
    color:#000;
    margin-left:20px;
    font-weight:bolder;
    cursor:pointer;
`;