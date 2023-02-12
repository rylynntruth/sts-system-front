import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CategorySearch = () => {

    return (
        <>
        <MenuWrap>
            <Banner>
                <p>MenuName</p>
                <BannerLine>
                </BannerLine>
            </Banner>
            <ProductList>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
                <Product>
                    <ProductImg>

                    </ProductImg>
                    <ProductDec>
                        <p>a</p>
                    </ProductDec>
                </Product>
            </ProductList>
        </MenuWrap>    
        </>
    );
};

export default CategorySearch;

const MenuWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`;

const Banner = styled.div`
    width:50vh;
    height:100%;
    border-bottom:2px solid #ddd;
    display:flex;
    justify-content:center;
    font-weight:bolder;
    font-size:25px;
    margin-top:10px;
`;

const BannerLine = styled.div`
`;

const ProductList = styled.div`
    width:157vh;
    height:100%;
    display:flex;
    flex-wrap:wrap;
`;

const Product = styled.div`
    width:28vh;
    height:100%;
    border:1px solid #000;
    margin-top:15px;
    margin-left:15px;
    display:flex;
    flex-direction:column;
`;

const ProductImg = styled.img`
    width:28vh;
    height:150px;
    z-index:1;
`;

const ProductDec = styled.div`
    display:flex;
    justify-content:center;
`;