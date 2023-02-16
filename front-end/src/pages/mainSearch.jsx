import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import search from "../img/search.png";

const MainSearch = () => {
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

    return (
    <>
    <InputSearch>
        <InputBox type="text" 
        onKeyPress={searchText} 
        placeholder="검색어를 입력해주세요." 
        value={ name }
        onChange={(event) => setName(event.target.value)}
        />
        <InputLabel><SearchLogo src={ search }></SearchLogo></InputLabel>
    </InputSearch>
    <Footer>
        
    </Footer>
    </>
    );
};

export default MainSearch;

const InputSearch = styled.div`
    width:100%;
    height:75vh;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const InputBox = styled.input`
    width:100vh;
    height:11vh;
    border:none;
    border-bottom:3px solid black;
    font-size:20px;
    font-weight:bolder;
`;

const InputLabel = styled.label`
    display:flex;
    align-items: center;
    height:8vh;
    font-size:25px;
    padding:1.5vh;
    
`;

const SearchLogo = styled.img`
    width:5vh;
    height:5vh;
`;

const Footer = styled.div`
    border-top:1px solid #ddd;
`;